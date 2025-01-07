const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const dp = Array.from({length: n+1}, () => 0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

const getCnt = (n) => {
    const half = parseInt(n/2)
    const isOdd = n%2 !== 0;
    let cnt = 0;
    for (let idx = 1; idx <= half; idx++) {
        cnt += 2 * dp[n-idx] * dp[idx-1]
    }
    if (isOdd) cnt += dp[half] * dp[half];
    
    return cnt
}

const getBST = (num) => {
    for (let x = 3; x <= num; x++) {
        dp[x] = getCnt(x);
    }
    return dp[num]
}

console.log(getBST(n))