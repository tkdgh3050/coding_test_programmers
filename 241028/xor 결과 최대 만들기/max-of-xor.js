const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.trim().split(' ').map(Number);
let max = 0;
const temp = []

function getComb(now) {
    if (temp.length === m) {
        return max = Math.max(max, temp.reduce((a,c) => a ^ c, 0))
    } else {
        for (let x = now; x < arr.length; x++) {
            temp.push(arr[x]);
            getComb(x+1);
            temp.pop();
        }
    }
}

getComb(0);
console.log(max)