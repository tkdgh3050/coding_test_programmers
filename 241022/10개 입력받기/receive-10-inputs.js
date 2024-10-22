const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

let sum = 0;
let cnt = 0;

for (let x of val) {
    if (x === 0) break;
    sum += x;
    cnt += 1;
}

console.log(sum, (sum / cnt).toFixed(1))