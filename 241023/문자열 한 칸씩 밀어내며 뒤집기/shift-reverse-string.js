const fs = require('fs');
let [info, ...qList] = fs.readFileSync(0).toString().trim().split('\n');

let [word, n] = info.trim().split(' ');

for (let q of qList) {
    if (q === '1') {
        word = word.slice(1) + word[0];
    } else if(q === '2') {
        word = word.slice(-1) + word.slice(0, -1);
    } else {
        word = [...word].reverse().join('');
    }
    console.log(word)
}