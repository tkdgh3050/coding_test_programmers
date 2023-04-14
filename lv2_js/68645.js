`
삼각 달팽이
https://school.programmers.co.kr/learn/courses/30/lessons/68645
`
function solution(n) {
  const answer = [];
  let total = 0;
  for (let i = 1; i <= n; i++) { //삼각형 만드는 작업
    answer.push(Array(i).fill(0));
    total += i;
  }
  const move = { // 움직임 정의
    DOWN: 'down',//[1, 0],
    RIGHT: 'right',//[0, 1],
    UP: 'up',//[-1, -1],
  }
  let me = { // 현재 내 위치 정의
    row: -1, // 시작할 때 -1 , 0 에서 시작해야 while문 돌기 편함
    col: 0,
    dir: move.DOWN
  };

  let idx = 1;
  while (idx <= total) {
    if (me.dir === move.DOWN) {
      if (me.row < n - 1 && answer[me.row + 1][me.col] === 0) { //아래로 갈 수 있는 경우
        me.row += 1;
      } else {
        me.dir = move.RIGHT;
        continue;
      }
    } else if (me.dir === move.RIGHT) {
      if (me.col < n - 1 && answer[me.row][me.col + 1] === 0) { //오른쪽으로 갈 수 있는 경우
        me.col += 1;
      } else {
        me.dir = move.UP;
        continue;
      }
    } else if (me.dir === move.UP) {
      if (me.row > 0 && me.col > 0 && answer[me.row - 1][me.col - 1] === 0) { //위로 갈 수 있는 경우
        me.row -= 1;
        me.col -= 1;
      } else {
        me.dir = move.DOWN;
        continue;
      }
    }
    answer[me.row][me.col] = idx;
    idx++;
  }
  return answer.flat();
}