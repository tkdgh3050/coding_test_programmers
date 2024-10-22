const fs = require('fs');
const val = fs.readFileSync(0).toString().split('\n').map(v => Number(v));
console.log(val[0] + 87)
console.log(val[1] % 10)