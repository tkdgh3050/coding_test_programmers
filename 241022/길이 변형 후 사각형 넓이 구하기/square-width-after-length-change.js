const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ').map(x => Number(x));
val[0] += 8;
val[1] *= 3;
console.log(val[0])
console.log(val[1])
console.log(val[0] * val[1])