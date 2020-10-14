const members = require('./member');
const OB = members.filter((mem) => mem.status === 'OB');
const YB = members.filter((mem) => mem.status === 'YB');

const suffle = (memberArr) => {
    for (let i = memberArr.length - 1; i > 0; i--) {
      // 정수 랜덤 값을 생성
      const j = Math.floor(Math.random() * (i + 1));
      // i요소, j요소를 서로 뒤바꾸는 작업
      [memberArr[i], memberArr[j]] = [memberArr[j], memberArr[i]];
    }
    return memberArr;
  };

const suffledOB = suffle(OB);
//console.log(suffledOB);
let num = suffledOB.map((member) => member);
console.log(num);