`
가장 큰 수
https://school.programmers.co.kr/learn/courses/30/lessons/42746
`
function solution(numbers) {
  let sorted = numbers.map(v => v.toString()).sort((a, b) => (b + a) - (a + b)).join(''); // 이어붙였을 때 큰 경우로 고려하여 정렬 진행
  return sorted[0] === '0' ? '0' : sorted; // 앞자리가 0인 경우엔 0으로 이루어져 있으므로 0을 리턴
}