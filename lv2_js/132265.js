`
롤케이크 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/132265
`
function solution(topping) {
  let answer = 0;
  const allHash = new Map(); // 모든 종류의 개수를 담고있는 맵
  const small = new Set();  // 아우의 종류를 담을 집합
  const len = topping.length;

  for (let i = 0; i < topping.length; i++) { // 모든 종류의 개수를 담도록 반복문 진행
    allHash.has(topping[i]) ? allHash.set(topping[i], allHash.get(topping[i]) + 1) : allHash.set(topping[i], 1);
  }
  let types = allHash.size; // 아우의 종류의 개수와 비고하기 위해 총 종류의 개수를 저장

  for (let i = 0; i < len - 1; i++) {
    const val = topping.pop();  // 토핑에서 하나 뺀 다음에
    const cnt = allHash.get(val);
    if (cnt === 1) types -= 1;  // 만약 종류의 개수가 0이 될 예정이라면 타입을 하나 뺀다
    small.add(val); // 아우에게 하나 주고
    allHash.set(val, cnt - 1);  // 해시에서 값을 하나 빼주고
    if (small.size === types) answer++; // 둘의 값이 같으면 +1
  }

  return answer;
}