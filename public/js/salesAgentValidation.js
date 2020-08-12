function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const agentReg = document.querySelector('#agentReg')
agentReg.addEventListener('submit', (event) => {


    // Retrieving the values of form elements 
    var firstName = document.agentReg.firstName.value;
    var surName = document.agentReg.surName.value;
    var employeeID = document.agentReg.employeeID.value;
    var password = document.agentReg.password.value;
    var email = document.agentReg.email.value;
    var nin = document.agentReg.nin.value;

    // Defining error variables with a default value
    var errfirstName = true;

    // Validate name
    if (firstName == "") {
        printError("errfirstName", "Please enter your firstName");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstName) === false) {
            printError("errfirstName", "Please enter a valid firstName");
        } else {
            printError("errfirstName", "");
            errfirstName = false;
        }
    }

    // // Validate employee Id
    if (employeeID == "") {
        printError("erremployeeID", "Please enter your employeeID");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(employeeID) === false) {
            printError("erremployeeID", "Please enter a valid employeeID");
        } else {
            printError("erremployeeID", "");
            erremployeeID = false;
        }
    }

    // Validate password
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

    // Validate name
    // if (surName == "") {
    //     printError("errsurName", "Please enter your surName");
    if (firstName == "") {
        printError("errfirstName", "Please enter your firstName");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(surName) === false) {
            printError("errsurName", "Please enter a valid surName");
        } else {
            printError("errsurName", "");
            errsurName = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("erremail", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("erremail", "");
            erremail = false;
        }
    }

    // // Validate mobile number
    if (phoneNumber == "") {
        printError("errphoneNumber", "Please enter your phone number");
    } else {
        var regex = /^\d{10}$/;
        if (regex.test(phoneNumber) === false) {
            printError("errphoneNumber", "Please enter a valid 10 digit phone number");
        } else {
            printError("errphoneNumber", "");
            errphoneNumber = false;
        }
    }
    // validate nin
    if (nin == "") {
        printError("errnin", "Please enter your nin");
    } else {
        var regex = /^[0-9A-Z\s]+$/;
        if (regex.test(nin) === false) {
            printError("errnin", "Please enter a valid nin format");
        } else {
            printError("errnin", "");
            errnin = false;
        }
    }
    // Prevent the form from being submitted if there are any errors
    if ((errfirstName) == true) {
        event.preventDefault();
       
    } else {
        // event.currentTarget.submit()
       
    }

})
// Defining a function to validate form