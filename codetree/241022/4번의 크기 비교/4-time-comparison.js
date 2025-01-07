const fs = require('fs');
const val = fs.readFileSync(0).toString().split('\n');

const a = Number(val[0])
const arr = val[1].split(' ').map(v => Number(v));

for (let x = 0; x < arr.length; x++) {
    a > arr[x] ? console.log(1) : console.log(0)
}