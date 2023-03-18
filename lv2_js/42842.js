`
카펫
https://school.programmers.co.kr/learn/courses/30/lessons/42842
`
function solution(brown, yellow) {
  let yellowW = 0;
  let yellowH = 0;
  for (let i = 1; i <= parseInt(Math.sqrt(yellow)); i++) { // 노란색의 약수가 노란색 가로, 세로를 결정함
    if (yellow % i === 0) { // 약수인 경우
      yellowW = parseInt(yellow / i);
      yellowH = i;
      if ((yellowW + yellowH) * 2 + 4 === brown) break; // 가로 세로 두개씩과 모퉁이 4개를 합친 것이 갈색이 됨. 이게 일치한다면 정답임
    }
  }
  return [yellowW + 2, yellowH + 2];  // 노란색의 둘레가 갈색이므로 두개씩 더한 것이 카펫임
}