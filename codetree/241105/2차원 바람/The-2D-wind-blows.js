// 한바퀴 돌리는 로직
// 상하좌우본인 평균 구해서 뱉어주는 로직

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m,q] = info.trim().split(' ').map(Number);
let arr = data.slice(0, n).map(v => v.trim().split(' ').map(Number));
const windArr = data.slice(n).map(v => v.trim().split(' ').map(num => Number(num) - 1));

const isRange = (x, y) => x >= 0 && y >= 0 && x<n && y<m;

// 돌리는 함수
const turn = (x1, y1, x2, y2) => {
    const rightTop = arr[x1][y2];
    const rightBottom = arr[x2][y2];
    const leftBottom = arr[x2][y1];
    const leftTop = arr[x1][y1]
    // 윗줄
    for (let y = y2; y >= y1+2; y--) {
        arr[x1][y] = arr[x1][y-1]
    }
    arr[x1][y1+1] = leftTop;
    // 오른쪽
    for (let x = x2; x >= x1+2; x--) {
        arr[x][y2] = arr[x-1][y2]
    }
    arr[x1+1][y2] = rightTop;
    
    // 아래
    for (let y = y1; y <= y2-2; y++) {
        arr[x2][y] = arr[x2][y+1]
    }
    arr[x2][y2-1] = rightBottom;

    // 왼쪽
    for (let x = x1; x <= x2-2; x++) {
        arr[x][y1] = arr[x+1][y1]
    }
    arr[x2-1][y1] = leftBottom
}

// 평균 구해서 뱉어주는 함수
const changeVal = (x1, y1, x2, y2) => {
    const tempArr = [];
    arr.forEach(v => tempArr.push([...v]));
    const dx = [0,-1,0,1,0]
    const dy = [0,0,1,0,-1]

    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            let tempSum = 0;
            let tempCnt = 0;
            for (let idx = 0; idx < dx.length; idx++) {
                const newX = x + dx[idx]; 
                const newY = y + dy[idx];
                if (isRange(newX,newY)) {
                    tempSum += arr[newX][newY];
                    tempCnt += 1;
                } 
            }
            tempArr[x][y] = parseInt(tempSum / tempCnt);
        }
    }

    return tempArr
}

for (let wind of windArr) {
    turn(...wind);
    arr = changeVal(...wind)
}

arr.forEach(val => console.log(...val))