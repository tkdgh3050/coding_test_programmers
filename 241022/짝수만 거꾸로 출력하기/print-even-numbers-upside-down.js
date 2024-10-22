const fs = require('fs');
const [n, val] = fs.readFileSync(0).toString().trim().split('\n');

const arr = val.trim().split(' ').map(v => Number(v));

const answer = [];

for (let idx = n-1; idx >= 0; idx--) {
    if (arr[idx] % 2 === 0) answer.push(arr[idx])
}

console.log(answer.join(' '))