const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = val.trim().split(' ').map(Number);
let max = 0;

function getComb(now, list) {
    if (list.length === m) {
        max = Math.max(max, list.reduce((a,c) => a ^ c, 0))
    } else {
        for (let x = now; x < arr.length; x++) {
            getComb(x+1, [...list, arr[x]]);
        }
    }
}

getComb(0, []);
console.log(max)