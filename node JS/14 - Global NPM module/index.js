// In this we studied how to install any package or module globally in the system 

// To install package or module globally use 
//     -g or -global at the end of command 

//     eg. npm install nodemon -g 

// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

// Basically nodemon runs the application when changes are makes like the server start 


const chalk = require("chalk")
const validator = require("validator")


console.log(chalk.red.inverse("false"))


const res = validator.isEmail("RajeshKanade121@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))