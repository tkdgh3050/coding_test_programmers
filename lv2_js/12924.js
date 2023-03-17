`
숫자의 표현
https://school.programmers.co.kr/learn/courses/30/lessons/12924
`
function solution(n) {
  let cnt = 0;    // 되는 경우의 수
  for (let i = 1; i <= n; i++) {  //시작하는 숫자를 1부터 시작하여 n까지 순환
    let temp = 0;
    for (let j = i; j <= n; j++) {  // 시작하는 숫자부터 차례로 값을 더했을 때
      temp += j;
      if (temp > n) break;          // 더한 값이 n을 넘어가는 순간 다음으로 넘어감
      if (temp === n) {             // 이때 더한 값과 n이 일치하면 count++ 헤주고 다음으로 넘어감
        cnt += 1;
        break;
      }
    }
  }
  return cnt;
}