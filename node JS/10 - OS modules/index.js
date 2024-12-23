
// The node:os module provides operating system-related utility methods and properties. It can be accessed using os module

const os = require("os")


console.log(os.arch());
console.log(os.hostname());


const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024 / 1024}`)

const totalMem = os.totalmem();
console.log(`${totalMem / 1024 / 1024 / 1024}`);

console.log(os.platform())
console.log(os.tmpdir())