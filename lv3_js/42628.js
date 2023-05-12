`
이중우선순위큐
https://school.programmers.co.kr/learn/courses/30/lessons/42628
`
function solution(operations) {
  /*
  queue = []
  switch (op)
  case 'D 1':
      if (queue.length === 0) continue;
      queue.sort(오름차순)
      queue.pop
  case 'D -1':
      if (queue.length === 0) continue;
      queue.sort(내림차순)
      queue.pop
  else:
      queue.push(op.split('| ')[1])
  if  length 0 return [0,0]
  queue.sort(내림차순)
  return [queue[0], queue[queue.length]]
  */
  const q = [];
  for (let op of operations) {
    switch (op) {
      case 'D 1':
        if (q.length === 0) break;
        q.sort((a, b) => a - b);
        q.pop();
        break;
      case 'D -1':
        if (q.length === 0) break;
        q.sort((a, b) => b - a);
        q.pop();
        break;
      default:
        q.push(parseInt(op.split('I ')[1]));
    }
  }
  if (q.length === 0) return [0, 0];
  q.sort((a, b) => b - a);
  return [q[0], q[q.length - 1]];
}