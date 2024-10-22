const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val < 0) {
    console.log('ice')
} else if (val >= 100) {
    console.log('vapor');
} else {
    console.log('water');
}