const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ');

console.log(val[1], val[4], val[7])