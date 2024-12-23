
// stream.pipe() method is used to take the readable stream and connect it will writable stream. 

const fs = require('fs');
const http = require('http');



const server = http.createServer();


server.on("request",(req,res)=>{
    //basically here we created the request event using method on
    // 1st way 
    // fs.readFile("index.txt",(err,data)=>{
    //     if(err) return console.error(err)
    //     res.end(data);
    // })

    // 2nd way 
    // Reading from the stream
    // creating the readable stream
    // Handling data events -> data, end, error 

    // const rstream = fs.createReadStream("index.txt");
    // rstream.on("data",(chunksData)=>{
    //     res.write(chunksData);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on("error", (err)=>{
    //     console.log(err)
    //     res.end("file not found")
    // })



    // 3rd way 
    // using stream pipe 

    

        const rstream = fs.createReadStream("index.txt");
        rstream.pipe(res);
  
    

})


server.listen(8000,"127.0.0.1" , ()=>{
    console.log("server is listining at port : 8000")
});
