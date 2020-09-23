const sailors = [
    {
        name : 'yi hong',
        active : true,
        email : 'yh@yhproductions.io', 
    },
    {
        name : 'alex',
        active : true,
        email : '', 
    },
    {
        name : 'nathan',
        active : false,
        email : '', 
    },
];

//active가 true인 것만 뽑고, 이메일을 정규화 한 다음, 문자 메시지 보내기를 따로 해보고 chaing 해봅시다~

const activeSailor = sailors.filter(member => member.active === true);
const SailorEmail = sailors.map(member => member.email || `${member.name}@wiscsail.io`);
SailorEmail.forEach(member => sendEail(member.email));

//이것을 체이닝 한다면??!

sailors
    .filter(sailor => sailor.active)
    .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
    .forEach(sailor => sendEail(sailor));

// 코드를 한눈에 이해하기 쉽다!!! 그러나 for 문 보다 반복이 많다.

