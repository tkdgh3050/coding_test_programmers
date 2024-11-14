//n*n
// 특정 열 선택
// 가장 위에서 폭탄 터짐
// 크기는 해당 칸의 숫자

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.slice(0, n).map(v => v.trim().split(' ').map(Number));
const bombArr = data.slice(n).map(v => Number(v)-1);
const dx = [-1, 1 ,0 ,0];
const dy = [0 ,0,-1, 1];
const inRange = (x,y) => x>=0 && y>=0 && x<n && y<n

// 열을 주면 가장 위의 좌표 알려주는 함수
const getBombX = (y) => {
    for (let idx = 0; idx < n; idx++) {
        if (arr[idx][y] > 0) return idx;
    }
    return -1;
}
// 좌표를 알려주면 폭탄 터트려서 0으로 만들어주는 함수
const bomb = (x,y) => {
    const totalCnt = arr[x][y];
    arr[x][y] = 0;
    for (let idx = 0; idx < dx.length; idx++) {
        for (let cnt = 1; cnt < totalCnt; cnt++) {
            const newX = x + cnt * dx[idx]
            const newY = y + cnt * dy[idx]
            if (!inRange(newX,newY)) break;
            arr[newX][newY] = 0;
        }
    }
}
// 아래로 떨어지는 함수
const drop = () => {
    for (let y=0; y<n; y++) {
        const newArr = Array(n).fill(0);
        let idx = 0;
        for (let x=n-1; x >= 0; x--) {
            if (arr[x][y] !== 0) {
                newArr[idx] = arr[x][y];
                idx += 1;
            }
        }
        idx = 0;
        for (let x=n-1; x >= 0; x--) {
            arr[x][y] = newArr[idx];
            idx+= 1;
        }
    }
}

for (let yIdx of bombArr) {
    const xIdx = getBombX(yIdx);
    if (xIdx === -1) continue;

    bomb(xIdx,yIdx);
    drop();
}

arr.forEach(v => console.log(...v));