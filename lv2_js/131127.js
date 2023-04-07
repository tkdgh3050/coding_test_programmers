`
할인 행사
https://school.programmers.co.kr/learn/courses/30/lessons/131127
`
function solution(want, number, discount) {
  // want 와 number 를 가지고 Map 만들기
  let answer = 0;
  const DISCOUNT_DAYS = 10;
  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  // discount 로 윈도우 10으로 가능한지 확인
  // map 에 있으면 - , 아니면 pass
  // map 에 모든 숫자가 0인지 확인 -> 맞으면 cnt++
  for (let i = 0; i < DISCOUNT_DAYS; i++) {
    if (wantMap.has(discount[i])) wantMap.set(discount[i], wantMap.get(discount[i]) - 1);
  }
  if (isAvailable(wantMap)) answer++;

  // 윈도우를 한칸 이동하면서
  // 첫번째 요소는 map에 있다면 +1, 없다면 pass
  // 다음칸 요소는 map에 있다면 -1, 없다면 pass
  // map 에 모든 숫자가 0인지 확인 -> 맞으면 cnt++
  for (let i = 0; i < discount.length - DISCOUNT_DAYS; i++) {
    if (wantMap.has(discount[i])) wantMap.set(discount[i], wantMap.get(discount[i]) + 1);
    if (wantMap.has(discount[DISCOUNT_DAYS + i])) wantMap.set(discount[DISCOUNT_DAYS + i], wantMap.get(discount[DISCOUNT_DAYS + i]) - 1);
    if (isAvailable(wantMap)) answer++;
  }
  return answer;
}

function isAvailable(wantMap) { // map 에 모든 값이 0보다 작은지 확인하는 함수
  for (let cnt of wantMap.values()) {
    if (cnt > 0) return false;
  }
  return true;
}