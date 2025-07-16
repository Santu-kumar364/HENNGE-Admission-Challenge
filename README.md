<h1 align="center">🛡️ HENNGE Frontend Password Validation Challenge</h1>

<p align="center">
  <img 
    src="https://drive.google.com/uc?export=view&id=197qeh4jNfVEMWCC_QRw1YVPhYfrTXGT2" 
    alt="HENNGE Logo"
    width="160"
/>
</p>

---

## 📄 CHALLENGE DETAILS

### 📌 Introduction

Thank you for your interest in HENNGE.

This challenge is intended for **front-end applicants**. It consists of **three exciting missions** designed to showcase your skills and creativity. Once you have successfully completed all three missions, you will receive an email with a link to submit your CV and cover letter (CL).

Our team of engineers will carefully review your code, CV, and cover letter. Please note that due to the high volume of applications, it may take up to **four weeks** to receive your results. If you haven't heard from us by then, feel free to reach out!

Use your cover letter to tell your story and what inspired you to apply to HENNGE.

There is no submission deadline, but the challenge **may be modified**. You must submit your solution using the **latest version** within **2 weeks** of any updates.

🕐 **Last update: January 1, 2025**

---

## 🧩 Mission 1: Complete the Code Challenge

Download the starter:

```bash
frontend_password_validation_v1_challenge.tar.gz

Choose React or Vue (provided boilerplate), and work only on:
src/create-user-form.tsx or create-user-form.vue

🛠 Components
- create-user-form: Contains Username & Password input. You will work only on this.

- app: Contains the success message "User was successfully created".

⚠️ Do NOT change any CSS or install extra packages.

🔗 Connect the Form to the API
https://api.challenge.hennge.com/password-validation-challenge-api/001
Refer /openapi.json for specification.

🔒 Server-Side Handling
🔘 Send request on button press:
- Gather username & password

- POST to /challenge-signup

- Include headers:
Authorization: Bearer <your-token-from-challenge-details>

✅ On Success:
Transition to success state in app

❌ 500 Error:
Something went wrong, please try again.

⚠️ Weak Password:
Sorry, the entered password is not allowed, please try a different one.

🚫 Unauthorized (401/403):
Not authenticated to access this resource.

📌 Reset errors when the form is resubmitted.

🧪 Client-Side Password Validation
Validation Criteria:
Password must be at least 10 characters long
Password must be at most 24 characters long
Password cannot contain spaces
Password must contain at least one number
Password must contain at least one uppercase letter
Password must contain at least one lowercase letter

Examples:
2838172 → show 3 messages

A2 Password → show 1 message

ThisPa55wordIsOK → show nothing

Display Guidelines:
Use list or separate lines

Must not send API request if:

Username is blank

Password is invalid

♿ Accessibility
Inputs must have accessible names:

html
Copy
Edit
<label for="username">Username</label>
<label for="password">Password</label>
💡 Add aria-invalid for extra points.

🧾 Mission 2: Publish as Secret Gist
Only submit:

text
Copy
Edit
src/create-user-form.tsx OR src/create-user-form.vue
❌ No other files

❌ Do not deploy publicly

📬 Mission 3: Send Submission
Create JSON:

json
Copy
Edit
{
  "contact_email": "your.email@example.com",
  "github_url": "https://gist.github.com/YOUR_ACCOUNT/GIST_ID",
  "solution_framework": "react"
}
Submit via POST:
h
Copy
Edit
POST /challenges/frontend-password-validation/001 HTTP/1.1
Authorization: Basic base64(email:HENNGECHALLENGE)
Content-Type: application/json
Sample body:

json
Copy
Edit
{
  "contact_email": "ninja@example.com",
  "github_url": "https://gist.github.com/hennge/b859bd12e7a7fb418141",
  "solution_framework": "react"
}
Sample success:

json
Copy
Edit
{
  "message": "Congratulations! You have achieved mission 3"
}
❓ Got Questions?
Only contact us if:

You face 500 errors or API issues

For help:

Interns: gip@hennge.com

Career: recruit-engineer@hennge.com

⚖️ Copyright
© HENNGE K.K. All rights reserved.

This challenge and materials are confidential. Sharing or publishing them in whole or part is prohibited.


