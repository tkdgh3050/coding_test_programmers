`
숫자 카드 나누기
https://school.programmers.co.kr/learn/courses/30/lessons/135807
`
function solution(arrayA, arrayB) {
  const resultA = getResult(arrayA, arrayB);
  const resultB = getResult(arrayB, arrayA);
  
  return Math.max(resultA, resultB);
}

function getResult(arrA, arrB) { // 앞에 인자를 기준으로 모든 숫자를 나눌 수 있는지, 뒤에꺼에는 모든 숫자를 나눌 수 없는지 확인해 리턴
  arrA.sort((a,b) => a - b);
  for (let i = arrA[0]; i > 1; i--) {
      if (arrA.every(val => val % i === 0) && arrB.every(val => val % i !== 0)) return i;
  }
  return 0;
}