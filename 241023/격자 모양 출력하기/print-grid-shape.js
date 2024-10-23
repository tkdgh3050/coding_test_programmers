const fs = require("fs");
let [info, ...val] = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = info.trim().split(' ').map(Number);
const dot = val.map(line => line.trim().split(' ').map(Number));
const answer = Array.from({length:n}, () => Array(m).fill(0));

for (let [x,y] of dot) {
    answer[x-1][y-1] = x * y;
}

for (let line of answer) {
    console.log(...line)
}