const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

console.log(input[0]);
console.log(Number(input[1]).toFixed(2))
console.log(Number(input[2]).toFixed(2))