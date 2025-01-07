//n개의 원소
// 부분수열 원소의 합 m 되는지 판단
// 원소를 set에 넣고 돌리면 될듯

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = info.trim().split(' ').map(Number);
const arr = data.trim().split(' ').map(Number);

const numSet = new Set();
let isAble = false;

for (let val of arr) {
    for (let num of [...numSet]) {
        numSet.add(num+val);
    }
    numSet.add(val);

    if (numSet.has(m)) {
        isAble = true;
        break;
    }
}

console.log(isAble ? 'Yes' : 'No')