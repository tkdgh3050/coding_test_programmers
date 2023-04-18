`
2020 KAKAO BLIND RECRUITMENT > 괄호 변환
https://school.programmers.co.kr/learn/courses/30/lessons/60058
`
function solution(p) {
  const isRight = (str) => {
    const stack = [];
    for (let chr of str) {
      if (chr === '(') {
        stack.push(chr);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] === ')') return false;
        stack.pop();
      }
    }
    return stack.length === 0 ? true : false;
  }
  const getRight = (w) => {
    if (w.length === 0) return '';
    const firstVal = w[0];
    let sameCnt = 1;
    let diffCnt = 0;
    for (let i = 1; i < w.length; i++) {
      if (sameCnt === diffCnt) break;
      w[i] === firstVal ? sameCnt++ : diffCnt++;
    }
    const u = w.slice(0, sameCnt + diffCnt);
    const v = w.slice(sameCnt + diffCnt);
    if (isRight(u)) {
      return u + getRight(v);
    } else {
      if (u.length < 3) {
        return '(' + getRight(v) + ')';
      } else {
        const reverse = Array.from(u.substring(1, u.length - 1)).map(v => v === '(' ? ')' : '(').join('');
        return '(' + getRight(v) + ')' + reverse;
      }
    }

  }
  return isRight(p) ? p : getRight(p);
}