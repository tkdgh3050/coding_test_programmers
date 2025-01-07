const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let cnt = 1;
let answer = input[0];

for (let idx = 1; idx < input.length; idx++) {
    if (input[idx-1] === input[idx]) {
        cnt += 1;
    } else {
        answer += String(cnt);
        answer += input[idx];
        cnt = 1;
    }
}

answer += String(cnt);

console.log(answer.length)
console.log(answer)