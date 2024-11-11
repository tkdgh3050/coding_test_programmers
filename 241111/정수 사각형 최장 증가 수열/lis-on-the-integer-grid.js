// n*n
// 상하좌우 이동
// 칸에 적혀있는 정수값이 커지도록 이동
// 밟고 지나갈 수 있는 최대 칸 수
// dp를 이용하고
// dfs 이용해서 방문가능한 최대값 넣어두기

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));

const dx = [1, -1 ,0 ,0]
const dy = [0 ,0,1, -1 ]
const dp = Array.from({length:n}, () => Array(n).fill(0));
const isRange = (x, y) => x>=0 && y>=0&& x<n && y<n;

const dfs = (x,y) => {
    
    if (dp[x][y] !== 0) return dp[x][y]

    let maxVal = 1;

    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx]
        const newY = y + dy[idx]
        if (!isRange(newX, newY) || arr[x][y] >= arr[newX][newY]) continue;
        
        maxVal = Math.max(maxVal, dfs(newX,newY)+1)
    }

    dp[x][y] = maxVal;
    return maxVal;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        ans = Math.max(ans, dfs(i, j));
    }
}

console.log(ans)