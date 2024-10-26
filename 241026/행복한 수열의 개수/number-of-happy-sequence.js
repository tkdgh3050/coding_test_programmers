const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input1.trim().split(' ').map(Number);
const arr = input2.map(val => val.trim().split(' ').map(Number));
let answer = 0;

for (let x = 0; x < arr.length; x++) {
    let cntX = 1;
    let numX = arr[x][0]
    let cntY = 1;
    let numY = arr[0][x]
    for (let y = 1; y < arr.length; y++) {
        if (numX === arr[x][y]) {
            cntX += 1;
        } else {
            if (cntX >= m) {
                answer += 1;
                break;
            }
            numX = arr[x][y];
            cntX = 1;
        }
    }
    for (let y = 1; y < arr.length; y++) {
        if (numY === arr[y][x]) {
            cntY += 1;
        } else {
            if (cntY >= m) {
                answer += 1;
                break;
            }
            numY = arr[y][x];
            cntY = 1;
        }
    }
    if (cntX >= m) answer += 1;
    if (cntY >= m) answer += 1;
}

console.log(answer)