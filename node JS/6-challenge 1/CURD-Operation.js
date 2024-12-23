
const fs = require("fs");

// Task 1 : Create a folder name as "Rajesh" 
// const folderName = "./Rajesh";
// fs.mkdirSync(folderName);

// -------------------------------------------------------------

// Task 2 : Create a file name as "Demo" in Rajesh Folder
// const fileName = "./Rajesh/Demo.txt";
// fs.writeFileSync(fileName,"Helloo... THis is Demo.txt file")

// ---------------------------------------------------------------

// Task 3 : Append the text to the file 
// const AppendText = "\nThis is the append text"
// fs.appendFileSync(fileName , AppendText);

// ---------------------------------------------------------------

// Task 4 : Reading the data without giving the buffer data first. 

{
// fs.readFileSync(fileName,"utf8",function(error,data){
//     if(error)
//         throw error
//     console.log(data)
// })
}
// try{
//     let data = fs.readFileSync(fileName,"utf8")
//     console.log(data)
// }catch(error){
//     console.log(error);
// }

// ---------------------------------------------------------------

// Task 5 : Rename the file name to Sample.txt 
// fs.renameSync("./Rajesh/Demo.txt","./Rajesh/Sample.txt");

// ---------------------------------------------------------------

// Task 6 : Write content of file one to the file two 
// fs.copyFileSync("./Rajesh/Sample.txt","./Rajesh/Demo.txt")
// console.log("file is coppied Sucessfully...!")

// ---------------------------------------------------------------

// Task 7 : Deleting the File 
// fs.unlinkSync("./Rajesh/Sample.txt");
// fs.unlinkSync("./Rajesh/Demo.txt");

// Task 8 : Deleting the folder 
// fs.rmdirSync("Rajesh");

// if folder is not empty then 
// fs.rmdirSync("Rajesh",{recursive : true , force : true})