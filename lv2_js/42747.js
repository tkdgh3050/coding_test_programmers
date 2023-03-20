`
H-Index
https://school.programmers.co.kr/learn/courses/30/lessons/42747
`
function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  if (citations[0] === 0) return 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) answer++;        // 현재 인용수가 개수보다 큰 경우 하나씩 더해가면서 작아지는 순간 멈춤
    else break;
  }
  return answer
}