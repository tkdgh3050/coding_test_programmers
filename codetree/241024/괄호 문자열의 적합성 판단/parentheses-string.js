const fs = require('fs')
const val = fs.readFileSync(0).toString().trim().split('');

const stack = [];

for (let x of val) {
    if (x === '(') {
        stack.push(x)
    } else {
        if (stack.length === 0) return console.log('No');
        stack.pop()
    }
}

stack.length === 0 ? console.log('Yes') : console.log('No')