`
숫자 변환하기
https://school.programmers.co.kr/learn/courses/30/lessons/154538
`
function solution(x, y, n) {
  // dp 로 풀기
  const INF = 1000000;
  const dp = Array(y + 1).fill(INF); // dp[y] 숫자가 우리가 구하고자 하는 숫자
  dp[x] = 0;  // 초기 시작하는 값을 0번째 연산으로 대입한 뒤
  for (let i = x; i < y; i++) {  // x부터 인덱스를 y 전까지 가면서
    if (dp[i] === INF) continue;  // 지금 값이 무한이면 어차피 무한이므로 pass
    if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
  }
  return dp[y] === INF ? -1 : dp[y];
}