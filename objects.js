
const mySymbol = Symbol("mySymbol");


const jsUser = {
    name: "agrim", 
    age: 20,    
    [mySymbol]: mySymbol, // Using Symbol as a property
    location: "India",
    email: "agrim@gmail.com",
    isLoggedIn: true, 
    lastLoginDays:["Monday", "Tuesday", "Wednesday"],

}

// Accessing object properties
console.log(jsUser.name); 
console.log(jsUser.age);

// Accessing object properties using bracket notation
console.log(jsUser[name]); // This will throw an error because 'name' is not defined as a variable
console.log(jsUser["name"]); // Correct way to access the property using bracket notation
console.log(jsUser.mySymbol); // Accessing age property using bracket notation


console.log(typeof jsUser.mySymbol); // Output: string (even though mySymbol is a Symbol, it's stored as a string in the object)
console.log(jsUser[mySymbol]); // Accessing Symbol property
console.log(typeof jsUser[mySymbol]); // Output: symbol (correctly identifies the type of the Symbol property)


// Adding a new property to the object{OVERWRITNG THE EXISTING PROPERTY}

jsUser.isLoggedIn = false; // Changing the value of isLoggedIn property
jsUser.email = "vanshika@gmail.com"; // Changing the value of email property

//freezing the object
Object.freeze(jsUser); // Prevents any changes to the object

//Function inside an object
jsUser.greeting = function() {
    console.log("Hello Ji");    
}
jsUser.greeting2 = function() {
    console.log(`Hello ${this.name}`);  // Using 'this' to access the name property{backtick} 
} 

console.log(jsUser.greeting); // Output: [Function (anonymous)]
console.log(jsUser.greeting()); // Output: Hello Ji
console.log(jsUser.greeting2()); // Output: Hello agrim