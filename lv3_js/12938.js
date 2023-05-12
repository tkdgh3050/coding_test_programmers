`
최고의 집합
https://school.programmers.co.kr/learn/courses/30/lessons/12938
`
function solution(n, s) {
  /*
  s 를 n으로 나눈 수를 n 만큼 가지고 있으면서 나머지가 있다면 나머지 수 만큼 다른 수의 동등하게 분배한 만큼이 가장 큰 경우
  */
  if (s < n) return [-1]; // s 가 n보다 작으면 불가능
  const div = parseInt(s / n);
  const rest = s % n;
  const result = [];
  for (let i = 1; i <= n - rest; i++) {
    result.push(div);
  }
  for (let i = 1; i <= rest; i++) {
    result.push(div + 1);
  }
  return result;
}