const tinderUser = {}

tinderUser.name = "John Doe"
tinderUser.age = 25 
tinderUser.bio = "Love hiking and outdoor adventures"
tinderUser.location = "California, USA"

console.log(tinderUser);


//Nested Objects Example
const regularUser = {
    email : "agrim@gmail.com",
    fullname : {
        username :{
            firstName : "Agrim",
            lastName : "Sharma"
        }
    },
    }

console.log(regularUser);
console.log(regularUser.fullname); 
console.log(regularUser.fullname.username);
console.log(regularUser.fullname.username.firstName); 
console.log(regularUser.fullname.username.lastName); 


//Destructuring Objects Example
const course = {
    name: "JavaScript Basics",  
    duration: "4 weeks",
    courseInstructor: "Agrim"
}

const {courseInstructor} = course;
console.log(courseInstructor); // Output: Agrim



//what is API?
//API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information. They enable developers to access the functionality of other software systems, services, or platforms without needing to understand their internal workings.

//APIs are commonly used to integrate different systems, access web services, or retrieve data from external sources. They can be used in various contexts, such as web development, mobile app development, and cloud computing. APIs can be public (open to anyone) or private (restricted to specific users or applications).

//API and JSON
//APIs often use JSON as a data format for exchanging information between a client (such as a web browser or mobile app) and a server. 

//JSON example:

/*{
    "name": "John Doe",
    "age": 30,
    "email":"agrim@gmail.com"
}
    */