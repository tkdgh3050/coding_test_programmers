//n*n
// 1~100
// 
const fs =require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
let arr = data.slice(0,n).map(v => v.trim().split(' ').map(Number));
const tempData = data.slice(-1)[0].trim().split(' ').map(Number);
const [startX, startY] = [tempData[0] -1, tempData[1]-1];
const move = [-1, ...tempData.slice(2,-1)];
const dir = tempData[tempData.length-1];

const getDir = (num, dir) => {
    if (num === 1) {
        return dir ? [1, -1] : [-1, 1]
    } else if (num === 2) {
        return dir ? [1, 1] : [-1, -1]
    } else if (num === 3) {
        return dir ? [-1, 1] : [1, -1]
    } else {
        return dir ? [-1, -1] : [1, 1]
    }
}

const rotate = () => {
    let nowX = startX;
    let nowY = startY;
    let tempVal = arr[nowX][nowY];
    if (dir) { //역방향
        for (let moveDir = 4; moveDir >= 1; moveDir--) {
            for (let moveCnt = 1; moveCnt <= move[moveDir]; moveCnt++) {
                const newX = nowX + getDir(moveDir, dir)[0];
                const newY = nowY + getDir(moveDir, dir)[1];
                [tempVal ,arr[newX][newY]] = [arr[newX][newY],tempVal];
                [nowX, nowY] = [newX, newY]
            }
        }
    } else { // 정방향
        for (let moveDir = 1; moveDir <= 4; moveDir++) {
            for (let moveCnt = 1; moveCnt <= move[moveDir]; moveCnt++) {
                const newX = nowX + getDir(moveDir, dir)[0];
                const newY = nowY + getDir(moveDir, dir)[1];
                [tempVal ,arr[newX][newY]] = [arr[newX][newY],tempVal];
                [nowX, nowY] = [newX, newY]
            }
        }
    }
}

rotate()

arr.map(v => console.log(...v))