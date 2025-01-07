const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const char = input.pop();
let cnt = 0;

for (let word of input){
    if (word[word.length-1] === char) {
        console.log(word);
        cnt += 1;
    }
}

if (cnt === 0) console.log('None')