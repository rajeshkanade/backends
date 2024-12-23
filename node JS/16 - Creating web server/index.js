/*

To access web pages of any web application we need a web Server.
The web server will handle all the http requests for the web application. 

eg. IIS is a web server of ASP.NET web applications and Apache is a web server for PHP or Java web applications.


Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server 

*/

/*

The Http2ServerRequest.createServer() method includes request and response parameters which is supplied by node.js

The request object can be used to get Information about the current HTTP request
eg. url, request header, and data. 

The response object can be used to send a reponse for a current HTTP request. 

If the response from the HTTP server is supposed to be displayed as HTML. 
You should include an HTTP header with the correct content type : 

*/


// creating the server

const http = require("http")

const server = http.createServer((res,resp)=>{
    resp.end("Welcome You server started succesfully...!")
})

// creating the localhost port number to run 

server.listen(8000,"127.0.0.1" , () =>{
    console.log("Listning to the port number 8000")
}) // port number , ip address(localhost number)

