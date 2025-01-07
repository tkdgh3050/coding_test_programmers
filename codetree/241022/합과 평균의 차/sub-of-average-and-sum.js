const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));
const sum = val.reduce((a,c) => a+c, 0);
const avg = sum / val.length;
console.log(sum)
console.log(avg);
console.log(sum - avg);