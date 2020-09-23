function applyCustomGreeting(name, callback){
    return callback(capitalize(name));
}

applyCustomGreeting('mark',function(name){
    return `안녕, ${name}!`;
})

//---------------------익명 함수로 callback 함수 전달.

applyCustomGreeting('mark', name => `안녕, ${name} !`);

// 더 간결하게 화살표 함수로 

//화살표 함수에서 인수를 해체 할당하는 방법, 객체를 반환하는 방법, 고차 함수를 만드는 방법을 배워보자.

const name = {
    first: 'Lemmy',
    last: 'Kilmister',
}

function getName({first, last}){
    return `${first} ${last}`;
}

//이것은 다음과 같다

const getName = ({first, last}) => `${first}, ${last}`;
//이러한 특별한 매개변수는 ()로 감싸줘야 하며, return 문을 쓰지 않을 때는 주의해야 한다. 또한 객체를 반환하는 경우에는 객체를 괄호로 감싸줘야 한다.

const getFullName = ({first, last}) => ( {fullName : `${first} ${last}`});
getFullName(name);

//고차 함수 = 다른 함수를 반환하는 함수

const discounter =  discount => {
    return price => {
        return price*(1-discount);
    };
};

const tenPercentOff = discounter(0.1);
tenPercentOff(100);

