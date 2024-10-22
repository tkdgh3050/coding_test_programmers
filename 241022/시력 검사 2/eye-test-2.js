const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val >= 1) {
    console.log('High');
} else if (val < 0.5) {
    console.log('Low')
} else {
    console.log('Middle')
}