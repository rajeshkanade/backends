// Module wrapper function is the function which get automatically created when we run the node js file and the code of file get embedded in the function.

// eg.

// const name = "rajesh"
// console.log(name)

// This get automatically embedded in the anonymous wrapper function in group operator '()'=> group operator

// this is anonymous function has four parameter (module,require,import,__dirname,__filename)
// const fs = require("fs");
// (function (exports, require, module, __filename, __dirname) {
//   const name = "rajesh";
//   console.log(name);
// })(); // here we call the function

// console.log(__filename)
// console.log(__dirname)

// basically after we run the program the code get embedded in this function
// We use module , require because of this function becoz it has an parameters like module , require
