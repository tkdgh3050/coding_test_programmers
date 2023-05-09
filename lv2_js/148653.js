`
마법의 엘리베이터
https://school.programmers.co.kr/learn/courses/30/lessons/148653
`
function solution(storey) {
  /*
  1의 자리 숫자부터 차례대로 0을 만들어가면서 풀면 됨
  6이상일 때는 숫자를 올리는 것이 이득이고
  4이하일 때는 숫자를 내리는 것이 이득이다.
  5일 때는 그 앞자리 수가 5이상일 경우에 올리는 것이 이득이고 아닐 경우 내리는 것이 낫다
   */
  let cnt = 0;
  while (storey !== 0) {
      let div = Math.trunc(storey / 10);
      const rest = storey % 10;
      if (rest > 5 || (rest === 5 && div % 10 >= 5)) {
          cnt += (10 - rest);
          div += 1;
      } else {
          cnt += rest;
      }
      storey = div;
  }
  return cnt
}