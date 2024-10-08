/**
 * lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12932

문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n	return
12345	[5,4,3,2,1]
 */

function solution(n) {
  const nArray = String(n).split("");
  const answer = Array(nArray.length).fill(0);

  nArray.forEach((val, idx) => (answer[nArray.length - 1 - idx] = Number(val)));

  return answer;
}
