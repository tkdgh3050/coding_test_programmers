const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

console.log(input[0] + input[1] === input[1] + input[0] ? 'true' : 'false')