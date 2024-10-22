const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

const b = parseInt(10000 * val[1] / (val[0] ** 2));

console.log(b);
if (b >= 25) console.log('Obesity')