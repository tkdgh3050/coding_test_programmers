`
스킬트리
https://school.programmers.co.kr/learn/courses/30/lessons/49993
`
function solution(skill, skill_trees) {
  const MAX_IDX = 27;
  const idxArr = Array(skill_trees.length).fill(-1); // 스킬트리에서 현재 찾고있는 스킬이 어느 인덱스에 있는지 기록해두는 arr
  const result = Array(skill_trees.length).fill(true);  // 스킬트리가 가능한지 기록해두는 arr
  //skill 글자 하나씩 가져와서
  // 각 배열에서 인덱스를 가져와 기록해두고
  // 없는 경우 MAX 값 부여
  // 기록해둔 값 <= 이번값 경우 true 아닐경우 false
  for (let chr of skill) {
    for (let i = 0; i < skill_trees.length; i++) {
      if (!result[i]) continue; // 이미 불가능한 경우 계산이 불필요 하므로 스킵

      const treeIdx = skill_trees[i].indexOf(chr);
      if (treeIdx === -1) { // 글자가 없는 경우 최댓값을 부여해서 앞으로 나올 스킬이 존재할 경우 불가능하게 하기 위해 최대값 부여
        idxArr[i] = MAX_IDX;
        continue;
      }
      if (idxArr[i] <= treeIdx) {
        idxArr[i] = treeIdx;
      } else {
        result[i] = false;
      }
    }
  }
  return result.filter(v => v).length //true 인 값만 세줌
}