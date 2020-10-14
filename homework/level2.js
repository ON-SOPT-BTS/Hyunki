const team = require('./members');
const sopt_members = team.sopt_members;

const returnMembers = function(obj) {
    console.log("팀원 정보 출력")
    for(var member of obj){
        const {name, location, age, hobby } = member
        //console.log(name);
        console.log(`이름 : ${name}\n거주지: ${location}\n나이: ${age}\n취미: ${hobby}\n\n`);
    }
}

returnMembers(sopt_members);