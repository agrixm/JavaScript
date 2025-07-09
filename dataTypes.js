"use strict"; // treat all JavaScript code as ES6{javascript}

//alert(3+4); // this will not work in Node.js, but will work in the browser    

let a = 5; // Number data type
let b = "Agrim"; // String data type
let c = true; // Boolean data type
let d = null; // Null data type
let e; // Undefined data type
let f = Symbol("unique"); // Symbol data type
let g = BigInt(123456789012345678901234567890); // BigInt data type

//what is null?
// Null is a special value that represents the intentional absence of any object value.


//what is undefined?
// Undefined is a variable that has been declared but has not been assigned a value. 

console.log(typeof d); // Output: object (this is a known quirk in JavaScript) 

console.log(typeof b); // Output: string
console.log(typeof a); // Output: number



let score = 33
console.log(typeof score); // Output: number


let score2 = "33ABC"; // This is a string that cannot be converted to a number
console.log(typeof score2); // Output: string


let valueInNumber = Number(score2);
console.log(typeof valueInNumber); // Output: number
console.log(valueInNumber); // Output: NaN (Not a Number, because "33ABC" cannot be converted to a number)


let x = "5"; // String data type
let y = Number(x) // Convert string to number
console.log(typeof y); // Output: number
console.log(y); // Output: 5 (the string "5" is converted to the number 5)



let v = null 
let w = Number(v) // Convert null to number
// In JavaScript, null is converted to 0 when using Number()
console.log(typeof w);   // Output: number
console.log(w);     // Output: 0 (null is converted to 0 when using Number())


let m = undefined 
let n = Number(m)  // Convert undefined to number
// In JavaScript, undefined is converted to NaN (Not a Number) when using Number
console.log(typeof n);  
console.log(n); // Output: NaN (undefined is converted to NaN when using Number())

let k = true
let l = Number(k)
console.log(typeof l);  // Output: number
console.log(l); // Output: 1 (true is converted to 1 when using Number())


let p = 1
let q = Boolean(p) // Convert number to boolean
console.log(typeof q); // Output: boolean
console.log(q); // Output: true (1 is truthy, so it converts to true)


let r = 33
let s = String(r) // Convert number to string
console.log(typeof s); // Output: string        
console.log(s); // Output: "33" (the number 33 is converted to the string "33")



//opeartions

let num1 = 10;
let negnum = -num1; // Negation operation
console.log(negnum); // Output: -10 (the negation of 10 is -10)


console.log(num1 + 5); // Addition operation
console.log(num1 - 5); // Subtraction operation     
console.log(num1 * 5); // Multiplication operation
console.log(num1 / 5); // Division operation
console.log(num1 % 3); // Modulus operation (remainder of division)
console.log(num1 ** 2); // Exponentiation operation (10 raised to the power of 2)

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // String concatenation (Output: "Hello World")


console.log(+true); // Output: 1 (true is converted to 1)
console.log(+false); // Output: 0 (false is converted to 0)


// comparison operations
let a1 = 5; 
let b1 = 10;
console.log(a1 < b1); // Output: true (5 is less than 10
console.log(a1 > b1); // Output: false (5 is not greater than 10)
console.log(a1 <= b1); // Output: true (5 is less than or equal to 10)
console.log(a1 >= b1); // Output: false (5 is not greater than or equal to 10)
console.log(a1 == b1); // Output: false (5 is not equal to 10)
console.log(a1 != b1); // Output: true (5 is not equal to 10)


// strict equality and inequality
console.log(a1 === b1); // Output: false (strict equality, checks value and type)
console.log(a1 !== b1); // Output: true (strict inequality, checks value and type)



const id = Symbol('123'); // Creating a unique symbol
const anotherId = Symbol('123'); // Another unique symbol with the same description

console.log(id === anotherId); // Output: false (symbols are unique, even with the same description)


//Arrays
const heroes = ["Superman", "Batman",];

//Objects
let person = {
    name: "Agrim",
    age: 25,    
}

//Functions
const myfunction = function(){
    console.log("This is a function");
}

console.log(typeof myfunction);
console.log(typeof person); 
console.log(typeof heroes);


