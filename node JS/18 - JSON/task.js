// 1 : Create a object 
// 2 : convert into the json file 
// 3 : store in the new file 
// 4 : read the data from file 
// 5 : convert it into object file 
// 6 : print the object file 

const objData = {
    name : "rajesh",
    age : 20 , 
    marks : 100
}

const jsonData = JSON.stringify(objData);

const fs = require("fs")

fs.writeFile("data.json",jsonData, (err)=>{
    console.log("Done")
})

fs.readFile("data.json","utf-8",(err,data)=>{
    console.log(data)
    const orgData = JSON.parse(data);
    console.log(orgData)
})