`
타겟 넘버
https://school.programmers.co.kr/learn/courses/30/lessons/43165
`
function solution(numbers, target) {  // 두 개의 이진트리를 계속 구해간다는 개념으로 풀어봄
  let answerArr = [numbers[0], -numbers[0]];  // 초기 루트 값을 넣욷두고
  for (num of numbers.slice(1,)) {
    const tempArr = [];
    for (ans of answerArr) {  // 기존에 구한 값이다가 더하거나 빼야하는 숫자 하나를 가져와서 값을 구해나감
      tempArr.push(ans + num);
      tempArr.push(ans - num);
    }
    answerArr = tempArr;
  }
  return answerArr.filter(v => v === target).length; //타겟과 같은 값을 가지고 있는 경우의 수 카운트
}