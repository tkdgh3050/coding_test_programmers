/**
 * lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587


 */

function solution(priorities, location) {
  let idx = location;
  let count = 0;

  while (priorities.length > 0) {
    const now = priorities.shift();
    const max = Math.max(...priorities);
    if (now < max) {
      priorities.push(now);
      idx === 0 ? (idx = priorities.length - 1) : (idx -= 1);
    } else {
      if (idx === 0) {
        return count + 1;
      }
      count += 1;
      idx -= 1;
    }
  }
  return count;
}
