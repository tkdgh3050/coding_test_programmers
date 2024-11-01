// dfs 로 풀기
// visited 쭉 확인하기 (처응메 벽도 방문한걸로 표기) 0이 방문

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));
const dx = [-1,0,0,1];
const dy = [0,-1,1,0];
const isRange = (x, y) => x >=0 && y >= 0 && x < n && y < n;
const getMove = (x,y) => {
    const list = [];
    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx];
        const newY = y + dy[idx];
        if (isRange(newX, newY) && visited[newX][newY]) {
            list.push([newX, newY])
        }
    }
    return list
}
const visited = [];
arr.forEach(v => visited.push([...v]))


const answer = [];
let stack = 1;

function DFS(x, y) {
    const moveList = getMove(x, y);
    for (let idx = 0; idx < moveList.length; idx++) {
        const [newX,newY] = moveList[idx];
        if (visited[newX][newY]) {
            visited[newX][newY] = 0;
            stack += 1;
            DFS(newX, newY);
        }
    }
}

for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (visited[x][y] === 1) {
            stack = 1;
            visited[x][y] = 0;
            DFS(x,y);
            answer.push(stack);
        }
    }
}

console.log(answer.length)
answer.sort((a, b) => a-b);
answer.forEach(v => console.log(v))