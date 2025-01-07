/**
 * lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12931

문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
입출력 예
N	answer
123	6
987	24

입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
 */

function solution(n) {
  // 10을 계속 나눠주면서 자릿수를 도출해 배열에 넣고 더하는 방식
  const idxArr = Array(String(n).length).fill(10);
  const answerArr = [];
  let num = n;

  idxArr.forEach((val) => {
    answerArr.push(num % val);
    num = Math.trunc(num / val);
  });

  return answerArr.reduce((acc, cur) => cur + acc);
}

function solution2(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => Number(cur) + acc, 0);
}
