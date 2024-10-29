const fs = require('fs');
const [str1, str2] = fs.readFileSync(0).toString().trim().split('\n');
const dp = Array.from({length: str1.length}, () => Array(str2.length).fill(0));

///st1 = x, str2 = y
// 초기화

let temp = true;
let tempVal = 1;
for (let x = 0; x < str1.length; x++) {
    if (temp && str1[x] === str2[0]) {
        tempVal -= 1;
        temp = false;
    }
    dp[x][0] = tempVal;
    tempVal += 1;
}

temp = true;
tempVal = 1;
for (let y = 0; y < str2.length; y++) {
        if (temp && str2[y] === str1[0]) {
        tempVal -= 1;
        temp = false;
    }
    dp[0][y] = tempVal;
    tempVal += 1;
}

for (let x = 1; x < str1.length; x++) {
    for (let y = 1; y < str2.length; y++) {
        if (str1[x] === str2[y]) {
            dp[x][y] = dp[x-1][y-1];
        } else {
            dp[x][y] = Math.min(dp[x-1][y-1], dp[x-1][y], dp[x][y-1]) +1;
        }
    }
}

console.log(dp[str1.length-1][str2.length-1])