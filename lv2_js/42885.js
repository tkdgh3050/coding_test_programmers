`
구명보트
https://school.programmers.co.kr/learn/courses/30/lessons/42885
`
function solution(people, limit) {
  people.sort((a, b) => b - a); //가장 무거운 사람은 끝에 있는 가벼운 사람과 짝지었을 때 제한을 넘기지 않는 다면 같이 끼워서 보내면 됨
  let leftIdx = 0;
  while (leftIdx < people.length - 1) {
    if (people[leftIdx] + people[people.length - 1] <= limit) people.pop(); //가장 무거운 사람과 맨 끝에 있는 가장 가벼운 사람의 합이 제한을 안넘으면 같이 보내면 되므로 맨 끝 사람 pop
    leftIdx += 1;
  }
  return people.length;
}