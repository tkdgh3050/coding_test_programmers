const fs = require('fs');
const [n, strArr] = fs.readFileSync(0).toString().trim().split('\n');

const arr = strArr.trim().split(' ').map(Number);
arr.sort((a,b) => b-a)

console.log(arr[0], arr[1])