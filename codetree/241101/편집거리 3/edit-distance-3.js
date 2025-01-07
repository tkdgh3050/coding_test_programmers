// 2차원 Dp
// 글자 겹치면 왼쪽 대각 +1
// 안겹치면 max(왼쪽, 위)

const fs = require('fs');
const [arr1, arr2] = fs.readFileSync(0).toString().trim().split('\n').map(v => v.trim().split(''));

const dp = Array.from({length: arr1.length + 1}, () => Array(arr2.length + 1).fill(0));

for (let x = 1; x < arr1.length+1; x++) {
    for (let y = 1; y < arr2.length+1; y++) {
        if (arr1[x-1] === arr2[y-1]) {
            dp[x][y] = dp[x-1][y-1] + 1;
        } else {
            dp[x][y] = Math.max(dp[x-1][y], dp[x][y-1])
        }
    }
}

const max = dp[arr1.length][arr2.length]
console.log(arr1.length +arr2.length - 2 * max)