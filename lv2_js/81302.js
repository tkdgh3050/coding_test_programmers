`
2021 카카오 채용연계형 인턴십 > 거리두기 확인하기
https://school.programmers.co.kr/learn/courses/30/lessons/81302
`
function solution(places) {
  const answer = [];
  for (let place of places) {
    isRight(place) ? answer.push(1) : answer.push(0);
  }
  return answer;
}

function isRight(place) { // 모든 행과 열 돌면서 P가 존재하는 경우 주위에 방역수칙을 지키는지 확인하여 지키지 않으면 false를 리턴하는 함수
  for (let row = 0; row < place.length; row++) {
    for (let col = 0; col < place[0].length; col++) {
      if (place[row][col] === 'P') {
        if (!isExists(place, row, col)) return false;
      }
    }
  }
  return true;
}

function isExists(place, row, col) { // 주위에 방역수칙을 안지키고 있는지 확인하는 함수 - 중복 방지를 위해 오른쪽, 아래쪽, 오른쪽아래, 왼쪽아래 4가지만 확인
  if (place[0].length > col + 1 && place[row][col + 1] === 'P') return false; // 오른쪽
  if (place.length > row + 1 && place[row + 1][col] === 'P') return false; // 아래쪽
  if (col !== 0 && place.length > row + 1 && place[row + 1][col - 1] === 'P') { // 오른쪽 아래
    if (place[row][col - 1] !== 'X' || place[row + 1][col] !== 'X') return false; // 중간에 X 가 아닌 값이 존재하면 안지킨 것
  }
  if (place[0].length > col + 1 && place.length > row + 1 && place[row + 1][col + 1] === 'P') { // 왼쪽 아래
    if (place[row][col + 1] !== 'X' || place[row + 1][col] !== 'X') return false; // 중간에 X 가 아닌 값이 존재하면 안지킨 것
  }
  if (place[0].length > col + 1 && place[row][col + 1] === 'O') { // 오른쪽이 책상인데 그 오른쪽이 P인 경우 안지킨 것
    if (place[0].length > col + 2 && place[row][col + 2] === 'P') return false;
  }
  if (place.length > row + 1 && place[row + 1][col] === 'O') { // 아래쪽이 책상인데 그 아래쪽이 P인 경우 안지킨 것
    if (place.length > row + 2 && place[row + 2][col] === 'P') return false;
  }
  return true;
}