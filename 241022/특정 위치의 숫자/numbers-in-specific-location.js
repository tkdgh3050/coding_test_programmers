const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(val[2] + val[4] + val[9])