const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split('-');
console.log(val[0] + val[1])