const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = [0, 1, 1];

if (n > 2) {
    for (let x = 3; x <= n; x++) {
        dp[x] = dp[x-2] + dp[x-1];
    }
}

console.log(dp[n]);