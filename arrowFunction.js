const user = {
    name: "Agrim",
    price : 100,

    welcomeMessage: function() {
    console.log(`${this.name} welcome to the JavaScript course!`);
    }
}
user.welcomeMessage();

//this talks about the context of the function
//In this case, 'this' refers to the user object.  


function Agrim() {
    console.log(this);
}
Agrim(); //this will refer to the global object in non-strict mode or undefined in strict mode
//In the context of a function, 'this' refers to the global object (window in browsers) or undefined in strict mode.

function chai() {
    let username = "Agrim";
    console.log(this.username);
    
}
chai(); //this will log undefined because 'this' does not refer to the user object in this context


const arrowFunction = () => { //Arrow Function
    let username = "Agrim";
    console.log(this);
}
arrowFunction(); 


//Implicit Return
const add = (a, b) => a + b; //This is an arrow function

console.log(add(5, 10)); //This will log 15


//Object return
const createUser = (name, age) => ({
    name: name,
    age: age
});
console.log(createUser("Agrim", 25)); //This will log { name: 'Agrim', age: 25 }



