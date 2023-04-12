`
2 x n 타일링
https://school.programmers.co.kr/learn/courses/30/lessons/12900
`
function solution(n) {
  // 피보나치로 볼 수 있어서 피보나치
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp.push((dp[i - 2] + dp[i - 1]) % 1000000007);
  }
  return dp[n] % 1000000007;
}