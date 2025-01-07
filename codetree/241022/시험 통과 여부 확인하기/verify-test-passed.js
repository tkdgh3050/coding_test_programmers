const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val >= 80) {
    console.log('pass');
} else {
    console.log(`${80 - val} more score`)
}