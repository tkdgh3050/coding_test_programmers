const fs = require("fs");
let [info, ...ques] = fs.readFileSync(0).toString().trim().split("\n");

const [word, qCnt] = info.trim().split(' ');
let arr = [...word];

for (let q of ques) {
    let [a,b,c] = q.trim().split(' ')
    if (a === '1') {
        [arr[b-1], arr[c-1]] = [arr[c-1], arr[b-1]];
    } else {
        arr = arr.join('').replaceAll(b, c).split('');
    }
    console.log(arr.join(''))
}