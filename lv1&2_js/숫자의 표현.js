/**
 * lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924

문제 설명
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

제한사항
n은 10,000 이하의 자연수 입니다.
입출력 예
n	result
15	4
입출력 예 설명
입출력 예#1
문제의 예시와 같습니다.
 */

function solution(n) {
  // n과 같은 수 1개 카운트
  let result = 1;

  // 절반보다 큰 값은 어차피 불가하므로 제외
  for (let num = 1; num <= n / 2; num++) {
    if (check(num, n)) result += 1;
  }
  return result;
}

function check(start, limit) {
  let sum = 0;
  for (let val = start; val <= limit; val++) {
    sum += val;
    if (sum === limit) return true;
    if (sum > limit) return false;
  }
  return false;
}
