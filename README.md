 
CHALLENGE DETAILS
Introduction
Thank you for your interest in HENNGE.

This challenge is intended for front-end applicants. It consists of three exciting missions designed to showcase your skills and creativity. Once you have successfully completed all three missions, you will receive an email with a link to submit your CV and cover letter (CL).

Our team of engineers will carefully review your code, CV, and cover letter. Please note that due to the high volume of applications, it may take up to four weeks to receive your results. If you haven't heard from us by then, please feel free to reach out!

What drives your passion for front-end development? Use your cover letter to tell us your story and what inspired you to apply to HENNGE. For expert advice in crafting a compelling cover letter, read this article.

For internship candidates, please check the available front-end batches on our official website. We wish you the best of luck and look forward to reviewing your submission!

While there's no submission deadline, this challenge may be modified by HENNGE. Submissions answering the old challenge will be accepted for two weeks following any modifications. After two weeks, only submissions addressing the latest version will be evaluated. Please check the date of the latest update before completing the mission and re-download the challenge as necessary.

Challenge last update time: January 1, 2025.

Mission 1: Complete the code challenge
To get started, please download the frontend_password_validation_v1_challenge.tar.gz file below.

Inside, you'll find project folders for different frameworks: The framework folders are boilerplate projects of their respective framework. Feel free to choose the one you're most comfortable with! After you are ready, feel free to read and do the challenge as described below.

Resources
We have prepared the projects with the pnpm package manager.

frontend_password_validation_v1_challenge.tar.gz
Password Validation
You have been provided with a project that is the beginnings of a "Create User" page. This has been provided in both React and Vue in and you are free to choose which to work with.

The project currently consists of two components:

create-user-form
This is the component you will be working on. It consists of two inputs - Username and Password - and there is some markup and styling provided, but it is lacking interactivity.
You will work on this component only, and this will be the code that you submit in the end.
app
This is a component that contains create-user-form but also has a "User was successfully created" state. You may need to look at this file to finish your implementation.
Your task is to connect the form to an API and add validation. Do not change any of the CSS provided. Installing external dependencies or adding additional files is prohibited.

Refer to the sections below for the detailed requirements.

Connect the form to the API
The following is the base URL for our API. You can find the OpenAPI specification by accessing /openapi.json from the base URL.

https://api.challenge.hennge.com/password-validation-challenge-api/001
Server-side handling requirements
Send a request to the endpoint when the button is pressed
When the submit button is pressed, the component should:

