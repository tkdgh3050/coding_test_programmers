const fs = require('fs');
let [_, str] = fs.readFileSync(0).toString().trim().split('\n');

const arr = str.trim().split(' ').map(Number);

for (let x = 0; x < arr.length - 1; x++) {
    let minIdx = x;
    for (let y = x+1; y < arr.length; y++) {
        if (arr[minIdx] > arr[y]) minIdx = y;
    }
    if (minIdx !== x) [arr[x], arr[minIdx]] = [arr[minIdx], arr[x]]
}

console.log(...arr)