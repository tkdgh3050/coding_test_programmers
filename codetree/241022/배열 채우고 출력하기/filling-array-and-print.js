const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').reverse().join('');
console.log(val)