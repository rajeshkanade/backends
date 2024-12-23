const fs = require("fs");

// fs.writeFile("read.txt","welcome to the node js tutorial ...", (err) => {
//     console.log("file write successfully...");
// });

// Synchronous Function is the function which exicutes code in the block mannar (one after the another)
const data = fs.readFileSync("read.txt","utf-8");
console.log(data)
console.log("Text file read successfully..!")

// output :-
// welcome to the node js tutorial ... (file content)
// Text file read successfully..!

// description :-
// Here the synchronous function run first then only the other statement where run 

// ----------------------------------------------------------------------------------------------------------------

// Asynchronous function is the function which exicutes code asynchronously means that the other code runs if the asynchronous function takes time. 

fs.readFile("read.txt","utf-8" , (err,data)=>{
    console.log(data)
})
console.log("Text file read Successfully...!");


// output :-
// Text file read Successfully...!
// welcome to the node js tutorial ...

// description :-
// Here the Asynchronous function run after the below statement bcoz it takes time to run so the below statement is run first. 