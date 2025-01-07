const fs = require('fs');
let val = fs.readFileSync(0).toString().trim().split(' ');

let answer = 0;

for (let word of val) {
    let num = '';
    for (let char of word) {
        if (isNaN(char)) break;
        num += char
    }
    answer += Number(num)
}

console.log(answer)