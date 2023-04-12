`
소수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/42839
`
function solution(numbers) {
  const arr = [...numbers];
  let answer = new Set();
  for (let i = 1; i <= arr.length; i++) {
    const perms = getPerm(arr, i).map(v => parseInt(v.join('')));
    const find = perms.filter(v => isPrime(v));
    if (find.length > 0) find.forEach(v => answer.add(v));
  }
  return answer.size;
}

function getPerm(arr, num) { // 숫자를 기자고 만들 수 있는 모든 경우의 수 리턴
  const results = [];
  if (num === 1) return arr.map(v => [v]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permu = getPerm(rest, num - 1);
    const add = permu.map(v => [fixed, ...v]);
    results.push(...add);
  });
  return results;
}

function isPrime(n) { // 소수인지 판별하는 함수
  if (n < 2) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}