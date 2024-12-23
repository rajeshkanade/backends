const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    // This is the way of sending the html 
    // res.send("<h1>Welcome to the Home Page</h1>")
    // TO pass multiple responses res.write method is used 
    res.write("<h1>Welcome to the  Home Page</h1>")
    res.write("<h1>Welcome to the Another Home Page</h1>")
    res.send(); // if you dont use this method at the end page loading doesn't stop 
})

app.get("/about",(req,res)=>{
    res.send("Welcome to the About Page")
})

app.get("/temp",(req,res)=>{
    // Sending JSON as the response 
    // res.send({
    //     id : 1,
    //     name : "rajesh",
    // })
    // You can also send the JSON as response using res.json method  
    res.json({
        id : 1,
        name : "rajesh"
    })
})



app.listen(8000,()=>{
    console.log("server is listning at port 8000...");
})