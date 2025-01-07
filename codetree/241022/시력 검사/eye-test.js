const fs = require('fs');
const val = fs.readFileSync(0).toString().split('\n').map(v => Number(v));

if (val[0] >= 1 && val[1] >= 1) {
    console.log('High')
} else if (val[0] >= 0.5 && val[1] >= 0.5) {
    console.log('Middle')
} else {
    console.log('Low')
}