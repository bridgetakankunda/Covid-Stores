    function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    }
    const managerReg = document.querySelector('#managerReg')
    managerReg.addEventListener('submit', (event) => {


    // Retrieving the values of form elements
    var firstName = document.managerReg.firstName.value;
    var surName = document.managerReg.surName.value; 
    var username = document.managerReg.username.value;
    var phoneNumber = document.managerReg.phoneNumber.value;   
    var password = document.managerReg.password.value;
    var email = document.managerReg.email.value;
    var nin = document.managerReg.nin.value;

    // Defining error variables with a default value
    var errfirstName = errsurName = erremail = errusername = errphoneNumber = errpassword = errnin = true;

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

        // Validate name
        if (surName == "") {
            printError("errsurName", "Please enter your surName");
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if (regex.test(surName) === false) {
                printError("errsurName", "Please enter a valid surName");
            } else {
                printError("errsurName", "");
                errsurName = false;
            }
        }


        // Validate employee Id
        if (username == "") {
            printError("errmanagerID", "Please enter a valid manager ID");
        } else {
            var regex = /^[1-9]\d{4}$/;
            if (regex.test(username) === false) {
                printError("errmanagerID", "Please enter a valid manager ID");
            } else {
                printError("errusername", "");
                errusername = false;
            }
        }


        // Validate mobile number
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

        // validate nin
        if (nin == "") {
            printError("errnin", "Please enter your nin");
        } else {
            var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
            if (regex.test(nin) === false) {
                printError("errnin", "Please enter a valid nin format");
            } else {
                printError("errnin", "");
                errnin = false;
            }
        }
        // Prevent the form from being submitted if there are any errors
        if ((errfirstName || errsurName || erremail || errusername ||errphoneNumber || errpassword || errnin) == true) {
            event.preventDefault();

        } else {
            event.currentTarget.submit()
        }

    })
        // Defining a function to validate form