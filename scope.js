//Scope 
//In JavaScript, scope refers to the accessibility of variables, functions, and objects in some particular part of your code during runtime.


let a = 10
const b = 20
let c = 30

console.log(a, b, c)



//scope

if (true) {
  let m = 100
  const n = 200
  var o = 300
}
  
console.log(m)
console.log(n)
console.log(o)
// All variables declared with `let` and `const` are block-scoped, meaning they are not accessible outside the block they were defined in.
// The variable declared with `var` is function-scoped or globally scoped, so it can be accessed outside the block.
