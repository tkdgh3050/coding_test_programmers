// 왼쪽이랑 아래로만 이동가능
// 오른쪽 위 모서리에서 왼쪽 아래 모서리로 이동
// 최소 합
// 1행 , n열은 초기값 세팅
// dp로 위 오른쪽 중 작은 값이랑 지금 값 더하는 방향

const fs = require('fs');
const [info, ...val] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = val.map(v => v.trim().split(' ').map(Number));

const dp = Array.from({length: n}, () => Array(n).fill(0));

// 초기값 세팅
dp[0][n-1] = arr[0][n-1];
for (let x = 1; x < n; x++) {
    dp[x][n-1] = dp[x-1][n-1] + arr[x][n-1];
    dp[0][n-1-x] = dp[0][n-x] + arr[0][n-1-x];
}

// 순차적으로 진행
for (let x = 1; x < n; x++) {
    for (let y = n-2; y >= 0; y--) {
        dp[x][y] = Math.min(dp[x-1][y], dp[x][y+1]) + arr[x][y]
    }
}

console.log(dp[n-1][0])