// 1 ~ n*n 중 중복없이
// 8개 방향으로 이동 가능 - 숫자로 있음
// 더 큰 숫자로 이동하는 걸 최대로 반복
// 시작위치 주어짐 (인덱스-1)
// 방향성 주어짐
// dfs - 갈 수 있는 모든 케이스 고려
// dx, dy 활용
const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const numArr = data.slice(0,n).map(v => v.trim().split(' ').map(Number));
const dirArr = data.slice(n, n*2).map(v => v.trim().split(' ').map(Number));
const start = data[data.length-1].trim().split(' ').map(Number);

let maxCnt = 0;
// 이동하는 dx, dy 변환해주는 함수 (방향값 넣으면 됨)
const getDxDy = (number) => {
    let [dx, dy] = [0, 0];
    switch(number) {
        case 1:
            [dx, dy] = [-1, 0];
            break;
        case 2:
            [dx, dy] = [-1, 1];
            break;
        case 3:
            [dx, dy] = [0, 1];
            break;
        case 4:
            [dx, dy] = [1, 1];
            break;
        case 5:
            [dx, dy] = [1, 0];
            break;
        case 6:
            [dx, dy] = [1, -1];
            break;
        case 7:
            [dx, dy] = [0, -1];
            break;
        case 8:
            [dx, dy] = [-1, -1];
            break;
        default: 
            break;
    }
    return [dx, dy];
}
// 범위 확인하는 함수
const isRange = (x, y) => x >=0 && y>=0 && x<n && y<n;

// 해당 방향으로 이동했을 때 얻을 수 있는 좌표값 배열로 리턴하는 함수 (숫자크기비교도 추가)
const getCandidate = (x, y) => { 
    const candidate = [];

    const [dx, dy] = getDxDy(dirArr[x][y]);
    let newX = x;
    let newY = y;
    for (let idx = 0; idx < n; idx++) {
        newX += dx;
        newY += dy;
        if (isRange(newX, newY)) {
            if (numArr[x][y] < numArr[newX][newY]) candidate.push([newX,newY]);
        } else {
            break;
        }
    }

    return candidate;
}

function DFS(x, y, cnt) {
    const candidate = getCandidate(x, y);

    if (candidate.length === 0) {
        maxCnt = Math.max(maxCnt, cnt);
        return;
    }

    for (let idx = 0; idx < candidate.length; idx++) {
        DFS(...candidate[idx], cnt+1);
    }
}

DFS(start[0] - 1, start[1] - 1 ,0)

console.log(maxCnt)