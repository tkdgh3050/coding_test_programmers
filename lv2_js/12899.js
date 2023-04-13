`
124 나라의 숫자
https://school.programmers.co.kr/learn/courses/30/lessons/12899
`
function solution(n) {
  // 10진법에서 1을 뺀 뒤 3진법으로 변경
  // 3진법의 가장 끝 자리 수만 map을 이용해 변환 진행
  // 끝자리 수를 제외한 수를 다시 10진법으로 변경
  // 이를 반복하면 변경 완료됨
  const map = {
    '0': '1',
    '1': '2',
    '2': '4',
  }
  let result = '';
  while (n > 0) {
    n = n - 1;
    const n3 = n.toString(3);
    result = map[n3[n3.length - 1]] + result;
    n = parseInt(n3.slice(0, n3.length - 1), 3);
  }
  return result;
}