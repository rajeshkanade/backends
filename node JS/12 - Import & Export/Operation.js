// creating the module 

const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}
const mul = (a,b) =>{
    return a*b;
}

let name = "rajesh"

// exporting the module 

// Three way to export the modules:-

// 1)exporting the funtion:-
// module.exports = add  // single module export 

// 2) exporting the method as an property to the object 
// module.exports.add = add; // exporting multiple modules
// module.exports.sub = sub // exporting multiple modules


// 3) exporting using the destructuring the object 
module.exports = {add,sub,mul , name}

