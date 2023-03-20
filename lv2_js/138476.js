`
귤 고르기
https://school.programmers.co.kr/learn/courses/30/lessons/138476
`
function solution(k, tangerine) {
  const tangMap = new Map();
  let cnt = 0;
  let types = 0;
  for (let i = 0; i < tangerine.length; i++) { // 귤 크기와 개수를 카운트해서 맵으로 만드는 부분
    const val = tangerine[i];
    if (tangMap.has(val)) {
      tangMap.set(val, tangMap.get(val) + 1);
    } else {
      tangMap.set(val, 1);
    }
  }
  const sortedArr = Array.from(tangMap).sort((a, b) => b[1] - a[1]); // 맵을 귤 개수를 기준으로 내림차순 정렬한 배열을 추출
  for (v of sortedArr) {  // 개수가 많은 귤 부터 뽑아내면서 원하는 k 보다 커지면 멈춘 뒤 종류를 리턴하면 정답
    cnt += v[1];
    types += 1;
    if (cnt >= k) break;
  }
  return types;
}