
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


const customer_form = document.getElementById('customerReg');

customer_form.addEventListener('submit', (event) => {

    // Retrieving the values of form elements 
    var firstName = document.customerReg.firstName.value;
    var surName = document.customerReg.surName.value;
    var phoneNumber = document.customerReg.phoneNumber.value;
    var email = document.customerReg.email.value;
    var itemName = document.customerReg.itemName.value;
    // var itemMake = document.customerReg.itemMake.value;
    var gender = document.customerReg.gender.value;
    var nin = document.customerReg.nin.value;
    // var itemNumber = document.customerReg.itemNumber.value;
    var itemPrice = document.customerReg.itemPrice.value;

    // Defining error variables with a default value
    var errfirstName = errsurName = errphoneNumber = erremail = erritemName =  erritemPrice = errgender = errnin = true;

    // Validate first name
    if (firstName == "") {
        printError("errfirstName", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstName) === false) {
            printError("errfirstName", "Please enter your first name");
        } else {
            printError("errfirstName", "");
            errfirstName = false;
        }
    }


    // Validate sur name
    if (surName == "") {
        printError("errsurName", "Please enter your surname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(surName) === false) {
            printError("errsurName", "Please enter your surname");
        } else {
            printError("errsurName", "");
            errsurName = false;
        }
    }

    // Validate phone number
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
    // validate national id number
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

    // Validate gender
    if (gender == "") {
        printError("errgender", "Please select your gender");
    } else {
        printError("errgender", "");
        errgender = false;
    }

    // validate item name
    if (itemName == "") {
        printError("erritemName", "Please enter Item name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(itemName) === false) {
            printError("erritemName", "Please enter a valid  itemname");
        } else {
            printError("erritemName", "");
            erritemName = false;
        }
    }
    // // validate item make
    // if (itemMake == "") {
    //     printError("erritemMake", "Please enter Item Make");
    // } else {
    //     var regex = /^[a-zA-Z\s]+$/;
    //     if (regex.test(itemMake) === false) {
    //         printError("erritemMake", "Please enter a valid format for item make name");
    //     } else {
    //         printError("erritemMake", "");
    //         erritemMake = false;
    //     }
    // }
    // validate item number
    
    // validate item price
    if (itemPrice == "") {
        printError("erritemPrice", "Please enter Item price");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(itemPrice) === false) {
            printError("erritemMake", "Please enter the item price");
        } else {
            printError("erritemPrice", "");
            erritemPrice = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((errfirstName || errsurName || errphoneNumber || erremail || erritemName || erritemPrice || errgender || errnin) == true) {
        event.preventDefault();

    } else {
        event.currentTarget.submit();
    }
})
// Defining a function to validate form

