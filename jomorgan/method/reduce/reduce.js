const callback = function(collectedValues, item){
    return [...collectedValues, item];
};
//reduce 메서드의 콜백 함수
// 첫번 째 인자는 반환되는 항목과 개별 항목. 반환값은 콜백 함수가 반환하는 값을 누적한 것.
const saying = ['veni', 'vedi', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

console.log(copy)

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

// dogs 객체의 모든 key에 대해 고윳값을 분류하려면 어떻게 해야 하나? map 메서드를 여러번 실행하고, set에 값을 전달할 수 있지만 reduce()를 사용해도 된다.

const UniqueKeys = dogs.reduce((filters, item) => {
    filters.breed.add(item.견종);
    filters.size.add(item.크기);
    filters.color.add(item.색상);
    return filters;
}, {
    breed: new Set(),
    size: new Set(),
    color: new Set()
});

console.log(UniqueKeys);

const developers = [
    {
        name : 'jeff',
        language : 'php',
    },
    {
        name : 'Ashley',
        language : 'python',
    },
    {
        name : 'Sara',
        language : 'python',
    },
    {
        name : 'Joe',
        language : 'javascript',
    },
];

const aggregated = developers.reduce((specialities, developer) => {
    const count = specialities[developer.language] || 0;
    return {
        ...specialities,
        [developer.language] : count + 1,
    }
}, {});

console.log(aggregated);

const aggregated1 = developers.reduce((specialities, developer) => {
    let count=0;
    if(!specialities.has(developer.language)){
        specialities.set(developer.language, count++);
    }else{
        specialities[developer.language]++;
    }
    return specialities;
        
}, new Map());

//