`
숫자 게임
https://school.programmers.co.kr/learn/courses/30/lessons/12987
`
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let a = A.pop();
  let b = B.pop();
  let cnt = 0;
  while (B.length >= 0 && A.length >= 0) { // A, B 를 내림차순으로 해놓고 B가 차례대로 A보다 큰 경우를 선택하는게 최대값임
    if (a < b) {
      cnt = cnt + 1;
      if (A.length === 0 || B.length === 0) break;
      a = A.pop();
      b = B.pop();
    } else {
      if (A.length === 0) break;
      a = A.pop();
    }
  }
  return cnt;
}