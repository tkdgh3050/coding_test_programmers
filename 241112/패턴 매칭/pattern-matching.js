// 문자열 s가 패턴 p에 속하는지
// . : 어떤 단일 문자와도 일치
// * : 0개이상의 문자
// 뒤에 *이 있는지 확인
// 없으면 문자 제거 (. 인경우 한개 제거)

const fs = require('fs');
const [info, data] = fs.readFileSync(0).toString().trim().split('\n');

let s = info.trim().split('');
let p = data.trim().split('');

let answer = true;
while (s.length > 0 && p.length > 0) {
    if (p.length === 1) {
        if (p[0] !== '.' && s[0] !== p[0]) {
            answer = false;
            break;
        }
        s.shift();
        p.shift();
        break;
    }

    if (p[1] === '*') {
        if (p[0] === '.') {
            break;
        } else {
            while(s[0] === p[0]) {
                s.shift();
            }
            p.shift();
            p.shift();
        }
    } else if (p[0] === '.') {
        s.shift();
        p.shift();
    } else {
        if (s[0] !== p[0]) {
            answer = false;
            break;
        }
        s.shift();
        p.shift();
    }   
}

console.log(answer)