const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val === 1) {
    console.log('John')
} else if (val === 2) {
    console.log('Tom')
} else if (val === 3) {
    console.log('Paul')
} else {
    console.log('Vacancy')
}