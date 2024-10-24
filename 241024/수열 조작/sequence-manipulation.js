const fs = require('fs');
const n = fs.readFileSync(0).toString().trim()

const arr = Array.from({length: n}, (_,idx) => idx+1);

while (arr.length > 1) {
    arr.shift();
    arr.push(arr.shift());
}

console.log(arr[0])