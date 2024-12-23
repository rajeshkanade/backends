// To Acquire the express modules use require  
const express = require("express")

// when we require the express it returns the function 
const app = express();


// app.get method takes two parameter first is router and second is callback function 
// syntax:- app.get("router", callback) 

app.get("/",(req,res)=>{
    res.send("Hello World from the Express APP ...");

})

app.get("/about",(req,res)=>{
    // adding the status code  
    res.status(200).send("Hello From the about Page ...");
})

app.listen(8000,()=>{
    console.log("Server is Listning on PORT number 8000");
})


// The callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and 
// has properties  for the request  query string, parameters, body, 
// HTTP  Headers, etc. 

// similarly, the response object represents the HTTP response 
// that the Express app sends when it receives an HTTP request.