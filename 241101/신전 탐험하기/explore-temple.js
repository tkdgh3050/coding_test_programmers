// n층
// 층마다 왼쪽, 가운데, 오른쪽 방 3개 있음
// 층마다 하나의 방만 들어가 보물 가져옴
// 2번연속으로 같은 방 들어가면 쫒겨남
// 쫓겨나지 않고 최대로 가져갈 수 있는 보물 수

// 2차원 dp
const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const roomNum = 3;
const dp = Array.from({length: n}, () => Array(roomNum).fill(0));
//초기회
dp[0] = [...arr[0]];

for (let idx = 1; idx < n; idx++) {
    for (let dir = 0; dir < roomNum; dir++) {
        for (let beforeDir = 0; beforeDir < roomNum; beforeDir++) {
            if (dir === beforeDir) continue;
            dp[idx][dir] = Math.max(dp[idx-1][beforeDir] + arr[idx][dir], dp[idx][dir])
        }
    }
}

console.log(Math.max(...dp[n-1]))