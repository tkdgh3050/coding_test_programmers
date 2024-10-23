const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const arr = [];
input.forEach(line => {
    arr.push(line.trim().split(' ').map(Number));
})

const rowSum = [];
const colSum = Array(arr[0].length).fill(0);

for (let x = 0; x < arr.length; x++) {
    let row = 0;
    for (let y = 0; y < arr[0].length; y++){
        colSum[y] += arr[x][y];
        row += arr[x][y];
    }
    rowSum.push(row)
}

console.log(...rowSum.map(val => (val / arr[0].length).toFixed(1)))
console.log(...colSum.map(val => (val / arr.length).toFixed(1)))
console.log((rowSum.reduce((a,c) => a+c,0)  / (arr[0].length * arr.length)).toFixed(1))