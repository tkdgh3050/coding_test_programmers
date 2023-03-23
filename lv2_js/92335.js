`
2022 KAKAO BLIND RECRUITMENT > k진수에서 소수 개수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/92335
`
function solution(n, k) {
  const nString = n.toString(k);    // n 을 k진수로 변경
  const nArray = nString.split('0').filter(v => isPrime(+v));  // 0을 기준으로 자른 뒤 해당 숫자들이 소수인지 확인
  return nArray.length;
}

function isPrime(num) {
  if (!num || num === 1 || Number.isInteger(Math.sqrt(num))) return false;  // 빈 문자이거나, 1이거나, 제곱수면 소수가 아니므로 false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}