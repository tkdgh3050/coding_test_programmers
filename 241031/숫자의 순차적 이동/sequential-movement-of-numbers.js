// 1~n**2 까지의 숫자가 한번씩만 나옴
// m번동안 움직임
// 8방향 숫자중 가장 큰 숫자와 가운데 숫자랑 교환
// 시작은 항상 1부터고 순서대로 확인
// 이게 한번임
// map 을 하나 두고 위치값을 가지고 있으면 좋을 듯
const fs = require('fs');
const [info, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = info.trim().split(' ').map(Number);
const arr = data.map(v => v.trim().split(' ').map(Number));
const dx = [-1, -1, -1,0,0,1,1,1];
const dy = [-1,0 ,1,-1,1,-1,0 ,1];
const numMap = new Map();

// 맵에 초기 위치값 저장
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
        numMap.set(arr[x][y], [x,y]);
    }
}

// 범위내에 있는지 확인하는 함수
const isRange = (x, y) => x>=0 && x < n && y >=0 && y < n;

// 8방향중 최대값과 좌표를 출력해주는 함수
const getMaxXY = (x, y) => {
    let maxVal = 0;
    let maxValX= -1;
    let maxValY= -1;
    for (let idx = 0; idx < dx.length; idx++) {
        const newX = x + dx[idx]
        const newY = y + dy[idx]
        if (isRange(newX, newY) && maxVal < arr[newX][newY]) {
            maxVal = arr[newX][newY];
            [maxValX, maxValY] = [newX, newY]
        }
    }
    return [maxVal, maxValX, maxValY];
}

// 최대값, 지금값, 좌표들 넘겨주면 배열이랑 맵을 바꿔주는 함수
const changeVal = (maxVal, maxX, maxY, nowVal, nowX, nowY) => {
    numMap.set(maxVal, [nowX, nowY])
    numMap.set(nowVal, [maxX, maxY])
    arr[maxX][maxY] = nowVal;
    arr[nowX][nowY] = maxVal;
}

for (let tr = 1; tr <= m; tr++) {
    for (let num = 1; num <= n**2; num++) {
        const [nowX, nowY] = numMap.get(num);
        const [maxVal, maxValX, maxValY] = getMaxXY(nowX, nowY);
        changeVal(maxVal, maxValX, maxValY, num, nowX, nowY);
    }
}

arr.forEach(row => console.log(...row))