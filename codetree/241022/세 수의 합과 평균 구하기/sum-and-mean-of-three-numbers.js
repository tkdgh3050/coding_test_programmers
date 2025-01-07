const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));
const sum = val.reduce((a,c) => a+c, 0);
console.log(sum);
console.log(parseInt(sum/val.length));