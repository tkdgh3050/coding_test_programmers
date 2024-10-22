const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ');

console.log((val.reduce((a,c) => a+Number(c),0) / val.length).toFixed(1))