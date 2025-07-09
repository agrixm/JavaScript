const score = 33


const balance = new Number(1000); // Using the Number object to create a number

console.log(balance);   // Output: [Number: 1000] (this is an object wrapper around the number)

console.log(balance.toString().length); // Output: 4 (the string representation of the number has 4 characters)


console.log(score.toFixed(2)); // Output: "33.00" (the number is formatted to 2 decimal places)
console.log(balance.toFixed(4)); // Output: "1000.0000" (the number is formatted to 4 decimal places)


const num1 = 10.567
console.log(num1.toPrecision(3)); // Output: "10.6" (the number is formatted to 3 significant digits)



const num2 = 10000000000

console.log(num2.toLocaleString('en-IN'));  // Output: "1,00,00,00,000" (the number is formatted according to Indian numbering system)
console.log(num2.toLocaleString('en-US'));  // Output: "10,000,000,000" (the number is formatted according to US numbering system)




//Maths in JavaScript


console.log(Math.PI) // Output: 3.141592653589793 (the value of PI in JavaScript)

console.log(Math.abs(-10)); // Output: 10 (the absolute value of -10)




console.log(Math.round(4.7)); // Output: 5 (the number is rounded to the nearest integer)\
console.log(Math.round(4.4)); // Output: 4 (the number is rounded to the nearest integer)


console.log(Math.ceil(4.1)); // Output: 5 (the number is rounded up to the nearest integer)
console.log(Math.floor(4.9)); // Output: 4 (the number is rounded

console.log(Math.min(10, 20, 30)); // Output: 10 (the minimum value among the numbers)

console.log(Math.max(10, 20, 30)); // Output: 30 (the maximum value among the numbers) 


console.log(Math.random()); // Output: A random number between 0 and 1 (inclusive of 0 but exclusive of 1)

console.log((Math.random()*10)+1);  // Output: A random number between 1 and 11 (inclusive of 1 but exclusive of 11)


console.log(Math.floor(Math.random()*10)); 

//What is Math.floor ?
// Math.floor() is a method in JavaScript that rounds a number down to the nearest integer.

 

