//dp 사용
// 최소수량 담기
// m의 우측부터 좌측으로 이동하면서 숫자가 있는 경우 더한 다음에 이미 있을 경우 최소값 넣기
// 초기세팅은 n의 값 1 넣기

const fs = require('fs');
const [info, val] = fs.readFileSync(0).toString().trim().split('\n');

const MAX_INT = Number.MAX_SAFE_INTEGER
const [n,m] = info.trim().split(' ').map(Number);
const arr = val.trim().split(' ').map(Number);
const dp = Array.from({length: m+1}, () => MAX_INT);

// 초기값 세팅
dp[0] = 0

for (let idx = 0; idx < n; idx++) {
    for (let arrIdx = m; arrIdx >= 0; arrIdx--) {
        if (dp[arrIdx] !== MAX_INT && arrIdx+arr[idx] <= m) {
            dp[arrIdx+arr[idx]] = Math.min(dp[arrIdx+arr[idx]], dp[arrIdx] + 1);
        }
    }
}

console.log(dp[m] === MAX_INT ? -1 : dp[m])