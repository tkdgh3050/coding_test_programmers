const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input1);
const arr = Array.from({length: n}, (_, idx) => Number(input2[idx]));
const remove = Array.from({length: 2}, (_, idx) => input2[arr.length + idx].trim().split(' ').map(Number));

let answer = [...arr];

for (let [start, end] of remove) {
    let temp = [];
    
    for (let idx = 0; idx < answer.length; idx++) {
        if (idx < start - 1 || idx > end - 1) temp.push(answer[idx])
    }
    
    answer = [...temp]
}

console.log(answer.length);
if (answer.length > 0) answer.forEach(val => console.log(val))