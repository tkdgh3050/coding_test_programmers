`
네트워크
https://school.programmers.co.kr/learn/courses/30/lessons/43162
`
function solution(n, computers) {
  const graph = [];
  computers.forEach((com, idx) => { // 노드별 그래프 만들기
    const temp = [];
    com.forEach((v, i) => {
      if (idx !== i && v === 1) temp.push(i);
    });
    graph.push(temp);
  })

  const dfs = (graph, start) => { //dfs 선언
    const visited = [];
    const q = [start];

    while (q.length > 0) {
      const node = q.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        q.push(...graph[node].reverse());
      }
    }
    return visited;
  }

  let allVisited = Array(n).fill(0).map((v, i) => i); // 모든 노드를 방문했는지 기록용 배열
  let result = 0;
  while (allVisited.length > 0) {
    const visited = dfs(graph, allVisited[0]); //방문한 노드들을 리턴받으면
    result++; // 그래프 하나가 완성됨
    allVisited = allVisited.filter((v) => !visited.includes(v)); // 그래프에서 방문하지 않은 노드들만 따로 추출
  }
  return result;
}