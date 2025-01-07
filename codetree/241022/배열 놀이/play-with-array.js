const fs = require('fs');
const [nq, nString, ...questions] = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = nq.trim().split(' ').map(Number);
const nArray = nString.trim().split(' ').map(Number);

for (let question of questions) {
    const qArray = question.trim().split(' ').map(Number);
    if (qArray[0] === 1) {
        console.log(nArray[qArray[1]-1])
    } else if (qArray[0] === 2) {
        console.log(nArray.indexOf(qArray[1]) + 1)
    } else {
        console.log(nArray.slice(qArray[1]-1, qArray[2]).join(' '))
    }
}