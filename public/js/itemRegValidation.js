// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const itemReg = document.querySelector('#itemReg')
itemReg.addEventListener('submit', (event) => {
//   alert("heloo");


    // Retrieving the values of form elements 
    var itemName = document.itemReg.itemName.value;
    var itemMake = document.itemReg.itemMake.value;
    var serialNumber = document.itemReg.serialNumber.value;

    // Defining error variables with a default value
    var erritemName = erritemMake = errSerialNumber = true;

    // Validate name
    if (itemName == "") {
        printError("erritemName", "Please enter Item name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(itemName) === false) {
            printError("erritemName", "Please enter a valid name");
        } else {
            printError("erritemName", "");
            erritemName = false;
        }
    }

    if (itemMake == "") {
        printError("erritemMake", "Please enter Item Make");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(itemMake) === false) {
            printError("erritemMake", "Please enter a valid format for item make name");
        } else {
            printError("erritemMake", "");
            erritemMake = false;
        }
    }

    if (serialNumber == "") {
        printError("errSerialNumber", "Please enter Serial Number");
    } else {
        var regex = /^[A-Z0-9\s]+$/;
        if (regex.test(serialNumber) === false) {
            printError("errSerialNumber", "Please enter a valid format for serial number");
        } else {
            printError("errSerialNumber", "");
            errSerialNumber = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((erritemName || erritemMake || errSerialNumber) == true) {
        event.preventDefault();
    } else {
        // event.currentTarget.submit()
    }
    

})

