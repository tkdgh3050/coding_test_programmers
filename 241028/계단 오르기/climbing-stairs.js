const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = Array.from({length: n+1}, () => 0);
dp[2] = 1;
dp[3] = 1;

if (n > 3) {
    for (let x = 4; x <= n; x++) {
        dp[x] = (dp[x-2] + dp[x-3]) % 10007;
    }
}

console.log(dp[n])