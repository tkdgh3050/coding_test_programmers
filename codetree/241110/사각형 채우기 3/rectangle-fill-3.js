const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = Array(1001).fill(0);

dp[1] = 2;
dp[2] = 7;

for (let idx = 3; idx <= n; idx++) {
    let a = 2 * dp[idx-1] + 3 * dp[idx-2];
    for (let temp = 3; temp < idx; temp++) {
        a += 2 * dp[idx-temp]
    }
    dp[idx] = (a + 2) % 1000000007;
}

console.log(dp[n])