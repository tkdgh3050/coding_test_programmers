// 빈공간 ,S, E , 1~9 숫자로 이루어짐
// 숫자는 동전임
// 시작점에서 출발해서 최소 3개 동전 수집하고 도착점 도달
// 단 동전은 오름차순으로 수집
// 동전 위치 도달해도 수집 안할 수 있음.
// 같은 위치 두번 지나가는 것도 가능

// 최소 이동 횟수 구하기 / 불가능 하면 -1
// 유클리드 거리로 이동
// 시작점, 끝점 숫자점 좌표는 찾는거 빠르게 Map으로 만들어 두기;
const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(info);
const arr = data.map(v => v.trim().split(''));
const MAX_VAL = Number.MAX_SAFE_INTEGER

const xyMap = new Map();
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        if (arr[x][y] === '.') continue;
        if (isNaN(arr[x][y])) {
            const val = arr[x][y] === 'S' ? 0 : 10;
            xyMap.set(val, [x,y])
        } else {
            xyMap.set(Number(arr[x][y]), [x,y]);
        }
    }
}

const getDistance = (x1, y1, x2, y2) => Math.abs(x1-x2) + Math.abs(y1-y2);

let minVal = MAX_VAL;

function DFS(level, nowNum, sum) {
    if (level === 3) {
        //마지막 숫자에서 끝점까지 구한다음 sum에 더해주기
        const nowXY = xyMap.get(nowNum);
        const endXY = xyMap.get(10);
        minVal = Math.min(minVal, sum + getDistance(...nowXY, ...endXY));
        return;
    } else {
        for (let idx = nowNum + 1; idx < 10; idx++) {
            if (!xyMap.has(idx)) continue
            const nowXY = xyMap.get(nowNum);
            const nextXY = xyMap.get(idx)
            const dis = getDistance(...nowXY, ...nextXY);
            DFS(level+1, idx, sum + dis);
        }
    }
}

DFS(0, 0, 0);
console.log(minVal === MAX_VAL ? -1 : minVal)






// -1