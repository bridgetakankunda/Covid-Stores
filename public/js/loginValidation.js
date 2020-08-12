// Defining a function to display error message
// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }
const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (event) => {


        // Retrieving the values of form elements 
        var employeeID = document.loginForm.employeeID.value;
        var password = document.loginForm.password.value;
        

            // Defining error variables with a default value
            var erremployeeID = errpassword  = true;

            // Validate name
            if (employeeID == "") {
                printError("erremployeeID", "Please enter your employeeID");
            } else {
                var regex = /^[1-9]\d{4}$/;
                if (regex.test (employeeID) === false) {
                    printError("erremployeeID", "Please enter a valid employeeID");
                } else {
                    printError("erremployeeID", "");
                    erremployeeID = false;
                }
            }

            // Val password
            if (password == "") {
                printError("errpassword", "Please enter your password");
            } else {
                // Regular expression for basic password validation
                var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

                if (mediumRegex.test(password) === false) {
                    printError("errpassword", "Please enter a valid password");
                } else {
                    printError("errpassword", "");
                    emailErr = false;
                }
            }
            // Prevent the form from being submitted if there are any errors
            if ((erremployeeID || errpassword ) == true) {
                event.preventDefault()

            } else {
                event.currentTarget.submit()
            }

    })
// Defining a function to validate form
