// The node:path module provides utilities for working with file and directory paths. It can be accessed using: path module 

const path = require("path");

// console.log(path.dirname("E:/node/11 - Path Module/index.js"))


// console.log(path.basename("E:/node/11 - Path Module/index.js"))
// console.log(path.extname("E:/node/11 - Path Module/index.js"))

// console.log(path.parse("E:/node/11 - Path Module/index.js")) // returns all the information about the path in the form of object 

// const myPath = path.parse("E:/node/11 - Path Module/index.js"); 
// console.log(myPath.name) // retriving the name key value from the object given from the parse method 
// console.log(myPath.root)

console.log(path.dirname(__filename));
console.log(path.basename(__filename));