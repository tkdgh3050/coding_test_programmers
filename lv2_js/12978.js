`
배달
https://school.programmers.co.kr/learn/courses/30/lessons/12978
`
function solution(N, road, K) { // 다익스트라 알고리즘
  const node = Array(N + 1).fill(Number.MAX_SAFE_INTEGER); // 각 노드로 갈 수 있는 최소값 저장
  const edge = Array(N + 1).fill(null).map(v => []); // 각 노드에 연결되어있는 엣지 정보 저장
  for (let r of road) {
    const [from, to, cost] = r;
    edge[from].push({ to, cost });
    edge[to].push({ to: from, cost }); // 양방향 이동 가능하므로 반대도 입력
  }
  node[1] = 0;  // 1번 노드 초기화
  const queue = [{ to: 1, cost: 0 }]; // 1번노드에서 갈 수 있는 곳부터 시작
  while (queue.length > 0) {
    const q = queue.pop();
    for (let next of edge[q.to]) { // 연결되어있는 모든 엣지를 가져와서
      const { to, cost } = next;
      if (node[to] > node[q.to] + cost) { // 해당 엣지를 이용했을 때 노드의 비용값이 작은지 확인
        node[to] = node[q.to] + cost;
        queue.push(next);
      }
    }
  }
  return node.filter(v => v <= K).length;
}