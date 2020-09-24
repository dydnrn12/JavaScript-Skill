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

// return 없이도 할 수 있다.

const discounter = discount => price => {return price*(1-discount)};

//함수 호출 시 

discounter(0.1)(100); 
//이렇게도 가능하다. 

//화살표 함수로 문맥 혼동을 피하는 법
//함수의 유효 범위와 문맥은 가장 어려운 개념. 유효 범위 = 함수가 접근할 수 있는 변수, 문맥은 함수 또는 클래스에서 this 키워드가 참조하는 것.
//******** 유효 범위는 함수와 연관되어 있고, 문맥은 객체와 연관되어 있다. *************
const validator = {
    message = '는 유효하지 않습니다.',
    setInvalidMessage(field) {
        return `${field}${this.message}`;
    },
};

validator.setInvalidMessage('도시');
// this.message는 객체의 속성을 참조할 수 있다. setInvalidMessage() 메서드가 호출될 때 함수에서 this 바인딩을 생성하며 해당 함수가 담긴 객체도 문맥에 포함시키기 때문.

const validator ={
    message = '는 유효하지 않습니다.',
    setInvalidMessage(...fields){
        return fields.map(function(field){
            return `${field}${this.message}`;
        });
    },
};

validator.setInvalidMessage('도시');
//함수를 호출할 때마다 호출되는 위치를 바탕으로 this바인딩을 만든다. map()메서드에 콜백 함수로 전달한 경우에는, map() 메서드의 문맥에서 호출되므로
//이 경우에는 this 바인딩이 validator 객체가 아니다. 전역 객체가 된다.

const validator ={
    message = '는 유효하지 않습니다.',
    setInvalidMessage(...fields){
        return fields.map(field => {
            return `${field}${this.message}`;
        });
    }
}
validator.setInvalidMessage('도시');
//화살표 함수는 함수를 호출할 때 this 바인딩을 새로 만들지 않는다. 정상 작동

const validator ={
    message : '는 유효하지 않습니다.',
    setInvalidMessage : field => `${field}${this.message}`,
};

validator.setInvalidMessage('도시');
//현재 객체에 대해 새로운 this 문맥 바인딩을 만들지 않았다. 새로운 문맥을 만들지 않았기 때문에, 전역 객체에 바인딩 된 것.