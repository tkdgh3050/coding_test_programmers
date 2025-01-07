const fs = require('fs');
const val = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

const stack = [];

for (let x of val) {
    if (x === 0) break;
    stack.push(x)
}

console.log(...stack.reverse())