Gather form data: Collect the values from the form.
Send request: Send a request to the /challenge-signup endpoint as defined in the OpenAPI specification.
Format: Ensure the request body adheres to the format specified in the OpenAPI specification.
Authentication: Include an Authorization header with the token that is located in the path parameter when you access the /challenge-details page (HENNGE Admission Challenge's Challenge Details page).
Refer to the OpenAPI specification for detailed information on the authentication scheme and request format.

Handle a successful response from the API
Upon receiving a successful response from the API (as detailed in the OpenAPI specification), the UI should transition to a designated success state.

To facilitate this transition, the parent page (app) includes pre-built logic. Your task is to seamlessly integrate this logic with the component's response handling mechanism.

Handle a generic error response from the API
The form needs to be able to handle situations where the API encounters an error and returns a 500 Internal Server Error response. When that error is encountered, please display the following message in the form.

Something went wrong, please try again.
Handle a specific error response from the API
To enhance security, our API incorporates a database of commonly used and easily guessed passwords that are not permitted for account creation. For instance, Password123 is not allowed. This should be handled slightly differently to the generic error above. When you receive this error from the API, please display the following message in the form.

Sorry, the entered password is not allowed, please try a different one.
Handle unauthorized error response from the API
In addition to standard success and error handling, the component must address unauthorized access attempts.

As detailed in the OpenAPI specification, the API may return 401 or 403 responses. When these occur, display the following message prominently within the form:

Not authenticated to access this resource.
This distinct message informs the user about the authentication issue, differentiating it from other error scenarios.

When the form is resubmitted, reset the error messages above.

All of the error messages must use their exact wording, including the punctuation marks. You are free to put the error message anywhere in the form.

Form validation
Although we will of course have server-side validation, for a smoother user experience, we will want to add some client-side validation.

The password has been designed to require a certain set of criteria. Here are the criteria:

Password must be at least 10 characters long
Password must be at most 24 characters long
Password cannot contain spaces
Password must contain at least one number
Password must contain at least one uppercase letter
Password must contain at least one lowercase letter
You will need to use the above criteria in their exact wording, including the lack of punctuation marks as messages in the UI.

Client-side handling requirements
Show and hide criteria appropriately
The appropriate criteria should be shown and hidden according to the value that is in the password input, dynamically as the user types. For example:

A password of 2838172 should show Password must be at least 10 characters long, Password must contain at least one lowercase letter, and Password must contain at least one uppercase letter
A password of A2 Password should only show Password cannot contain spaces
A password of ThisPa55wordIsOK should show no criteria
You are free to decide where to display the error messages to the user, with a few key guidelines:

Maintain a clear visual separation between form validation errors and those returned by the API.
Display each error message individually, avoiding a single, continuous line of text. Consider using a bulleted list for clarity.
The order in which error messages are presented is not critical.
The form must not make an API request if there is no username or the password is invalid
As mentioned, the form must not make an API request when there is no username (blank username) or when the password is invalid.

Label the inputs appropriately
For the sake of accessibility, interactive elements should have accessible names.

Based on your knowledge and/or using the MDN page linked above as a reference, make sure that the inputs have the correct accessible name Username and Password, in their exact wording.

They will be used in evaluating your code, so this is important!

Evaluation
Your submission will undergo automated testing in a Chromium-based browser (latest version). Your code will be built, deployed, and tested against the requirements specified in this document.

We encourage you to follow the functionality requirements listed above as closely as possible. As a reminder, all of the error messages must be the exact same as the ones that are specified here.

The CSS will not be evaluated with this system and you do not need to change any of the provided styling. But you are welcome to use your judgement to style any additional elements you add.

Good luck!

Extra points
For extra points, take a look at this page on aria-invalid and add it to the form appropriately.

Mission 2: Publish your source code as a secret gist
To ensure confidentiality, we ask that you publish your source code as a secret gist on GitHub. This will allow us to review your work while keeping it private.

If you're not familiar with secret gists, no worries! We've got you covered. Simply follow the step-by-step instructions in this helpful guide.

For the submission, we only accept a single create-user-form file, which is located inside the src directory. The file must be named create-user-form with the proper file extension: create-user-form.tsx for React or create-user-form.vue for Vue. Your source code will be evaluated upon completion of Mission 3.

Important reminder: Please avoid publishing your code as a public gist or deploying to any public-facing URLs. Make sure to upload only a single create-user-form.tsx or create-user-form.vue file. Do not submit any additional files.

Mission 3: Send us the URL of your work
First, create a JSON string with your contact information, the URL of your secret gist, and the framework you used. It should look like this:

{
  "contact_email": "EMAIL",
  "github_url": "https://gist.github.com/YOUR_ACCOUNT/GIST_ID",
  "solution_framework": "FRAMEWORK"
}
Replace EMAIL with your email address, YOUR_ACCOUNT/GIST_ID with the path to your secret gist, and FRAMEWORK with your chosen framework (react or vue).

Next, send this JSON string as the body of an HTTP POST request to the following URL:

https://api.challenge.hennge.com/challenges/frontend-password-validation/001
Important details:

Content-Type: Make sure the Content-Type of your request is set to application/json.
Authorization: This URL is protected by HTTP Basic Authentication (explained in Chapter 2 of RFC2617). You'll need to include an Authorization header field in your request.
Use your email address (the same one you used in the JSON string) as the userid.
Use the ASCII string value "HENNGECHALLENGE" (without the quotes) as the password.
Sample Request
POST /challenges/frontend-password-validation/001 HTTP/1.1
Authorization: Basic bmluamFAZXhhbXBsZS5jb206SEVOTkdFQ0hBTExFTkdF
Host: api.challenge.hennge.com
Accept: */*
Content-Type: application/json
Content-Length: 136

{"contact_email":"ninja@example.com", "github_url":"https://gist.github.com/hennge/b859bd12e7a7fb418141", "solution_framework":"react"}
Sample Response
HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 1 Jan 2025 00:00:00 GMT
Transfer-Encoding: chunked

{"message":"Congratulations! You have achieved mission 3"}
Any questions? Found a bug?
The challenge is designed to be completed independently. To ensure a fair evaluation, please avoid contacting us with questions about the challenge itself. However, if you encounter any internal server errors or 500 status codes, please do contact us for assistance. When reporting such errors, please include screenshots, network logs, and/or a minimum reproducible example (steps to reproduce the error) to help us with the investigation.

If you have any other questions or need assistance with something unrelated to the challenge, please don't hesitate to reach out to us at gip@hennge.com (for internship candidates) or recruit-engineer@hennge.com (for mid-career candidates).

Copyright
Do not share this challenge.

© HENNGE K.K. All rights reserved.

This coding challenge and all associated materials are the intellectual property of HENNGE K.K. Unauthorized reproduction, distribution or disclosure of any part of this content, in whole or in part, is strictly prohibited and constitutes intellectual property infringement.

HENNGE © 2025 | Contact us here | Privacy Policy
This coding challenge and all associated materials are the intellectual property of HENNGE K.K. Unauthorized reproduction, distribution or disclosure of any part of this content, in whole or in part, is strictly prohibited and constitutes intellectual property infringement.

