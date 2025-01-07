/**
 * lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12928

문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.

입출력 예
n	return
12	28
5	6

입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
 */

function solution(n) {
  // n의 루트 값 까지만 탐색을 진행하면 되고
  // root 값까지의 배열을 만든 다음 나누었을 때 나머지가 0인 케이스를 배열에 담는다
  if (n === 0) return 0;

  const root = Math.trunc(Math.sqrt(n));
  const ansArr = [];
  const checkArr = Array.from({ length: root }, (_, idx) => idx + 1);

  checkArr.forEach((val) => {
    if (n % val !== 0) return;
    ansArr.push(val);
    if (n / val === val) return;
    ansArr.push(n / val);
  });

  return ansArr.reduce((acc, cur) => cur + acc);
}
