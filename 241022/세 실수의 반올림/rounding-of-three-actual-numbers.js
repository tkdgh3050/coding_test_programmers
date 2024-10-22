const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

for (let x = 0; x < input.length; x++) {
    console.log(Number(input[x]).toFixed(3))
}