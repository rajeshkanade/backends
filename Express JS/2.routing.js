const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Home Page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to the About Page</h1>")
})

app.get("/temp",(req,res)=>{
    res.send("<h1>Welcome to the Tempreature Page</h1>");
})

app.listen(8000,()=>{
    console.log("Server is Listnning on Port Number 8000")
})
