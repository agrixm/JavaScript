let myDate = new Date();
console.log(myDate.toString()); 
console.log(myDate.toDateString()); 
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString)




let newDate = new Date(2023,1,15,5,155,33); // Creating a new date object with specific year, month, day, hour, minute, second

console.log(newDate); 
console.log(newDate.toString());
console.log(newDate.toDateString());


// Date Format
//YYYY-MM-DD
let date = new Date("2023-01-15");

//MM/DD/YYYY
let date2 = new Date("06/15/2023");
console.log(date2.getMonth());
console.log(date2.getDate());




//Time Stamp
let timeStamp = Date.now(); 
console.log(timeStamp);  // Output: A timestamp representing the number of milliseconds since January 1, 1970, 00:00:00 UTC

console.log(date.getTime()/1000); // Output: The timestamp of the date object in seconds



