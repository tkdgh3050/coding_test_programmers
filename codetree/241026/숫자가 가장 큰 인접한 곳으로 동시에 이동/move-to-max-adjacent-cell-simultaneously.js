const fs = require('fs');
const [input1, ...input2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input1.trim().split(' ').map(Number);
const arr = Array.from({length: n}, (_,idx) => input2[idx].trim().split(' ').map(Number));
const ball = input2.slice(n).map(val => val.trim().split(' ').map(val => Number(val) - 1));
const dx = [-1, 1, 0 ,0];
const dy = [0, 0, -1, 1];

let nowArr = Array.from({length: n}, () => Array(n).fill(0));

for (let [x,y] of ball) {
    nowArr[x][y] = 1;
}

const maxValXY = (x, y) => {
    // x, y 좌표를 받으면 상하좌우 살펴서 가장 큰 좌표 값을 리턴
    let maxVal = 0;
    let xy = [-1,-1];
    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx];
        const newY = y + dy[idx];
        if (!inRange(newX, newY)) continue;

        if(maxVal < arr[newX][newY]) {
            maxVal = arr[newX][newY];
            xy = [newX, newY];
        }
    }
    return xy
}

const inRange = (x, y) => {
    // x, y 좌표가 범위 안에 들어있는지 리턴
    return x>=0 && y>=0 && x < n && y < n;
}

const countOne = () => {
    let cnt = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (nowArr[x][y] === 1) cnt += 1;
        }
    }
    return cnt
}

const deleteOverOne = (temp) => {
    // 1 초과하는 경우 0으로 초기화
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (temp[x][y] > 1) temp[x][y] = 0;
        }
    }
    return temp;
}

for (let cnt = 1; cnt <= t; cnt++) {
    const temp = Array.from({length: n}, () => Array(n).fill(0));
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            // 격자를 돌면서 1인 경우 움직이는 작업
            if (nowArr[x][y] !== 1) continue; 
            const [newX, newY] = maxValXY(x,y);
            temp[newX][newY] += 1;
        }
    }
    
    nowArr = deleteOverOne(temp);
}

console.log(countOne())