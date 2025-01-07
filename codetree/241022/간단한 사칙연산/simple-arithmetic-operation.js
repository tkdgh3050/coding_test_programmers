const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ');
val[0] = Number(val[0]);
val[1] = Number(val[1]);
console.log(val[0] + val[1]);
console.log(val[0] - val[1]);
console.log(parseInt(val[0] / val[1]));
console.log(val[0] % val[1]);