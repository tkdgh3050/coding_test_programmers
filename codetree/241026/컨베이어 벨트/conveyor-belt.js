const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n,t] = input1.trim().split(' ').map(Number);
const arr = input2.map(val => val.trim().split(' ').map(Number));

for (let time = 1; time <= t; time++) {
    [arr[0], arr[1]] = [[arr[1][n-1], ...arr[0].slice(0, n-1)], [arr[0][n-1] , ...arr[1].slice(0, n-1)]]
}

console.log(...arr[0])
console.log(...arr[1])