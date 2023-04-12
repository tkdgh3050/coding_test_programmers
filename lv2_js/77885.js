`
2개 이하로 다른 비트
https://school.programmers.co.kr/learn/courses/30/lessons/77885
`
function solution(numbers) {
  // number 보다 큰 숫자 중 이진수로 변환했을 때 1의 갯수가 같은 가장 작은 수
  // answer []
  const answer = [];

  // for numbers
  // 짝수인 경우는 첫번째 자리가 1로 바뀌면 되므로 +1 만 하면 정답
  // 홀수인 경우
  // 오->왼 으로 서칭하면서 최초로 0이 나오는 곳을 1로, 그 오른쪽을 0으로 바꾸면 정답
  for (let num of numbers) {
    if (num % 2 === 0) {
      answer.push(num + 1);
    } else {
      answer.push(getOddAnswer(num));
    }
  }
  return answer;
}

function getOddAnswer(num) { // 오->왼 으로 서칭하면서 최초로 0이 나오는 곳을 1로, 그 오른쪽을 0으로 바꾸는 수
  let binNumArr = num.toString(2).split('');
  if (binNumArr.includes('0')) {
    const idx = binNumArr.lastIndexOf('0');
    binNumArr[idx] = 1;
    binNumArr[idx + 1] = 0;
  } else {
    binNumArr[0] = 0;
    binNumArr = ['1', ...binNumArr];
  }
  return parseInt(binNumArr.join(''), 2);
}
