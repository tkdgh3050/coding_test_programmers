`
멀리 뛰기
https://school.programmers.co.kr/learn/courses/30/lessons/12914
`
// 처음 풀이--------------------------------------
// nC0 + ~ n-n/2Cn/2 까지 더하는 방식으로 생각함.
// 자바스크립트의 int 의 최대 표현범위를 넘어가는 순간, 답이 달라짐 - 그래서 BigInt 를 사용
// BigInt 는 숫자 뒤에 n 을 붙이거나 BigInt(n) 이런식으로 사용가능
// 1234567 로 나누라는 문제는 대체로 int 범위를 넘어설 수 있는 문제일 듯
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= parseInt(n / 2); i++) {
    answer += combination(n - i, i);
  }
  return answer % 1234567;
}

function combination(left, right) {
  if (right === 0 || left === right) return 1;
  let top = 1n;
  let bottom = 1n;
  for (let i = left; i > left - right; i--) {
    top *= BigInt(i);
  }
  for (let i = 2; i <= right; i++) {
    bottom *= BigInt(i);
  }
  return Number(top / bottom % 1234567n)
}
//--------------------------------------

//-------------------------------------
// 경우의 수를 나열하다보면 결국 피보나치수열과 유사함을 알 수 있음
// 아래와 같이 변경 가능
function solution(n) {
  let arr = [1, 2]; // 1, 2, 3, 5, 8, 13 ....
  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }
  return arr[n - 1];
}
