`
N개의 최소골배수
https://school.programmers.co.kr/learn/courses/30/lessons/12953
`
function solution(arr) {
  return arr.reduce((a, c) => getLCM(a, c)); //arr 안에 있는 수를 차례대로 누적하며 최소공배수 구함
}

function getLCM(a, b) { //두 개의 수를 받아 최소공배수를 리턴해주는 함수
  let gcd = 1;
  if (a > b) [a, b] = [b, a]; // a 가 작은 수로 지정하고
  for (let i = 2; i <= a; i++) {  // a 와 같아질 때 까지 두 수의 최대공약수를 확인
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return parseInt(a * b / gcd); //최소공배수 리턴
}