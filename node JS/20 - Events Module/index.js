
// The events module in Node.js is a core module that provides a way to work with events and event-driven programming.
//  It allows developers to create, emit, and listen for custom events, making it easier to implement the observer pattern and handle asynchronous operations.

// const EventEmitter = require("events");  // here is the class of event is created EventEmitter

// const event = new EventEmitter(); // emitter object 

// event.on("SayMyName",()=>{               // liteners to be called  // user-defined event body
//     console.log("My Name is Rajesh ...");
// })


// event.emit("SayMyName") // named event / user-defined event


// The concept is quite simple : emitter objects emit named emits events that cause previously registered Listeners to be called.
// So , an emitter object basically have two main features : \

// 1) Emiting name events 
// 2) Registering and unregistering the listner functions. 



// if you emit the event you have to listen the event 



// -------------------------------------------------------

// Registering for an event with callback function 

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("checkPage",(sc,msg)=>{
    console.log(`the status code is ${sc} and the page is ${msg}`)
})


event.emit("checkPage", 200, "ok")