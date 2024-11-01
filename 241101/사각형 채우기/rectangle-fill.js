const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim())

const dp = Array(n+1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let idx = 3; idx <=n; idx++) {
    dp[idx] = (dp[idx-2] + dp[idx-1]) % 10007
}

console.log(dp[n])