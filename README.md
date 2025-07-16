<h1 align="center">🛡️ HENNGE Frontend Password Validation Challenge</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/santukumar7619/assets/main/hennge-logo.png" alt="HENNGE Logo" width="150"/>
</p>

<p align="center">
  Front-end coding assignment for the HENNGE internship program – focused on password validation, API integration, and form accessibility.
</p>

---

## 🚀 Challenge Overview

This project is part of the HENNGE Frontend Challenge, which consists of three missions to test the applicant's front-end development skills, creativity, and attention to detail.

This repository contains the implementation for **Mission 1**: Completing the password validation form using **React** (or Vue if preferred).

---

## 📌 Mission 1: Password Validation Form

### 🔧 Features Implemented

- ✅ Accessible inputs labeled `Username` and `Password`
- ✅ Live client-side password validation
- ✅ Real-time display of password criteria
- ✅ API integration with `https://api.challenge.hennge.com/password-validation-challenge-api/001`
- ✅ API response handling:
  - `200`: Transition to success state
  - `401/403`: `Not authenticated to access this resource.`
  - `500`: `Something went wrong, please try again.`
  - Common passwords: `Sorry, the entered password is not allowed, please try a different one.`
- ✅ Prevent submission if fields are invalid or empty
- ✅ `aria-invalid` used for accessibility (bonus)

---

## 🔐 Password Validation Criteria

The following messages are shown dynamically based on user input:

- Password must be at least 10 characters long  
- Password must be at most 24 characters long  
- Password cannot contain spaces  
- Password must contain at least one number  
- Password must contain at least one uppercase letter  
- Password must contain at least one lowercase letter  

Messages are shown/hidden in real-time and individually listed for clarity.

---

## 🧪 Tech Stack

- **Framework**: React (or Vue)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **HTTP Client**: Fetch API

---

## 📂 File Structure

```bash
.
├── src/
│   ├── create-user-form.tsx  # ✅ Submission file
│   └── app.tsx               # Parent component (success state logic)
├── public/
├── README.md                 # You are here!
└── ...

