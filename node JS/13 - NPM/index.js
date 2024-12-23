// The World's Largest Software Registry (Library)
// npm is the world's largest Software Registry.

// The registry contains over 800,000 code packages.

// Open-source developers use npm to share software.

// Many organizations also use npm to manage private development.


const chalk = require("chalk")

const validator = require("validator")

console.log(chalk.red("Hello world"));

console.log(chalk.black.bgYellow("Hello world"))

console.log(chalk.green("True"))
console.log(chalk.red("false"))
console.log(chalk.underline.red("hey THis works..."))

console.log(chalk.green.inverse.underline("Hey Hello"))


const res = validator.isEmail("Rajeshkanade121@gmail.com")

console.log(res)
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))





