// 바라보고 있는 방향 이동 불가능 -> 왼쪽으로 회전
// 이동 가능? -> 이동
// 격자 밖으로 나가면 탈출
// 한 칸 이동했는데 오른쪽 벽이 없다? 오른쪽으로 회전
// 이동했는데 오른쪽 벽 있다? 직진
// 이동하면 +1, 아예 불가능 -1 출력

const fs = require('fs');
const [n, startPoint, ...data] = fs.readFileSync(0).toString().trim().split('\n');

const [startX, startY] = startPoint.trim().split(' ').map(val => Number(val) - 1);
const mat = data.map(v => v.trim().split(''));

const DIR = {
    "UP": 1,
    "RIGHT": 2,
    "DOWN": 3,
    "LEFT": 4,
}
const nextXY = (x, y, dir) => {
    if (dir === DIR.UP) { // 위
        return [x-1, y]
    } else if (dir === DIR.DOWN) { // 아래
        return [x+1, y]
    } else if (dir === DIR.RIGHT) { // 오른쪽
        return [x, y+1]
    } else { //왼쪽
        return [x, y-1]
    }
}
const canGo = (afterX, afterY) => mat[afterX][afterY] === '#' ? false : true;
const escape = (x,y) => x < 0 || x >= n || y < 0 || y >= n;
const hasRight = (afterX, afterY, dir) => {
    if (dir === DIR.UP) { // 위
        return afterY+1 < n && mat[afterX][afterY+1] === '#'
    } else if (dir === DIR.DOWN) { // 아래
        return afterY-1 >= 0 && mat[afterX][afterY-1] === '#'
    } else if (dir === DIR.RIGHT) { // 오른쪽
        return afterX+1 < n &&mat[afterX+1][afterY] === '#'
    } else { //왼쪽
        return afterX+1 >= 0&& mat[afterX-1][afterY] === '#'
    }
}
const turnRight = (dir) => dir === DIR.LEFT ? 1 : dir+1;
const turnLeft = (dir) => dir === DIR.UP ? 4 : dir-1;

let moveFlag = true;
let nowDirection = DIR.RIGHT;
let moveCnt = 0;
let [nowX, nowY] = [startX, startY];

while(moveFlag) {
    if (hasRight(nowX, nowY, nowDirection)) { //오른쪽이 벽이있으면 전진
        const [nextX, nextY] = nextXY(nowX, nowY, nowDirection);
        if (escape(nextX, nextY)) {
            moveCnt += 1;
            break;
        }
        //갈 수 있는지 확인
        if (canGo(nextX, nextY)) {
            //갈 수 있으면 
            nowX = nextX;
            nowY = nextY;
            if (nowX === startX && nowY === startY) {
                //만약 시작점라면 불가능으로 -1 출력
                moveCnt = -1;
                break;
            } else {
                //전진
                // 파라미터들 변경하고 끝
                moveCnt += 1;
            }
        } else {
            //갈 수 없으면
            //왼쪽으로 회전
            nowDirection = turnLeft(nowDirection);
        }
    } else { 
        //없으면 오른쪽으로 회전하고 전진
        nowDirection = turnRight(nowDirection);
        const [nextX, nextY] = nextXY(nowX, nowY, nowDirection);
        if (escape(nextX, nextY)) {
            moveCnt += 1;
            break;
        }
        nowX = nextX;
        nowY = nextY;
        if (nowX === startX && nowY === startY) {
                //만약 시작점라면 불가능으로 -1 출력
                moveCnt = -1;
                break;
            } else {
                //전진
                // 파라미터들 변경하고 끝
                moveCnt += 1;
            }
    }
}
console.log(moveCnt)