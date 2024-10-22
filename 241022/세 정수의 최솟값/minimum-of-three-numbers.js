const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

let min = val[0];

if (min > val[1]) min = val[1];
if (min > val[2]) min = val[2];

console.log(min)