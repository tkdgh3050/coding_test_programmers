// 1번에서 시작
// 모든지점을 한번씩만 방문하고 다시 1번으로
// i->j 비용있음
// 모든 지점을 겹치지 않게 방문하고 되돌아오는 최소 비용 합
// n이 크지 않으므로 DFS로 순서쌍 찾기

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));

const visited = Array.from({length: n}, () => false);
let minSum = Number.MAX_SAFE_INTEGER;
const DFS = (level, cost, nowIdx) => {
    if (level === n-1) {
        // 마지막 순서에서 0로 돌아가는 로직 추가
        minSum = Math.min(minSum, cost + arr[nowIdx][0])
    } else {
        for (let idx = 1; idx < n; idx++) {
            if (!visited[idx] && arr[nowIdx][idx] !== 0) {
                visited[idx] = true;
                DFS(level+1, cost + arr[nowIdx][idx] ,idx);
                visited[idx] = false;
            }
        }
    }
}

visited[0] = true
DFS(0, 0, 0)

console.log(minSum)