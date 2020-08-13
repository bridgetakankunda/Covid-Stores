// Defining a function to display error message
function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
}
const adminLoginForm = document.querySelector('#adminLoginForm')
login_admin.addEventListener('submit', (event) => {


// Retrieving the values of form elements
var username = document.adminLoginForm.username.value;
var password = document.adminLoginForm.password.value;


// Defining error variables with a default value
    var errusername = errpassword = true;

    // Validate name
    if (username == "") {
        printError("errusername", "Please enter your manager ID");
    } else {
    var regex = /^[1-9]\d{4}$/;
    if (regex.test (username) === false) {
        printError("errmanagerID", "Please enter a valid manager ID");
    } else{
        printError("erruser", "");
        errusername = false;
     }
    }

    // Validate  password
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
    if ((errusername || errpassword ) == true) {
        event.preventDefault()

    } else {
        event.currentTarget.submit()
    }

    })
    // Defining a function to validate form