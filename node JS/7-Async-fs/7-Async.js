const fs = require("fs")

fs.writeFile("./read.txt","Welcome to the Asynchronous function", (err)=>{console.log("File is created");});


// The Main Difference between Synchronous fs is the it doesn't required any callback function as an argument.

// But in the Asynchronous fs callback function is necessary without callback function it shows an error 

// callback function is the function pass as an argument to the another function/method and run after the execution of the funtion/method 
                                                // OR
// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function


// Appending the text 

fs.appendFile("read.txt","\n This Asynchronous function always needs an callback funtion ....", (err)=>{

    console.log("Text to the file Appended Successfully...!");
})

// Reading the Text from the File 

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
})