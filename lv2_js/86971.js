`
전력망을 둘로 나누기
https://school.programmers.co.kr/learn/courses/30/lessons/86971
`
function solution(n, wires) {
  // edge 객체 양방향으로 가지는 맵 만들고
  const edge = new Map();
  for (let wire of wires) {
    const [a, b] = wire;
    edge.has(a) ? edge.set(a, [...edge.get(a), b]) : edge.set(a, [b]);
    edge.has(b) ? edge.set(b, [...edge.get(b), a]) : edge.set(b, [a]);

  }
  // 내부 길이가 가장 긴 노드 찾아서 해당 노드로 for문 진행
  // 최소가 되는 값을 저장하고 리턴
  let minVal = Number.MAX_SAFE_INTEGER;
  for (let [i, j] of wires) {
    minVal = Math.min(minVal, getDiffCutEdge(i, j, edge));
  }
  return minVal;
}

function getDiffCutEdge(left, right, edge) { // left, right 주면 잘라서 양쪽 길이 차이 반환하는 함수
  let leftNodes = getLinkedNodes(left, edge, right);
  let rightNodes = getLinkedNodes(right, edge, left);
  return Math.abs(leftNodes.length - rightNodes.length);
}

function getLinkedNodes(start, edge, except) { // bfs로 연결된 노드 반환
  const nodes = [start];
  const queue = [start];
  while (queue.length > 0) {
    const q = queue.pop();
    for (let node of edge.get(q)) {
      if (node === except || nodes.includes(node)) continue;
      nodes.push(node);
      queue.push(node);
    }
  }
  return nodes;
}