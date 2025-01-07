const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

let cnt = 0;
let sum = 0;

for (let x of val) {
    if (x === 0) break;
    if (x % 2 === 0) {
        cnt += 1;
        sum += x
    }
}

console.log(cnt, sum)