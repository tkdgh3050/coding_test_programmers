const fs = require('fs');
const n = fs.readFileSync(0).toString().trim()

const arr = Array.from({length: n}, (_,idx) => idx+1);

let startIdx = 0;
while (arr.length - 1 > startIdx) {
    startIdx += 1;
    arr.push(arr[startIdx]);
    startIdx += 1;
}

console.log(arr[startIdx])