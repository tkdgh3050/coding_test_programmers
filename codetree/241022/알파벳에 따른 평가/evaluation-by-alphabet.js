const fs = require('fs');
const val = fs.readFileSync(0).toString().trim();

if (val === 'S') {
    console.log('Superior')
} else if (val === 'A') {
    console.log('Excellent')
} else if (val === 'B') {
    console.log('Good')
} else if (val === 'C') {
    console.log('Usually')
} else if (val === 'D') {
    console.log('Effort')
} else {
    console.log('Failure')
}