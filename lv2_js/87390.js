`
n^2 배열 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/87390
`
function solution(n, left, right) {
  const baseArr = Array(n).fill(1).map((v, i) => v + i); // 1~n 까지 담긴 배열 하나 만들기
  let answerArr = [];
  const startLine = Math.trunc(left / n) + 1; // 효율성을 위해 출력을 원하는 부분이 시작하는 라인 찾고
  const endLine = Math.trunc(right / n) + 1;  // 출력을 원하는 부분이 끝나는 라인을 찾는다
  for (let i = startLine; i <= endLine; i++) {  // 해당 라인에 대해서만 for문을 돌면서 찾을 배열을 구한다
    const newArr = [...baseArr];            // base 배열을 기반으로
    for (let j = 0; j < i; j++) {             // 앞에 숫자 i 까지는 모두 i 가 된다
      newArr[j] = i;
    }
    answerArr = [...answerArr, ...newArr];  // 완성한 배열을 넣고
  }
  const minusLine = (startLine - 1) * n;      // 필요한 부분만 배열을 구했기 때문에 초기에 제외한 열 수를 구한 뒤
  return answerArr.slice(left - minusLine, right - minusLine + 1) // 원하는 부분에서 빼준다
}