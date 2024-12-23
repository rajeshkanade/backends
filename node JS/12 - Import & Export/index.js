
// Three way to import the module 


// 1) using the method/function name :-
// const add = require("./Operation");  // importing the single module 
// console.log(add(10,20))


// 2) using the object 
// const opr = require("./Operation") // importing the the object 
// console.log(opr)
// console.log(opr.add(10,20))  // calling the function add of the object  
// console.log(opr.sub(20,10)) // calling the function sub of the object


// 3) using the destructuring object 
const {add,sub,mul , name} = require("./Operation")


console.log(add(10,20))
console.log(sub(10,20))
console.log(mul(10,20))
console.log(name)