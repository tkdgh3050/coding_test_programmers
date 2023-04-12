`
게임 맵 최단거리
https://school.programmers.co.kr/learn/courses/30/lessons/1844
`
function solution(maps) {
  //방문하는 모든 케이스를 큐에 담는 BFS
  const targetRow = maps.length - 1;
  const targetCol = maps[0].length - 1;
  const queue = [[0, 0, 1]] //row, col, cost
  maps[0][0] = 0; // 현재 위치 방문처리

  while (queue.length > 0) {
    const now = queue.shift();
    if (now[0] === targetRow && now[1] === targetCol) { // 현재 위치가 목표 위치라면 cost값 리턴
      return now[2];
    }

    if (now[0] + 1 <= targetRow && maps[now[0] + 1][now[1]] === 1) { // down
      queue.push([now[0] + 1, now[1], now[2] + 1]);
      maps[now[0] + 1][now[1]] = 0;
    }
    if (now[1] + 1 <= targetCol && maps[now[0]][now[1] + 1] === 1) { // right
      queue.push([now[0], now[1] + 1, now[2] + 1]);
      maps[now[0]][now[1] + 1] = 0;
    }
    if (now[0] - 1 >= 0 && maps[now[0] - 1][now[1]] === 1) { // up
      queue.push([now[0] - 1, now[1], now[2] + 1]);
      maps[now[0] - 1][now[1]] = 0;
    }
    if (now[1] - 1 >= 0 && maps[now[0]][now[1] - 1] === 1) { // left
      queue.push([now[0], now[1] - 1, now[2] + 1]);
      maps[now[0]][now[1] - 1] = 0;
    }
  }
  return -1;
}