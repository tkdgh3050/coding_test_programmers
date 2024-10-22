const fs = require('fs');
const val = Number(fs.readFileSync(0).toString());

if (val >= 113) {
    console.log(1)
} else {
    console.log(0)
}