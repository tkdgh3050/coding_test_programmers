const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val >= 3000) {
    console.log('book')
} else if (val >= 1000) {
    console.log('mask')
} else if (val >= 500) {
    console.log('pen')
} else {
    console.log('no')
}