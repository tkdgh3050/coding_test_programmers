`
다음 큰 숫자
https://school.programmers.co.kr/learn/courses/30/lessons/12911
`
function solution(n) {
  let nConv = n.toString(2);
  const oneCnt = nConv.length - [...nConv].filter(v => v === '0').length; //n을 2진수로 변경했을 시, 1의 개수가 몇개 인지 구해둔 후
  while (1) {
    n += 1;       // n을 1씩 증가시키면서
    nConv = n.toString(2);  // 해당 수를 2진수로 변경하고
    if (nConv.length - [...nConv].filter(v => v === '0').length === oneCnt) return n; // 변경한 수를 2진수를 변경했을 때 1의 개수가 처음 구한 oneCnt 와 같은지 확인한 뒤 같다면 return
  }
}
