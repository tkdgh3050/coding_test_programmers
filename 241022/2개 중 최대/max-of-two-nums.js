const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

val[0] > val[1] ? console.log(val[0]) : console.log(val[1])