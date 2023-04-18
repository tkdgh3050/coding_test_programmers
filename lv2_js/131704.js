`
택배상자
https://school.programmers.co.kr/learn/courses/30/lessons/131704
`
function solution(order) {
  // stack 을 하나 만들고
  const subBelt = [];
  // 1 ~ order의 길이만큼 가지고 있는 역순 arr를 만듬
  const mainBelt = Array(order.length).fill(order.length).map((v, i) => v - i);
  // 현재 orderIdx 값
  let orderIdx = 0;

  while (orderIdx < order.length) {
    // 메인벨트 의 길이가 0이고 서브벨트의 마지막 값이 올려야할 값과 일치하지 않는 경우 break
    if (mainBelt.length === 0 && subBelt.length > 0 && subBelt[subBelt.length - 1] !== order[orderIdx]) break;
    if (order[orderIdx] === mainBelt[mainBelt.length - 1]) { // 메인벨트의 값이 올려야할 상자와 일치하면
      mainBelt.pop();
      orderIdx++;
    } else if (subBelt.length > 0 && order[orderIdx] === subBelt[subBelt.length - 1]) { // 서브벨트의 값이 올려야할 상자와 일치하면
      subBelt.pop();
      orderIdx++;
    } else { // 아닌 경우 메인벨트의 값을 서브벨트로 옮김
      subBelt.push(mainBelt.pop());
    }
  }

  return orderIdx
}