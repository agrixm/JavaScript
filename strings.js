const name = "Agrim";
const age = 25;


console.log(name[3]); 

console.log(name + age)

// Template literals for string interpolation
// Using backticks to create a template string
// Allows embedding expressions inside ${}
// Example: embedding variables in a string

console.log(`My name is ${name} and I am ${age} years old.`); 


const newName = new String("Agrim")

console.log(typeof newName); 
console.log(newName[3]); // Accessing the 4th character of the string
console.log(newName.length); // Getting the length of the string
console.log(newName.toUpperCase()); // Converting the string to uppercase
console.log(newName.toLowerCase()); // Converting the string to lowercase
console.log(newName.charAt("2")); // Getting the character at index 2
console.log(newName.slice(0, 3)); // Slicing the string from index 0 to 3



const newString = "      Agrim      ";
console.log(newString); // Original string with whitespace
console.log(newString.trim()); // Removing whitespace from both ends of the string

const url = "https://www.example.com";
url.replace("https", "http"); // Replacing "https" with "http"
console.log(url); // Original URL remains unchanged, as strings are immutable
console.log(url.includes("https")); // Checking if the URL contains "https"



const str = "my-name-is-agrim";
const words = str.split("-"); // Splitting the string into an array of words
console.log(words); // Output: ["my", "name", "is", "agrim"]