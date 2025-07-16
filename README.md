 # HENNGE Frontend Challenge - Password Validation

A solution for the HENNGE frontend coding challenge implementing password validation with API integration.

## Challenge Overview

This project implements a "Create User" form with comprehensive password validation and API integration as specified in the HENNGE Frontend Challenge requirements.

## Features

- **Form Validation**:
  - Password length requirements (10-24 characters)
  - Character type requirements (uppercase, lowercase, number)
  - Space restriction
  - Dynamic validation feedback as user types

- **API Integration**:
  - Submission to `/challenge-signup` endpoint
  - Proper authentication handling
  - Comprehensive error handling (500 errors, password restrictions, auth errors)

- **Accessibility**:
  - Proper ARIA labels
  - Accessible error messages
  - `aria-invalid` implementation

## Technical Details

- **Framework**: [React/Vue] (specify which one you used)
- **API Base URL**: `https://api.challenge.hennge.com/password-validation-challenge-api/001`
- **Validation Requirements**:
  - Password must be at least 10 characters long
  - Password must be at most 24 characters long
  - Password cannot contain spaces
  - Password must contain at least one number
  - Password must contain at least one uppercase letter
  - Password must contain at least one lowercase letter

## Error Handling

The solution handles all specified error cases with appropriate user messages:

1. **Generic Error**: "Something went wrong, please try again."
2. **Invalid Password**: "Sorry, the entered password is not allowed, please try a different one."
3. **Unauthorized**: "Not authenticated to access this resource."

## Installation

This project was bootstrapped with [Create React App/Vite/etc.]. To run locally:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm dev`

## Challenge Requirements Met

- [x] Form connected to API with proper authentication
- [x] Success state handling
- [x] All specified error cases handled
- [x] Client-side password validation
- [x] Dynamic validation feedback
- [x] Accessible form inputs
- [x] Proper ARIA attributes
- [x] No external dependencies added
- [x] Original CSS preserved

## Submission

This solution was submitted to HENNGE as part of their frontend engineering challenge process.

**Note**: The source code is available as a secret gist as required by the challenge guidelines.

---

*This project was created as part of the HENNGE admission challenge. All challenge materials are property of HENNGE K.K.*

