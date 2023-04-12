`
2018 KAKAO BLIND RECRUITMENT > [1차] 프렌즈4블록
https://school.programmers.co.kr/learn/courses/30/lessons/17679
`
function solution(m, n, board) {
  // board 를 2차원 배열로 변경하는 작업 진행 ['C', 2] -> 2: 살아있는 블록, 1: 일치하는 블록, 0: 제거된 블록
  let answer = 0;
  let boardArr = makeBoardArr(board);

  //while 있는지?
  // 행별로 2*2 로 확인하면서 해당하는 요소의 2 를 1로 변경 있는지를
  // 행렬을 돌면서 1인 요소를 카운팅하면서 0으로 변경
  // 카운팅이 제로면 있는지를 false로 변경
  // 제로가 이나라면 align 진행
  let isExists = true;
  while (isExists) {
    let count = 0;
    boardArr = checkBlock(boardArr, m, n);
    [boardArr, count] = countBlock(boardArr, m, n, count);

    if (count === 0) {
      isExists = false;
    } else {
      answer += count;
      boardArr = alignBlock(boardArr, m, n);
    }
  }
  return answer;
}

function makeBoardArr(board) { // 문자열을 3차원 배열로 변경하는 함수 [블록종류, 블록상태]
  const arr = [];
  for (let line of board) {
    const tempArr = [];
    for (let chr of line.split('')) {
      tempArr.push([chr, 2]); // 살아있는 상태로 값 입력
    }
    arr.push(tempArr);
  }
  return arr;
}

function checkBlock(board, m, n) { // 2 * 2 로 일치하는 것이 있는지 확인하는 함수
  for (let row = 0; row < m - 1; row++) {
    for (let col = 0; col < n - 1; col++) {
      if (board[row][col][1] !== 0 && // 현재 확인하는 블록이 죽은 블록이 아니고
        board[row][col][0] === board[row + 1][col][0] &&  // 2 * 2 가 같은 블록이라면
        board[row][col][0] === board[row][col + 1][0] &&
        board[row][col][0] === board[row + 1][col + 1][0]) {
        board[row][col][1] = 1;
        board[row + 1][col][1] = 1;
        board[row][col + 1][1] = 1;
        board[row + 1][col + 1][1] = 1; // 모두 일치하는 블록으로 변경
      }
    }
  }
  return board;
}

function countBlock(board, m, n, count) { // 일치하는 블록의 개수를 카운팅하고 죽은 블록으로 변경하는 함수
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col][1] === 1) { //일치하는 블록이라면
        board[row][col][1] = 0; //죽은 블록으로 변경
        board[row][col][0] = 'FINISH';
        count++;
      }
    }
  }
  return [board, count];
}

function alignBlock(board, m, n) {  // 블록을 돌면서 죽은블록은 위로 살아있는 블록은 아래로 내려주는 함수
  let tempFlag = true;
  while (tempFlag) {
    tempFlag = false;
    for (let row = 0; row < m - 1; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col][1] === 2 && board[row + 1][col][1] === 0) {
          [board[row][col], board[row + 1][col]] = [board[row + 1][col], board[row][col]];
          tempFlag = true;
        }
      }
    }
  }
  return board;
}