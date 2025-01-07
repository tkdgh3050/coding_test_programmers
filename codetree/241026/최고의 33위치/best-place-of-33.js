const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input1);
const arr = input2.map(val => val.trim().split(' ').map(Number));
const square = [3,3];
let max = 0;

for (let x = 0; x <= arr.length - square[0]; x++) {
    for (let y = 0; y <= arr[0].length - square[1]; y++) {
        let cnt = 0;

        for (let a = x; a < x + square[0]; a++) {
            for (let b = y; b < y + square[1]; b++) {
                if (arr[a][b]) cnt += 1;
            }
        }

        max = Math.max(max, cnt);
    }
}

console.log(max)