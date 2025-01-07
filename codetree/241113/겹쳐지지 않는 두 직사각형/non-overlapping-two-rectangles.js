//가장 큰 직사각형 찾는 로직 해서 좌표 잡아두고
// 그 다음 큰 직사각형 찾으면서 해당 좌표에 들어가면 스킵하도록 해서 찾기
// 완전탐색

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));

const getSum = (x1,y1,x2,y2) => {
    let sum = 0;
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            sum += arr[x][y];
        }
    }
    return sum
}

const isOverlay = (aX1, aY1,aX2,aY2, bX1,bY1,bX2,bY2) => {
    const visited = Array.from({length:n}, () => Array(m).fill(false));
    for (let x = aX1 ; x <= aX2; x++) {
        for (let y = aY1; y <= aY2; y++) {
            visited[x][y] = true
        }
    }
    for (let x = bX1 ; x <= bX2; x++) {
        for (let y = bY1; y <= bY2; y++) {
            if (visited[x][y]) return true;
        }
    }
    return false;
}

const getXY = () => {
    const xyCase = [];
    for (let xIdx = 0; xIdx < n; xIdx++) {
        for (let yIdx = 0; yIdx < m; yIdx++) {
            for (let xSize = 0; xSize < n-xIdx; xSize++) {
                for (let ySize = 0; ySize < m-yIdx; ySize++) {
                    xyCase.push([xIdx, yIdx, xIdx+xSize, yIdx+ySize])
                }
            }
        }
    }
    return xyCase;
}

let maxSum = Number.MIN_SAFE_INTEGER;

const xyCase = getXY();

for (let x = 0; x < xyCase.length - 1; x++) {
    for (let y = x+1; y < xyCase.length; y++) {
        if (!isOverlay(...xyCase[x], ...xyCase[y])) {
            maxSum = Math.max(maxSum, getSum(...xyCase[x]) + getSum(...xyCase[y])) 

        }
    }
}

console.log(maxSum)