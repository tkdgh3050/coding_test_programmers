const fs = require('fs');
const [people, look] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const list = Array.from({length: people}, (_, idx) => idx+1);
const q = [...list];
const answer = [];

while (q.length > 1) {
    for (let x = 1; x <= look; x++) {
        q.push(q.shift());
    }
    answer.push(q.pop());
}

answer.push(q.pop());

console.log(...answer)