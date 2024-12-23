// Basically API is stands for Application Programming Interface 

// API is defined as the service from which we can request the data for our project 

// basically in this program we are fetching the api named as userAPI.json in the /userAPI tab and displaying the data on both console and browser


const http = require("http")
const fs = require("fs");


const server = http.createServer(async(req,res)=>{

    // --------- Here by every page refresh file doesn't read the data the data is read before the page rendering --------

    const data = fs.readFileSync(`${__dirname}/userAPI.json`,'utf-8')
    console.log(data)
    const objData = await JSON.parse(data);
    const empName = objData.data[0].employee_name;

    
    if(req.url == "/"){
        res.end("This is the Home Page ...");
    }else if(req.url == "/about"){
        res.end("This is about Page")
    }else if(req.url == "/services"){
        res.end("This is services page...")
    }else if(req.url == "/userAPI"){
        // --------- Here by every page refresh File read the data --------

        // fs.readFile(`${__dirname}/userAPI.json` , "utf-8" , (err,data)=>{
        //     console.log(data) // here we displayed all the api in the console of IDE 
            // res.end(data); // here we displayed the all api in the browser 
            // const objData = JSON.parse(data);
            // const empName = objData.data[0].employee_name;

            // res.writeHead(200,{"Content-type" : "text/html"})
            res.writeHead(200,{"Content-type" : "application/json"})
            res.end(empName)
           
        // })
     // res.end("This is user api page")
    }else{
        res.writeHead(404)
        res.end("404 Page Not Found...")
    }
})


server.listen(8000, "127.0.0.1" , ()=>{
    console.log("Server is listning")
})