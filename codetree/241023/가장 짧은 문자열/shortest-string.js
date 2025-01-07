const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input.sort((a,b) => a.length - b.length);

console.log(input[input.length-1].length - input[0].length)