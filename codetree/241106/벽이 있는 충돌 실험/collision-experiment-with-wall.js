// n*n
// m개 구슬, 1초에 한칸씩 동일한 속도로 움직임
// 구슬이 벽에 부딪히면 방향을 반대로 바꿈
// 두개 이상의 구슬이 같은 위치에 있으면 모두 사라짐

const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const T = Number(info);
const reData = data.map(v => v.trim().split(' '))
const test = [];
let temp = [reData[0]];
for (let idx = 1; idx < reData.length; idx++) {
    if (reData[idx].length === 2) {
        test.push(temp);
        temp = [reData[idx]];
    } else {
        temp.push(reData[idx])
    }
}
test.push(temp)

const isRange = (x, y, n) => x>=0 && y>=0 && x<n && y< n;
const getDir = (dir) => {
    if (dir === 'L') return [0,-1];
    else if (dir === 'R') return [0,1];
    else if (dir === 'U') return [-1,0];
    else return [1,0];
}
const changeDir = (dir) => {
    if (dir === 'L') return 'R';
    else if (dir === 'R') return 'L';
    else if (dir === 'U') return 'D';
    else return 'U';
}

const moveBid = (x, y, dir, n) => {
    const newX = x + getDir(dir)[0]
    const newY = y + getDir(dir)[1]

    if (isRange(newX, newY, n)) {
        return [newX, newY, dir]
    } else {
        return [x, y, changeDir(dir)]
    }
}

for (let testData of test) {
    const [n, m] = testData[0].map(Number);
    let bidData = testData.slice(1).map(row => row.map((v,idx) => idx === 2 ? v : Number(v)-1));
    for (let num = 0; num < n*2; num++) { // n에 2배정도 반복
        const tempArr = Array.from({length: n}, () => Array(n).fill(-1))
        const tempSet = new Set();
        for (let bidIdx = 0; bidIdx < bidData.length; bidIdx++) {
            const nextBid = moveBid(Number(bidData[bidIdx][0]),Number(bidData[bidIdx][1]),bidData[bidIdx][2], n)
            bidData[bidIdx]=nextBid;
            if (tempArr[nextBid[0]][nextBid[1]] === -1) {
                tempArr[nextBid[0]][nextBid[1]] = bidIdx;
                tempSet.add(bidIdx)
            } else {
                tempSet.delete(tempArr[nextBid[0]][nextBid[1]])
            }
        }
        bidData = [...tempSet].map(v => bidData[v]);
    }
    console.log(bidData.length)
}