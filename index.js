var customerName = "bob"; 
var upperCaseCustomerName;
var bestCustomer;
var overwriteBestCustomer;
const leastFavoriteCustomer = ''

upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase(); 
};

function setBestCustomer() {
   bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
   bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = 'bob again'
}

