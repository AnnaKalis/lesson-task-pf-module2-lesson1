// Question 1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
    console.log("The strings are equal");
} 
else {
    console.log("Strings are not equal");
}

// Question 2

var username = "myusername";

if ((username.length >= 4) && (username.length <= 10)) {
    console.log("Acceptable username")
}
else {
    if (username.length < 4) {
        console.log("Too few characters");
    }
    if (username.length > 10) {
        console.log("Too many characters");
    }
}

//Question 3


var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
    console.log("Order complete");
}
else {
    if (invoicePaid === false) {
        console.log("Invoice not paid");}
    if (productDispatched === false) {
        console.log("Product not dispatched");}
    if (customerHasSigned === false) {
        console.log("Customer not signed");}  
}

// Question 4

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === false) || (productDispatched === false) || (customerHasSigned === false)) {
    if (invoicePaid === false) {
        console.log("Invoice not paid");}
    if (productDispatched === false) {
        console.log("Product not dispatched");}
    if (customerHasSigned === false) {
        console.log("Customer not signed");}  
}
else {
    console.log("Order complete");

}

        
