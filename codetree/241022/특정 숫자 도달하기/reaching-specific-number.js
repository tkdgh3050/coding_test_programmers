const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

let cnt = 0;
let sum = 0;

for (let idx = 0; idx < val.length; idx++) {
    if (val[idx] >= 250) break;
    cnt += 1;
    sum += val[idx] 
}

console.log(sum, (sum/cnt).toFixed(1))