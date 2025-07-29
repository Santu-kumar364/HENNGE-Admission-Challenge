import { useState } from 'react';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';

interface CreateUserFormProps {
  setUserWasCreated: Dispatch<SetStateAction<boolean>>;
}

function CreateUserForm({ setUserWasCreated }: CreateUserFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [apiError, setApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (pw: string): string[] => {
    const errors: string[] = [];
    if (pw.length > 0 && pw.length < 10) errors.push("Password must be at least 10 characters long");
    if (pw.length > 24) errors.push("Password must be at most 24 characters long");
    if (/\s/.test(pw)) errors.push("Password cannot contain spaces");
    if (pw.length > 0 && !/[0-9]/.test(pw)) errors.push("Password must contain at least one number");
    if (pw.length > 0 && !/[A-Z]/.test(pw)) errors.push("Password must contain at least one uppercase letter");
    if (pw.length > 0 && !/[a-z]/.test(pw)) errors.push("Password must contain at least one lowercase letter");
    return errors;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidationErrors(validatePassword(newPassword));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');

    const errors = validatePassword(password);
    setValidationErrors(errors);

    if (errors.length > 0 || !username.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const token = window.location.pathname.split('/').pop() || '';
      const response = await fetch(
        'https://api.challenge.hennge.com/password-validation-challenge-api/001/challenge-signup',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 401 || response.status === 403) {
          setApiError('Not authenticated to access this resource.');
        } else if (response.status === 500) {
          if (errorData.error?.includes('not allowed')) {
            setApiError('Sorry, the entered password is not allowed, please try a different one.');
          } else {
            setApiError('Something went wrong, please try again.');
          }
        }
        return;
      }

      setUserWasCreated(true);
    } catch (err) {
      setApiError('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={formWrapper}>
      <form style={form} onSubmit={handleSubmit}>
        <label style={formLabel} htmlFor="username">Username</label>
        <input
          id="username"
          style={formInput}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
          required
          disabled={isSubmitting}
        />

        <label style={formLabel} htmlFor="password">Password</label>
        <input
          id="password"
          style={formInput}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          aria-label="Password"
          required
          aria-invalid={validationErrors.length > 0}
          disabled={isSubmitting}
        />

        {password.length > 0 && validationErrors.length > 0 && (
          <ul style={errorList}>
            {validationErrors.map((error, index) => (
              <li key={index} style={errorItem}>{error}</li>
            ))}
          </ul>
        )}

        {apiError && (
          <div style={apiErrorStyle}>
            {apiError}
          </div>
        )}

        <button
          style={{
            ...formButton,
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting || validationErrors.length > 0 || !username.trim() ? 'not-allowed' : 'pointer'
          }}
          type="submit"
          disabled={isSubmitting || validationErrors.length > 0 || !username.trim()}
        >
          {isSubmitting ? 'Creating...' : 'Create User'}
        </button>
      </form>
    </div>
  );
}

export { CreateUserForm };

const formWrapper: CSSProperties = {
  maxWidth: '500px',
  width: '80%',
  backgroundColor: '#efeef5',
  padding: '24px',
  borderRadius: '8px',
};

const form: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const formLabel: CSSProperties = {
  fontWeight: 700,
};

const formInput: CSSProperties = {
  outline: 'none',
  padding: '8px 16px',
  height: '40px',
  fontSize: '14px',
  backgroundColor: '#f8f7fa',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
};

const formButton: CSSProperties = {
  outline: 'none',
  borderRadius: '4px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: '#7135d2',
  color: 'white',
  fontSize: '16px',
  fontWeight: 500,
  height: '40px',
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8px',
  alignSelf: 'flex-end',
  cursor: 'pointer',
};

const errorList: CSSProperties = {
  margin: '8px 0',
  paddingLeft: '20px',
  color: '#d32f2f',
  listStyleType: 'none',
};

const errorItem: CSSProperties = {
  marginBottom: '4px',
};

const apiErrorStyle: CSSProperties = {
  color: '#d32f2f',
  margin: '12px 0',
  padding: '8px',
  backgroundColor: '#fdecea',
  borderRadius: '4px',
  borderLeft: '4px solid #d32f2f',
};