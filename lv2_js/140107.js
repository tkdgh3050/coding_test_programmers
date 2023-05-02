`
점 찍기
https://school.programmers.co.kr/learn/courses/30/lessons/140107
`
function solution(k, d) {
  let count = 0;
  for (let x = 0; x <= parseInt(d / k); x++) { 
    // 길이 방정식을 이용해서 x의 값이 주어졌을 때 y의 최대값은 정해진다.
    // 해당 방정식을 이용해 아래와 같이 계산할 수 있고 y가 0인경우가 존재하기 때문에 +1 해준다.
    count += parseInt(Math.sqrt(Math.pow(d / k, 2) - Math.pow(x, 2))) + 1;
  }
  return count;
}