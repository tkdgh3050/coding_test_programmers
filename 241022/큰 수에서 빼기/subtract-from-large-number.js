const fs = require('fs');
const val = fs.readFileSync(0).toString().split(' ');
if (val[0] >= val[1]) {
    console.log(val[0] - val[1])
} else {
    console.log(val[1] - val[0])
}