// n*n
// 4방향
// 1초에 한번 폭발
// t초 되면 t-1초에 있던 폭탄 위치에서
// 2^(t-1) 만큼 떨어진 지점에 새 폭탄이 생김
// m초 후 폭탄 개수

// new arr 두고
// arr 돌면서 상하좌우 폭탄을 new arr 에 놔주고
// 다 끝나면 new arr를 기존 arr 에 덮어쓰기

const fs = require('fs');
const [n,m,r,c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let orgArr = Array.from({length:n}, () => Array(n).fill(false));
orgArr[r-1][c-1] = true;

const dx = [-1, 1, 0 ,0]
const dy = [ 0 ,0,-1, 1]

const inRange = (x,y) => x>=0 && y>=0 && x<n && y<n;
const getTempArr = () => {
    const tempArr = Array.from({length:n}, () => Array(n).fill(false));
    for (let x = 0; x < n ; x++) {
        for (let y= 0; y<n; y++) {
            if (orgArr[x][y]) tempArr[x][y] = true;
        }
    }
    return tempArr;
}
const bomb = (t, tempArr) => {
    for (let x = 0; x < n ; x++) {
        for (let y= 0; y<n; y++) {
            if (!orgArr[x][y]) continue;
            for (let idx = 0; idx < dx.length; idx++){
                const newX = x + Math.pow(2, t-1) * dx[idx]
                const newY = y + Math.pow(2, t-1) * dy[idx]
                if (!inRange(newX, newY)) continue;
                tempArr[newX][newY] = true;
            }
        }
    }
    return tempArr;
}
const countBomb = () => {
    let cnt = 0;
     for (let x = 0; x < n ; x++) {
        for (let y= 0; y<n; y++) {
            if (orgArr[x][y]) cnt += 1;
        }
    }
    return cnt
}

for (let t = 1; t<=m; t++) {
    const tempArr = getTempArr();
    orgArr = bomb(t, tempArr);
}

console.log(countBomb())