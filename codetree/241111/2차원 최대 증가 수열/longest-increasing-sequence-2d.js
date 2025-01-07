// n*m
// 왼쪽상단에서 출발
// 밟을 수 있는 최대 칸 수
// 룰 존재
    // 이동은 점프로만
    // 점프하면 지금 적힌 수보다 큰 곳으로 가야함
    // 한칸 이상 오른쪽 + 한칸 이상 아래쪽
//dp

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const dp = Array.from({length:n}, () => Array(m).fill(1));
const startVal = arr[0][0];

for (let idx = 1; idx < n; idx++) {
    arr[idx][0] = startVal
}
for (let idx = 1; idx < m; idx++) {
    arr[0][idx] = startVal;
}

let max = 0;

for (let x = 1; x < n; x++) {
    for (let y = 1; y<m; y++) {
       
        let maxVal = 1;
        for (let compareX = 0; compareX < x; compareX++) {
            for (let compareY = 0; compareY < y; compareY++) {
                if (arr[x][y] > arr[compareX][compareY] && arr[x][y] > startVal) maxVal = Math.max(maxVal, dp[compareX][compareY]+1)
            }
        }
        dp[x][y] = maxVal;
        max = Math.max(max, maxVal)
    }
}

console.log(max)