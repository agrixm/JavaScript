const accountID =1234; // Using const for constants that won't change
let accountName = "John Doe"; // Using let for variables that may change
var accountBalance = 1000.50;
accountCity = "New York"; 
let accountState ; // Undefined variable

accountName = "Jane Smith"; // Changing the value of accountName
accountBalance = 500;
accountCity = "Los Angeles";

console.log(accountID); // Displaying the account ID
console.log(accountName); // Displaying the account name
console.log(accountBalance); // Displaying the account balance
console.log(accountCity); // Displaying the account city



console.table([accountID, accountName, accountBalance,accountCity,accountState]); // Displaying the variables in a table format