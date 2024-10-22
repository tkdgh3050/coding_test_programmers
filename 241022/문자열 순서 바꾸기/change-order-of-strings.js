const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

[input[0], input[1]] = [input[1], input[0]];

for (let x of input) {
    console.log(x)
}