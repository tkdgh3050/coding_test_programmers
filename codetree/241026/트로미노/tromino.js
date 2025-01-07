const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input1.trim().split(' ').map(Number);
const arr = input2.map(val => val.trim().split(' ').map(Number));
let maxSum = 0;
//block 1
function checkBlock1(arr) {
    const sum = arr.reduce((a, c) => a+c, 0);
    let max = 0;
    arr.forEach(val => max = Math.max(sum - val, max))
    return max
}

for (let x = 0; x <= n - 2; x++) {
    for (let y = 0; y <= m - 2; y++) {
    let temp = [];
        temp.push(arr[x][y])
        temp.push(arr[x][y+1])
        temp.push(arr[x+1][y])
        temp.push(arr[x+1][y+1])
    maxSum = Math.max(maxSum, checkBlock1(temp));
    }
}

//block 2
function checkBlock2(arr) {
    let max = 0;
    for (let x = 0; x < arr.length; x++) {
        let hor = 0;
        let ver = 0;
        for (let y = 0; y < arr.length; y++) {
            hor += arr[x][y];
            ver += arr[y][x];
        }
        max = Math.max(max, hor, ver);
    }
    return max
}

for (let x = 0; x <= n - 3; x++) {
    for (let y = 0; y <= m - 3; y++) {
    let temp = [];
        for (let a = x; a < x+3; a++) {
            temp.push(arr[a].slice(y, y+3))
        }
    maxSum = Math.max(maxSum, checkBlock2(temp));
    }
}

console.log(maxSum)