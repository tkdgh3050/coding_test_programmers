const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input1.trim().split(' ').map(Number);
const arr = input2.map(val => val.trim().split(' ').map(Number));
let answer = 0;

function checkMaxCnt(list) {
    let maxCnt = 1;
    let now = list[0];
    let cnt = 1;

    for (let x = 1; x < list.length; x++) {
        if (list[x] === now) {
            cnt += 1;
        } else {
            maxCnt = Math.max(maxCnt, cnt);
            now = list[x];
            cnt = 1;
        }
    }
    maxCnt = Math.max(maxCnt, cnt);

    return maxCnt
}

for (let x = 0; x < arr.length; x++) {
    if (checkMaxCnt(arr[x]) >= m) answer += 1;
    let temp = [];
    for (let y = 0; y < arr.length; y++) {
        temp.push(arr[x][y])
    }
    if (checkMaxCnt(temp) >= m) answer += 1;
}

console.log(answer)