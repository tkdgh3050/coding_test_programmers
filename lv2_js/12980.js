`
점프와 순간 이동
https://school.programmers.co.kr/learn/courses/30/lessons/12980
`
function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {      // 2로 나뉜다면 2로 나눈 곳으로 순간 이동 하는 것이 효율적
      n = parseInt(n / 2);
    } else {                // 아니라면 2로 나눌 수 있는 값이 되도록 한칸 점프
      n -= 1;
      answer += 1;
    }
  }
  return answer;
}