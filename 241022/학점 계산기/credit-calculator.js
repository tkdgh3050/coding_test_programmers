const fs = require('fs');
const [n, scores] = fs.readFileSync(0).toString().trim().split('\n');

const avg = (scores.trim().split(' ').reduce((a,c )=> a + Number(c), 0) / Number(n)).toFixed(1);
console.log(avg);
if (avg >= 4) {
    console.log('Perfect')
} else if (avg >= 3) {
    console.log('Good')
} else {
    console.log('Poor')
}