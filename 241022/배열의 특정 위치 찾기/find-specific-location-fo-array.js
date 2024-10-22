const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let evenSum = 0;
let multiSum = 0;
let multiCnt = 0;

for (let idx = 0; idx < val.length; idx++) {
    const realIdx = idx + 1;
    if (realIdx % 2 === 0) evenSum += val[idx];
    if (realIdx % 3 === 0) {
        multiSum += val[idx];
        multiCnt += 1;
    }
}

console.log(evenSum, (multiSum / multiCnt).toFixed(1))