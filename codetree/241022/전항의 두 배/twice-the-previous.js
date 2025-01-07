const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(Number)

for (let idx = 2; idx < 10; idx++) {
    val.push(val[idx-2] * 2 + val[idx-1]);
}

console.log(...val)