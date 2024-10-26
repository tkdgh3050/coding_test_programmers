const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n,t] = input1.trim().split(' ').map(Number);
const arr = input2.map(val => val.trim().split(' ').map(Number));

for (let x = 1; x <= t; x++) {
    [arr[0], arr[1], arr[2]] = [
        [arr[2][n-1], ...arr[0].slice(0, n-1)],
        [arr[0][n-1], ...arr[1].slice(0, n-1)],
        [arr[1][n-1], ...arr[2].slice(0, n-1)]
    ]
}

for (let x = 0; x < 3; x++) {
    console.log(...arr[x])
}