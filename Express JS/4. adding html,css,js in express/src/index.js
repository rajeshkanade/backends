const express = require("express")
const path = require("path");

const app = express();

const staticPath = path.join(__dirname , "../public")
// console.log(staticPath) // E:\Backends\Express JS\4. adding html,css,js in express\public

// Here we have to maintained the path of the public directory so that it will access the files  
// app.use: This method mounts the specified middleware function(s) at the path which is being specified.
//  In this case, it mounts the express.static middleware to serve static files.

// express.static(staticPath): This is a built-in middleware function in Express.
// It serves static files, and the staticPath is the directory from which to serve these files (e.g., HTML, CSS, JavaScript, images).

app.use(express.static(staticPath)) // Middleware Function :- express.static(staticPath)

// By default it render index.html as the home page  

app.get("/",(req,res)=>{
    res.sendFile(path.join(staticPath, "index.html")) // explicitly you can call this page 
})
app.get("/about",(req,res)=>{
    // res.send("<h1>This is Home Page</h1>")

    // This is the way of routing another pages in the express  
    res.sendFile(path.join(staticPath, "about.html"))
})

app.listen(8000,()=>{
    console.log("Server is Listning at PORT 8000")
})