const fs = require('fs');
const [val, ...arr] = fs.readFileSync(0).toString().trim().split('\n');

const answer = [];

for (let str of arr) {
    const [prompt, num] = str.trim().split(' ');
    if (prompt === 'push_back') {
        answer.push(Number(num));
    } else if (prompt === 'pop_back') {
        answer.pop();
    } else if (prompt === 'size') {
        console.log(answer.length);
    } else {
        console.log(answer[Number(num) - 1]);
    }
}