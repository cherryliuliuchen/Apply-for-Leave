# Test Case for EasyLeave App

## Test Objective
Verify the functionality of the LeaveApplication component, ensuring that form field validation, data submission, and error handling work correctly.

## Test Environment
Browser: Chrome, Firefox
Operating System: Windows 10
Mobile Devices: iOS (Safari), Android (Chrome)
Test Data: Test user ID 002

## Pre-conditions
The user is logged in and has navigated to the LeaveApplication component page.

## Test Cases
### Test Case 001: Form Field Validation<br>Test Steps:<br>
> 1. Navigate to the LeaveApplication page.<br>
> 2. Attempt to submit the form without filling in any fields.<br><br>
> Expected Result:<br>
> An error message "Alla fält markerade med * är obligatoriska." (All fields marked with * are required) is displayed.

### Test Case 002: Correctly Fill Out and Submit the Form<br>
> 1. Navigate to the LeaveApplication page.<br>
> 2. Select "Årlig ledighet" as the leave type.<br>
> In the "Procentsats (%)" field, select 50%.<br>
> In the "Start datum" field, enter 2023-01-01.<br>
> In the "Varaktighet" field, select Morning.<br>
> In the "Slutdatum" field, enter 2023-01-02.<br>
> In the "Telefon" field, enter +46123456789.<br>
Click the "Skicka in" button to submit the form.<br><br>
> Expected Result:<br>
> A prompt "Lämna ansökan som har skickats in." (Leave application has been submitted) appears indicating successful form submission.
The console displays the submitted json data, the data can be found on DB<br>
> Users can see brief introduction on the Homepage.

![alt text](src/assets/pic/database.jpg)


### Test Case 3: Validate Phone Number Field/Switch Leave Types/Date and Duration Validation/User Feedback and Error Handling/Accessibility Compliance...


