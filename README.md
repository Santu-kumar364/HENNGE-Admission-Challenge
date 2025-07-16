<h1 align="center">🛡️ HENNGE Frontend Password Validation Challenge</h1>

<p align="center">
  <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20110%20110.1'%3e%3cdefs%3e%3cstyle%3e.b{fill:%23211613}%3c/style%3e%3c/defs%3e%3cpath%20fill='%232c2d2f'%20d='M19.5.1a.7.7%200%200%200-1%201%2060%2060%200%200%201%2011.6%2035.6%2060%2060%200%200%201-11.6%2035.6.7.7%200%200%200%201%201%2060.3%2060.3%200%200%201%2071.1%200%20.7.7%200%200%200%201-1%2060.3%2060.3%200%200%201%200-71.1.7.7%200%200%200-1-1%2060%2060%200%200%201-35.5%2011.5A60%2060%200%200%201%2019.5.1z'/%3e%3cpath%20d='M0%2089.3h3.5v8.3h9.3v-8.3h3.5v20.2h-3.5v-9H3.5v9H0zM18.9%2089.3h14.6v3h-11v5.3h10.1v3H22.4v5.9h11.3v3H18.9zM35.9%2089.3h3.7l9.3%2014.9v-15h3.4v20.3h-3.8l-9.2-14.9v15h-3.4zM54.7%2089.3h3.8l9.2%2014.9v-15h3.5v20.3h-3.8l-9.2-14.9H58v15h-3.4zM95.2%2089.3h14.6v3h-11v5.3H109v3H98.8v5.9H110v3H95.2zM84.6%2098.8v3h5a5.3%205.3%200%200%201-1.9%203.7%206%206%200%200%201-4%201.5%207.2%207.2%200%200%201-4.9-2%207%207%200%200%201-2.4-5.6%207.4%207.4%200%200%201%202.2-5.4%207.2%207.2%200%200%201%205.3-2.2%207.4%207.4%200%200%201%206%203.3l.1.1%202.5-2.3h-.1a13%2013%200%200%200-4-3.3%2011%2011%200%200%200-12.2%202.2%2010.8%2010.8%200%200%200%200%2015.2%2010.2%2010.2%200%200%200%207.4%203.1h.2A9.4%209.4%200%200%200%2091%20107a8.8%208.8%200%200%200%201.9-3.2%2014%2014%200%200%200%20.5-4v-.9z'%20class='b'/%3e%3c/svg%3e" alt="HENNGE Logo" width="120"/>
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

