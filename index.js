// Write your solution in this file!
var customerName = "bob"; 
var bestCustomer;
function getCustomerName() {
    return customerName;
}

  function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

  function setBestCustomer() {
  bestCustomer = "not bob"; 
}
  
function overwriteBestCustomer(name) {
   bestCustomer = name;
}
  
const leastFavoriteCustomer = "Karen";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Chad"; 
}