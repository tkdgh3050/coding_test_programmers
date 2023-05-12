`
2019 KAKAO BLIND RECRUITMENT > 후보키
https://school.programmers.co.kr/learn/courses/30/lessons/42890
`
function solution(relation) {
  const cols = Array(relation[0].length).fill(0).map((_,i) => i);
  let cases = [];
  for (let i = 1; i <= cols.length; i++) {
      cases.push(...getCombinations(cols, i)); // 전체 케이스 뽑고
  }
  cases = checkUnique(relation, cases); // 유일성 지켜지는 케이스 뽑고
  cases = checkMinimum(cases); // 최소성 지켜주는 케이스 뽑기
  return cases.length;
}

const getCombinations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, num - 1);
      const attached = combinations.map(v => [fixed, ...v]);
      results.push(...attached);
  });

  return results;
}

const checkUnique = (relation, cases) => { // cases 별로 가능한 것만 모아서 리턴
  const res = [];
  for (c of cases) {
      const cSet = new Set();
      for (r of relation) {
          let word = r.filter((v,i) => c.includes(i)).join('');
          if (cSet.has(word)) break;
          cSet.add(word);
      }
      if (cSet.size === relation.length) res.push(c);
  }
  return res;
}

const checkMinimum = (cases) => { // 가능한 것만 모아서 리턴
  const res = [];
  const available = Array(cases.length).fill(true);
  let idx = 0;
  while (available.some(v => v === true)) {
      idx = available.findIndex(v => v === true);
      available[idx] = false;
      res.push(cases[idx]);
      for (let i = 1; i < cases.length; i++) {
          if (!available[i]) continue;
          if (cases[idx].join('') === cases[i].filter(v => cases[idx].includes(v)).join('')) {
              available[i] = false;
          }
      }
  }
  return res;
}