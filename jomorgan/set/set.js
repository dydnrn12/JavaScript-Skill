const dogs = [
    {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴테리어',
        색상: '검정색',
    },
    {
        이름: '도니',
        크기: '대형견',
        견종: '레브라도레트리버',
        색상: '검정색',
    },
    {
        이름: '섀도',
        크기: '중형견',
        견종: '레브라도레트리버',
        색상: '갈색'
    }
];

//색상 조건 목록을 수집하려면?

function getColors(dogs){
    return dogs.map(dog => dog['색상']);
}

console.log(getColors(dogs));


// -----------------------------중복된 색상이 없어야 한다.

function getUnique(attributes){
    const unique = [];
    for(const attribute of attributes){
        if(!unique.includes(attribute)){
            unique.push(attribute);
        }
    }

    return unique;
}

const colors = getColors(dogs);
console.log(getUnique(colors));

// -------------------set 객체를 사용해서 고윳값만 분류해낼 수 있다. map은 키-값 배열을 받지만, set은 중첩하지 않은 배열을 인수로 받는다..?

const colors1 = ['검정색', '검정색', '갈색'];
const unique1 = new Set(colors1);
console.log(unique1);

// set가 아니라 배열이 필요하다

function getUnique1(attributes){
    return [...new Set(attributes)];
       
}

// add() : set에 값 추가, has() : set 요소 검증, delete(), clear()이 있다.

// set에 dogs 배열의 색상만 가져오기.

function getUniqueColors(dogs){
    const unique = new Set();
    for(const dog of dogs){
        unique.add(dog.색상);
    }
    return [...unique];
}