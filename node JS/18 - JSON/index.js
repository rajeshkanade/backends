// JSON is stands for Javascript Object Notation. JSON is lightweight format for storing and transporting the data. 
// JSON is often used when data is send from a server to the web page 


// The main Difference between object and JSON is JSON keys are also in single/double qoutes 

const objData = {
    name : "rajesh",
    age : 20,
    designation : "MERN Developer"
}

// converting object to the JSON data ==> stringify method is used 
const jsonData = JSON.stringify(objData);
console.log(jsonData) // output :- {"name":"rajesh","age":20,"designation":"MERN Developer"}
console.log(jsonData.name) // output :- undefined (json doesn't shows values)


// converting JSON to the Object data ==> parse method is used 
const objDataFromJSON = JSON.parse(jsonData);
console.log(objDataFromJSON) // output :- { name: 'rajesh', age: 20, designation: 'MERN Developer' }
console.log(objDataFromJSON.name) // output :- rajesh