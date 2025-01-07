const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(':');

val[0] = Number(val[0]) + 1;
console.log(val.join(':'))