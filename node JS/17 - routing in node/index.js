
// creating the server

const http = require("http")

const server = http.createServer((req,resp)=>{

    // handing the response i.e routing 
    if(req.url == "/"){ // it means it is default page 
        resp.end("Welcome You server started succesfully...!")
    }else if(req.url == "/about"){ // it runs when the path is /about eg.http://localhost:8000/about
        resp.end("Welcome You to the About side")
    }else if(req.url == "/services"){
        resp.end("Welcome to services sides...");
    }else{
        resp.writeHead(404, {"Content-type" : "text/html"})
        resp.end("<h1>404 ERROR. \nPage Not Found..</h1>")
    }
})

// creating the localhost port number to run 

server.listen(8000,"127.0.0.1" , () =>{
    console.log("Listning to the port number 8000")
}) // port number , ip address(localhost number)

