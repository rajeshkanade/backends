import mongoose from 'mongoose';
import express from "express";
const PORT = 8000;

// checking the connection where the mongoose is connected to mongodb successfully 

 let conn = mongoose.connect("mongodb://127.0.0.1:27017/todo" , {serverSelectionTimeoutMS: 5000})
 .then(()=>{
    console.log("Connected Successfully")
 })
 .catch((err)=>{
    console.log(err)
 });

 // creating the schema to insert the data in the collections

 const Schema = mongoose.Schema;
 const todoSchema = new Schema({
    title : String,
    desc : String , 
    isDone : Boolean,
    TotalDone : Number

  });

  // you have to create model of the schema 
  const Todo = mongoose.model(' Todo', todoSchema);

  // inserting the data in the todo collection 
  const createTodo = async() =>{
    const todo = new Todo({title : "Apple", desc : "Bring the Apple From market" , isDone : true , TotalDone : 0})
    try{
      await todo.save();
    }
    catch(err){
      console.log(err)
    }
  }

  // createTodo();


  // Reading the data from todo collection 

  // const readTodo = async() => {
  //    const result = await Todo.find( {title : "Mongo"}).select({title : 1 , desc : 2}).limit(1);
  //    console.log(result)
  //     }
  // readTodo();

  // ******************** Comparison Operators ******************************
  // for brief you can visit 6.Comparison query operator.txt file. 
  // const readTodoUsingComparison = async() =>{
  //   const result = await Todo.find({title : {$in : ['Mongo','Apple']}})
  //   console.log(result)
  // }
  // readTodoUsingComparison();

  // ****************************** Logical Operators *************************

  const readTodoUsingLogical = async () =>{
    const result = await Todo.find({$or : [{name : "Apple"},{isDone : true}]})
    console.log(result)
  }

  // readTodoUsingLogical();

  // ************************** Count Documents ******************************

  const countDocuments = async () =>{
    const result = await Todo.countDocuments();
    console.log(result)
  }

  // countDocuments();

  // *********************** sort Documents Result **********************

  const sortDocuments = async () =>{
    const result = await Todo.find().sort({title : 1});
    console.log(result)
  }

  // sortDocuments();


  // ********************** Update Documents ********************/

  const updateDocuments = async () =>{
    // const result = await Todo.updateOne({_id : '66822099631b1c9c8826b8fa'} , { $set : { title : "Banana"}})
    const result = await Todo.findByIdAndUpdate({_id : "66822099631b1c9c8826b8fa"} , { $set : { title : 'banana'}})
    console.log(result)
  }

  updateDocuments();

