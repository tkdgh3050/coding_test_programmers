const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = val[0] + val[1] + val[2];

for (let idx = 3; idx < val.length; idx++) {
    if (val[idx] === 0) break;
    sum -= val[idx-3];
    sum += val[idx];
}

console.log(sum)