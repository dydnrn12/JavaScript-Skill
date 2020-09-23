//객체 할당으로 여러 개의 매개변수를 하나의 인수로 결합,
//이제는 나머지 매개변수를 이용해 개수를 알 수 없는 다수의 매개변수를 전달.

function validateCharacterCount(max, items){
    return items.every(item => item.length < max);
}

//every 메서드는 filter와 비슷한데, 모든 항목에 대해서 콜백함수를 실행하고 모든 항목에서 참 값을 반환하면 결과적으로 true 반환.

validateCharacterCount(10, ['Hobbs', 'Eagles']);

//그러나 사용자에게 특정한 컬렉션 형식을 강제한다. 반드시 배열.. validateCharacterCount(10, 'wordr') 하면 오류.. 배열이 아닙니다.

function validateCharacterCount(max){
    const items = Array.prototype.slice.call(arguments,1);
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, 'wvoquie'));
//true

const tags = ['Hobbs', 'Eagles'];
validateCharacterCount(10,...tags);
//true

//하지만 arguments 객체를 다루는게 좀 난해하다. 함수 매개변수로 인수 목록을 받는다는 것도 알기 어려움. 몸체를 살펴봐야 알 수 있음..

//그렇기 떄문에 나머지 매개변수를 사용함.

function getArguments(...args){
    return args;
}
//...args 로 문자열들을 args에 펼쳐서 받는다. args는 전달되는 매개변수를 배열로 담는다.
console.log(getArguments('Bloomsday', 'Eagles'));

console.log(getArguments(...tags));

//함수를 호출할 때 항상 정보를 펼쳐 넣어야 한다.

['Spirited Away', 'Princess Mononoke'].map((film, ...other) =>{
    console.log(other);
    return film.toLowerCase;
});

//나머지 매개변수를 이용하면 다른 방법으로 확인하기 어려운 매개변수를 찾는 데 도움이 될 수 있다.

function applyChanges(...args){
    updateAccount(...args);
    closeModal();
}
//이런 방식으로도 사용 가능.

//배열의 첫번 쨰 항목을 반환 후 제거하고 싶다면??

const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
console.log(remaining);
//이렇게 가능..

//한가지 중요한 점은 나머지 매개변수는 마지막 인수에 사용해야