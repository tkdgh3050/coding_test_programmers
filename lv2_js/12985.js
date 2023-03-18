`
예상 대진표
https://school.programmers.co.kr/learn/courses/30/lessons/12985
`
function solution(n, a, b) {
  let roundCnt = 0;
  for (let i = 1; i <= Math.log2(n); i++) { //log 2 의 n 번만큼 대진이 진행되고
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) {  // 2로 나눈 값을 올림해서 값이 같으면 둘이 같은 대진임
      roundCnt = i;
      break;
    }
  }
  return roundCnt;
}