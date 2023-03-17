`
피보나치 수
https://school.programmers.co.kr/learn/courses/30/lessons/12945
`
//--------------------------------------------------
// 처음에는 피보나치 수를 구하는 클래스를 구현하여 실행.
// 피보나치를 재귀로 구현할 시, 자바스크립트의 최대 재귀호출은 10000회로, 자연수가 크다면 재귀로 구현하면 안됨. 또한, 정수 최대 표현범위를 넘어가는 경우도 발생.
function solution(n) {
  let fibo = new Fibo();
  return fibo.getFibo(n);
}

class Fibo {
  constructor() {
    this.d = new Map();
  }

  getFibo(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (this.d.has(n)) return this.d.get(n);
    let dVal = this.getFibo(n - 1) % 1234567 + this.getFibo(n - 2) % 1234567;
    dVal = dVal % 1234567;
    this.d.set(n, dVal);
    return dVal;
  }
}
//--------------------------------------------------

// 그렇기 때문에 for 문을 이용해 구현
function solution(n) {
  const fibo = [0, 1];
  if (n < 1) return fibo[n];
  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2]) % 1234567);
  }
  return fibo[n];
}
