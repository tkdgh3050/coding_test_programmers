const fs = require('fs');
let [val, org] = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;

for (let x = 1; x<= val.length; x++) {
    val = val.slice(-1) + val.slice(0,-1);
    if (val === org) return console.log(x);
}

console.log(-1)