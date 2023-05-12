`
혼자 놀기의 달인
https://school.programmers.co.kr/learn/courses/30/lessons/131130
`
  /*
  visited = []
  g1 = []
  g2 = []
  i = 0
  while (!visited[i]) {
      g1.push(cards[i])
      i = cards[i] - 1
  }
  if g1.length = cards.length return 0
  i = visited.findIndex(v => v === false);
  while (!visited[i]) {
      g2.push(cards[i]);
      i = cards[i] - 1
  }
  return g1.length * g2.length
  */
  
function solution(cards) {
  const visited = Array(cards.length).fill(false);
  const group = [];
  let i = 0;
  const findCards = (i) => { // i 부터 차례대로 visit 한 곳에 도착할 때까지 돌기
      const g = [];
      while(!visited[i]) {
          visited[i] = true;
          g.push(cards[i]);
          i = cards[i] - 1;
      }
      group.push(g);
  }
  while (visited.some(v => v === false)) { // 모두 방문할 때까지 방문 지속
      i = visited.findIndex(v => v === false);
      findCards(i);
  }
  if (group.length === 1) return 0; // 그룹이 한 개라면 0 리턴
  group.sort((a,b) => b.length - a.length); // 갯수가 많은 그룹부터 오름차순 정렬
  return group[0].length * group[1].length;
}