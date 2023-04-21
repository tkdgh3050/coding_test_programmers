`
줄 서는 방법
https://school.programmers.co.kr/learn/courses/30/lessons/12936
`
function solution(n, k) {
  // n 만큼의 순차적인 배열 생성
  let arr = Array(n).fill(1).map((v, i) => v + i);
  const result = [];
  let nFac = arr.reduce((a, c) => a * c, 1); // n! 값 구하기
  let nCnt = n; // 한칸씩 값 정하면서 n을 미루기 위해 선언
  k = k - 1 // 인덱스 맞춰주기 위해 1 빼기
  while (nCnt > 1) {
    nFac /= nCnt
    const idx = parseInt(k / (nFac));
    const rest = k % nFac
    k = rest;
    result.push(arr[idx]);
    arr = arr.filter((v, i) => i !== idx); // 사용한 값 제거
    nCnt--;
  }
  result.push(arr[0]); // 마지막 남은 숫자 넣어주기
  return result;
}
