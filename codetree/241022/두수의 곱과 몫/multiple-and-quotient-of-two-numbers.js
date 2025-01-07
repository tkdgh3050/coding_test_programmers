const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(v => Number(v));
console.log(`${val[0]} * ${val[1]} = ${val[0] * val[1]}`);
console.log(`${val[0]} / ${val[1]} = ${parseInt(val[0] / val[1])}`);