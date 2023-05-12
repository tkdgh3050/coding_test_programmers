`
야근 지수
https://school.programmers.co.kr/learn/courses/30/lessons/12927
`
function solution(n, works) {
  if (works.reduce((a, c) => a + c, 0) <= n) return 0; // 야근 안해도 되면 0 리턴
  works.sort((a, b) => b - a); // 내림차순 정렬
  let sameIdx = 0; // 같은 값을 가지고 있는 인덱스를 찾기 위한 값
  while (n > 0) {
    if (sameIdx < works.length - 1 && works[sameIdx] === works[sameIdx + 1]) { // 같은 값을 가지고 있는 인덱스를 찾는 로직
      sameIdx++;
      continue;
    }
    if (n >= sameIdx + 1) { // 최대값의 개수가 n보다 작거나 같은 경우
      for (let i = 0; i <= sameIdx; i++) { // 최대값 개수 모두를 1씩 감소
        works[i] = works[i] - 1;
      }
      n = n - (sameIdx + 1);  // n도 최대값 개수만큼 감소
    } else { // 아니라면 앞에서부터 n개만큼만 1씩 줄이면 됨
      for (let i = 0; i < n; i++) {
        works[i] = works[i] - 1;
      }
      n = 0;
    }
  }
  return works.reduce((a, c) => a + Math.pow(c, 2), 0);
}