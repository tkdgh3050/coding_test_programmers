const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

const x = val[0] <= val[1] && val[0] <= val[2] ? 1 : 0;
const y = val[0] === val[1] && val[1] === val[2] ? 1: 0;

console.log(x, y)