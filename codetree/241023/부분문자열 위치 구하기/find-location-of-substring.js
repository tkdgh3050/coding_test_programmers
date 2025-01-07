const fs = require("fs");
let [input, search] = fs.readFileSync(0).toString().trim().split("\n");

console.log(input.indexOf(search))