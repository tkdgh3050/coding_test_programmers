const fs = require('fs');
const ft = 30.48;
const input = fs.readFileSync(0).toString();

console.log(Number(input) * ft);