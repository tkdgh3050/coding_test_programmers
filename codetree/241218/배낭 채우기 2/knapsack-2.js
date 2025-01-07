const fs =require('fs')
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const dp = Array.from({length: m+1}, () => 0);

for (let [weight, value] of arr) {
    if (weight > m) continue;

    dp[weight] = Math.max(dp[weight], value)
}

for (let dpIdx = 1; dpIdx <= m; dpIdx++) {
    for (let idx = 0; idx <= parseInt(dpIdx/2); idx++) {
        dp[dpIdx] = Math.max(dp[idx] + dp[dpIdx-idx], dp[dpIdx])
    }
}

console.log(dp[m])