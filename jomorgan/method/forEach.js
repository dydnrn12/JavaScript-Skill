const sailingClub = [
    'yi hong',
    'andy',
    'darcy',
    'jessi',
    'alex',
    'nathan',
];

//회원들에게 이메일 보내기

for(let i=0; i < sailingClub.length; i++){
    sendEmail(sailingClub[i]);
}

//for 문으로 간단하게 이메일을 보낼 수 있지만, 다른 배열 메서드들과 연계할 수 있고, 예측 가능한 for-each를 쓰는것도 좋다.

const names = ['walter', 'white'];
const capitalized = names.forEach(name => name.toUpperCase());
//forEach 를 사용해도 아무런 결과도 반환되지 않는다!
capitalized; //undefined

const names = ['walter', 'white'];
let capitalized = [];
names.forEach(name => capitalized.push(name.toUpperCase()));

//이렇게 해도 되지만 map으로 전부 다 할 수 있다.
//함수 유효 범위를 벗어나는 부수 효과가 필요할 때에 for-each를 사용해주면 좋다.

sailingClub.forEach(member => sendEmail(member));
//약간의 예측 가능성을 얻을 수 있다. forEach를 사용하면 약간의 부수효과가 있다는 것을 알 수 있다. 또한 다른 배열 메서드와 결합할 수 있다.