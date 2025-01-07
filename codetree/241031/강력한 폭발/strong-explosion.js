// 폭탄 케이스 3개
// 조합 - 재귀

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(' ').map(Number));

const check = Array.from({length:n}, () => Array(n).fill(0));
const bomb = [
    {
        dx: [-2,-1,0,1,2],
        dy: [0,0,0,0,0,]
    },
    {
        dx: [-1, 0, 0, 0, 1],
        dy: [0, -1, 0, 1, 0]
    },
    {
        dx: [-1,-1, 1, 1, 0],
        dy: [-1,1, -1, 1, 0]
    }
]

const count = (list) => {
    let cnt = 0;
    let area = []
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (list[x][y] > 0) {
                cnt += 1;
                area.push([x,y])
            }
        }
    }
    return [cnt, area];
}

const addCheck = (bomb, position) => {
    const {dx, dy} = bomb;
    const [startX, startY] = position;

    for (let idx = 0; idx < dx.length; idx++) {
        const newX = startX + dx[idx]
        const newY = startY + dy[idx]
        if (isRange(newX, newY)) {
            check[newX][newY] = check[newX][newY] + 1;
        }
    }
}

const deleteCheck = (bomb, position) => {
    const {dx, dy} = bomb;
    const [startX, startY] = position;

    for (let idx = 0; idx < dx.length; idx++) {
        const newX = startX + dx[idx]
        const newY = startY + dy[idx]
        if (isRange(newX, newY)) {
            check[newX][newY] = check[newX][newY] - 1;
        }
    }
}

const isRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

const [areaCnt, areaList] = count(arr);
let maxVal = 0;

function DFS(level) {
    if (level ===areaCnt) {
        const [newCnt] = count(check)
        maxVal = Math.max(maxVal, newCnt)
    } else {
        for (let idx = 0; idx < bomb.length; idx++) {
            addCheck(bomb[idx], areaList[level]);
            DFS(level+1)
            deleteCheck(bomb[idx], areaList[level]);
        }
    }
}

DFS(0)

console.log(maxVal)