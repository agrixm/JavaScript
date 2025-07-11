console.log("A")
console.log("G");
console.log("R")
console.log("I");
console.log("M");


//function is used to encapsulate code that can be reused

function myName() {
    console.log("A")
    console.log("G");
    console.log("R")
    console.log("I");
    console.log("M");
}
myName();

// Function to add two numbers
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(); // This will not work as no arguments are passed{no arguments provided}
addTwoNumbers(5, 10); // This will work and output 15
addTwoNumbers(3,"7"); // This will give 37 as output due to type coercion
addTwoNumbers(3,null); // This will give 3 as output due to type coercion


//Returning values from functions

function addTwoNumbersAndReturn(num1, num2) {
    return num1 + num2;
}
const result = addTwoNumbersAndReturn(5, 10);
console.log(result); 



function loginUserMessage(username){
    return `Welcome ${username}`;
}
console.log(loginUserMessage("Agrim"));
console.log(loginUserMessage()); // This will return "Welcome undefined" as no argument is passed

//If and else statements

function loginUserMessage(username){
    if (username === undefined) {
        return "Welcome Guest";
    }
    return `Welcome ${username}`;
}

console.log(loginUserMessage());



function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100)); // This will return 100
console.log(calculateCartPrice(200,400,500)); 


const user = {
    name: "Agrim",      
    price: 199
};
function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user); // This will output "User name is Agrim and price is 199"


const arr = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
    return getArray[1];
    
}
console.log(returnSecondValue(arr)); // This will output 2