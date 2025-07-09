const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];


//Another way to declare an array
const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myHeros[2]); // Accessing the third element of the array


// Array methods
myArr.push(6)
myArr.push(7);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6]
myArr.pop();
console.log(myArr); // Output: [1, 2, 3, 4, 5]


console.log(myArr.includes(9));   // Output: false


const arr3 = [1, 2, 3, 4, 5];

console.log(arr3.slice(1, 3)); // Output: [2, 3]
console.log(arr3.splice(1,3)); // Output: [2, 3, 4] (removes elements from index 1 to 3)    



const marvel = ["ironman", "captain america", "thor", "hulk", "black widow"];
const dc = ["superman", "batman", "flash"];


const heroes = marvel.concat(dc);
console.log(heroes); // Output: ["ironman", "captain america", "thor", "hulk", "black widow", "superman", "batman", "flash"]


marvel.push(dc);
console.log(marvel); // Output: ["ironman", "captain america", "thor", "hulk", "black widow", ["superman", "batman", "flash"]]



const arr4 = [1, 2, [3, 4, 5], 6, 7,[8, 9]];

const flattenedArr = arr4.flat();
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


console.log(Array.isArray("Agrim")); // Output: false

console.log(Array.from("Agrim")); // Output: ["A", "g", "r", "i", "m"]