const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val >= 90) {
    console.log('A')
} else if (val >= 80) {
    console.log('B')
} else if (val >= 70) {
    console.log('C')
} else if (val >= 60) {
    console.log('D')
} else {
    console.log('F')
}