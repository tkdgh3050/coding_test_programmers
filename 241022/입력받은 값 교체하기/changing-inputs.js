const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

[input[0], input[1]] = [input[1], input[0]];

console.log(Number(input[0]), Number(input[1]))