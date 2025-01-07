//1 ~ n*n 숫자가 한번씩만 등장
// n*n 격자
// m번 숫자 이동
// 이동할 숫자의 번호가 주어지면 조건에 따라 움직임
    // 인접한 8칸 중 큰 값이 적혀 있는 곳
// 이동한 곳에 stack으로 쌓기
// 만약 인접한 곳에 숫자가 아무것도 없으면 움직이지 않음

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = info.trim().split(' ').map(Number);
const arr = data.slice(0,n).map(v => v.trim().split(' ').map(num => [Number(num)]));
const moveArr = data.slice(-1)[0].trim().split(' ').map(Number);
const dx = [-1,1,0,0,-1,-1,1,1]
const dy = [0,0,-1,1,-1,1,-1,1]
const inRange = (x,y) => x>=0 && y>=0 && x<n && y<n;

// 숫자를 받으면 좌표와 배열 내 위치를 알려주는 함수
const getXy = (num) => {
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            for (let idx = 0; idx < arr[x][y].length; idx++) {
                if (arr[x][y][idx] === num) {
                    return [x,y,idx];
                }
            }
        }
    }
}
// 8방향에서 큰 숫자가 있는 위치를 알려주는 함수, 없으면 빈배열 리턴
const getBigXy = (x,y) => {
    let point = [];
    let maxNum = 0; 
    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx]
        const newY = y + dy[idx]
        if (!inRange(newX, newY) || arr[newX][newY].length === 0) continue;

        for (let inIdx = 0; inIdx < arr[newX][newY].length; inIdx++) {
            if (maxNum < arr[newX][newY][inIdx]) {
                point = [newX, newY];
                maxNum = arr[newX][newY][inIdx];
            }
        }
    }
    return point;
}
// a좌표와 위치, b좌표 받으면 옮겨주는 함수
const moveAtoB = (aX, aY, aIdx, bX, bY) => {
    arr[bX][bY] = [...arr[bX][bY], ...arr[aX][aY].splice(aIdx)];
}

for (let moveNum of moveArr) {
    const [aX, aY, aIdx] = getXy(moveNum);
    const bArr = getBigXy(aX,aY);

    if (bArr.length === 0) continue;

    moveAtoB(aX, aY, aIdx, ...bArr);
}

arr.forEach(row => {
    row.forEach(cell => {
        if (cell.length === 0) {
            console.log('None');
        } else {
            console.log(...cell.reverse());
        }
    })
})