const filters = {
    색상 : '검정색',
    견종 : '리트리버',
};

function getappliedfilters(filters){
    const keys = Object.keys(filters);
    const applied  = [];
    for(const key of keys){
        applied.push(`${key} : ${filters[key]}`);
    }
    return `선택한 조건은 ${applied.join(',')} 입니다.`;
}
//------------------------------------------------------------Object.keys()는 객체의 ennumerable 속성을 배열로 반환한다.
console.log(getappliedfilters(filters));

//---------------------------------------------객체에서 보장되지 않는다? 객체를 정렬할 수 없다. -----------------keys.sort() 추가

const filters2 = new Map()
    .set('색상', '검정색')
    .set('견종', '리트리버');
//각 항목이 키-값 쌍으로 이루어진 컬렉션
function checkFilters(filters){
    for(const entry of filters){
        console.log(entry);
    }
}

checkFilters(filters2);

//-------------------------------------------Map 객체인 filters2에서, 이터레이터는 키-값 쌍을 넘겨준다. 키-값 쌍을 배열로 넘겨줬다. 

console.log(filters2.entries());

//--------------Map 객체의 메서드인 entries()는 맵이터레이터를 반환한다. *** 중요 *** 맵을 순회할 때 키와 값을 쌍으로 받아서 사용한다.

function getAppliedFilters(filters){
    const applied2 = [];
    for(const [key, value] of filters){
        applied2.push(`${key}:${value}`);
    }
    return `선택한 조건은 ${applied2.join(', ')} 입니다.`
}

console.log(getAppliedFilters(filters2));

// ------------------------------------------------맵을 순회할 때 키-값 쌍으로 순회한다.  //TIP 29 참조.

console.log(...filters2);
console.log([...filters2]);
//----------------------------------------------------...펼침 연산자를 사용하면, map에서는 키 값 쌍을 반환함.

function sortByKey(a,b){
    return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters){
    const applied3 = [];
    for(const [key, value] of [...filters].sort(sortByKey)){
        applied3.push(`${key} : ${value}`);
    }
    return `선택한 조건은 ${applied3} 입니다.`
}

console.log(getSortedAppliedFilters(filters2));

// -----------------------------------------map은 첫번 째 항목을 첫 번째로 받지만, 정렬 메소드가 없다. 그래서 map을 펼침 연사자로 펼치고 sort해준다.

function getAppliedFiltersWithMap(filters){
    const applied4 = [...filters] //map을 펼침 연산자에 []을 붙여 배열로 전환.키값 쌍 배열이 됨.
    .sort(sortByKey) //sort함수로 정렬. 키값을 기준으로 정렬 = a[0]>b[0]
    .map(([key, value]) => {  //map함수로 문자열로 변경
        return `${key} : ${value}`; //템플릿 리터럴로 문자열을 반환하라!
    })
    .join(', ');  

    return `선택한 조건은 ${applied4} 입니다.`
}

console.log(getAppliedFiltersWithMap(filters2));


//----------------------------------------------------------------------.map 메소드?!!

const band = [
    {
        name: 'corbett',
        instrument : 'guitar',
    },
    {
        name: 'evan',
        instrument : 'guitar',
    },
    {
        name: 'sean',
        instrument:'bass',
    },
    {
        name:'brett',
        instrument:'drums',
    },
]; //객체가 담긴 배열.


const instruments = []; //악기만 담을 배열 생성
for(let i=0; i<band.length; i++){
    const instrument = band[i].instrument;
    instruments.push(instrument); //push 메서드로 배열에 삽입
}
//악기만 모음.

function getInstrument(member){
    return member.instrument;
}
//별도의 함수를 작성해서 위의 for문을 줄일 수 잇음. 이 함수를 이용하면 간단해짐

for(let i=0; i<band.length; i++){
    instruments.push(getInstrument(band[i]));
}


//map 함수를 이용하면 이런 게 다 필요없어진다. map 함수가 위의 과정을 다 해줌.

const instruments = band.map(getInstrument);
//['guitar', 'guitar', ....] 가 나온다. 

const instruments = band.map(member => member.instrument);
//getinstrument 함수를 익명함수인 화살표 함수로 대체!

// --------------------------------------------map은 배열에 있는 한 가지 속성을 반환하거나 배열에 있는 값을 갖와서 다른 형식의 값을 반환한다.
// 모든 값을 대문자로 변형하거나 배열에 있는 값을 가져와서 다른 형식의 값을 반환한다.
// map() 메서드 내부에 값을 담을 배열이 준비되어 있다. 그리고 push로 정보를 옮기는 작업도 필요없다. map 메서드는 맵 함수의 실행 결과를 반환될 배열에 추가한다.
// map() 메서드를 사용하기 위해 필요한 것은 원본 배열의 각 항목을 인수로 받아 새롭게 생성될 배열에 담길 값을 반환하는 함수를 만드는 것이다. 





//------------------------------복습  map 함수는 내부적으로 어떤 동작을 하는지 함수로 나타내면..

const dogs = [];
function getDogsname(dog){
    return dog.name;
}
for(const i=0;  i<dogs.length; i++){
    dogs.push(getDogsname(dogs[i]));
}
return dogs;


//이 일련의 작업들을 map함수가 대신한다. map()의 인자로는 어떻게 map할 것인가 하는 함수만 넣어주면된다. map(member => member.name)