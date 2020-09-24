//고차함수는 다른 함수를 반환하는 함수다. 즉, 함수 실행이 완전히 끝날 때까지 최소한 두 단계에 걸친 매개변수가 존재한다. 

const building = {
    hours : '8 a.m. - 8 p.m',
    address : 'Jayhawk Blvd',
};

const manager ={
    name : 'Augusto',
    phone : '555-555-5555',
};

const program = {
    name : 'Presenting Research',
    room : '415',
    hours : '3--6',
};

const exhibit = {
    name : 'Emerging Scholarship',
    contact : 'Dyan',
};

//건물, 매니저, 프로그램 또는 전시회라는 세 가지 인수를 받아서 하나의 정보 집합으로 결합하는 간단한 함수를 작성하라.

function mergeProgramInformation(building, manager, event){
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours,
        address,
        contact : name,
        phone,
    };

    return {...defaults, ...event};
}

const programInfo = mergeProgramInformation(building, manager, program);
const programInfo = mergeProgramInformation(building, manager, exhibit);

// building, manager 와 뒤의 event는 분리될 수 있다.
function mergeProgramInformation(building, manager){
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours,
        address,
        contact : name,
        phone,
    };

    return event => ({...defaults, ...event});
}
//이렇게 함수를 작성하고 호출하면,

const programInfo = mergeProgramInformation(building, manager)(exhibit);
const programInfo = mergeProgramInformation(building, manager)(program);

//이렇게 호출이 가능하며, 두 매개변수는 독립
//매개변수에 단일 책임을 부여하기는 했지만, 반복까지 제거되지는 않았다.
//또한 매개변수에 단일 책임을 부여하게 되면, 나머지 매개변수를 재사용 할 수 있다.
//원본 데이터에 일대일로 대응되는 추가 데이터가 있는 경우 자주 발생한다. 

const birds = getbirds('kansas', 'wisconsin', 'newMexico');
//지역 이름이 담긴 배열을 받아서 새 이름을 반환하는 함수가 있는 경우, 결과 배열은 괜찮아 보이지만 결과적으로는 원본과 결과값을 배열 쌍으로 연결해야 한다.

const zip = (...left) => (...right) => {
    return left.map((item, i) => [item, right[i]]);
};

zip('kansas','wisocnsin', 'new mexico')(...birds);


//고차함수를 이용하면 함수 호출의 값을 변수에 할당해서, 계속해서 사용할 수 있는 함수를 반환받아서 사용할 수 있다.
//고차 함수 이용
const setStrongHallProgram = mergeProgramInformation(building, manager);
const programInfo = setStrongHallProgram(program);
const exhibitInfo = setStrongHallProgram(exhibit);

//인수를 하드코딩 해놓는 방식
const setStrongHallProgram = program => {
    const defaults = {
        hours : '8 a.m. - 8 p.m',
        address : 'Jayhawk Blvd',
        name : 'Augusto',
        phone : '555-555-5555'
    }
    return {...defaults, ...program}
}

//고차 함수를 이용할 경우, 매개변수를 별도로 분리할 수 있다. 그러나 그 전에 함수에 필요한 인수의 수를 줄일 수 있도록 인수를 분리하는게 더 중요하다.
//한 번에 인수를 하나만 받는 함수를 '커링'이라고 한다.

/*부분 적용 함수와 커링 함수는 모두 원래보다 필요한 인수의 수가 적은 함수를 반환해 인수 수를 줄인다. 
함수에는 함수가 받을 수 있는 전체 인수의 수가 있으며 항수라고 부른다. 부분 적용 함수는 원래의 함수보다 항수가 적은 함수를 반환한다.
반면 커링 함수는 여러개의 인수를 받는 함수에서 정확히 인수 하나만 받는 일련의 함수를 반환할 때 사용한다. 가령 인수 세 개가 필요한 함수가 있다면, 먼저 인수 하나를
받는 고차 함수가 다른 함수를 반환하고, 반환된 함수도 인수 하나를 받는다. 이 함수에서 끝으로 인수 하나를 받는 마지막 함수가 반환된다.
*/

const dogs = [
    {
        이름: '맥스',
        무게: 10,
        견종: '보스턴테리어',
        지역: '위스콘신',
        색상: '검정색',
    },
    {
        이름: '도니',
        무게: 90,
        견종: '레브라도레트리버',
        지역: '캔자스',
        색상: '검정색',
    },
    {
        이름: '섀도',
        무게: 40,
        크기: '중형견',
        견종: '레브라도레트리버',
        지역: '위스콘신',
        색상: '갈색'
    }
];

function getDogNmaes(dogs, filterFunc){
    return dogs
    .filter(filterFunc)
    .map(dog => dog['이름'])
}
//하드 코딩 방식
getDogNmaes(dogs, dog => dog['무게'] < 20);
//변수를 쓸 때, 직접 코딩해서 넣어주고 있지만, 부분 적용함수를 이용해서 필요한 값을 미리 담아두는 방식을 쓰자.

const weightCheck = weight => dog => dog['무게'] < weight;
getDogNmaes(dogs, weightCheck(20));
getDogNmaes(dogs, weightCheck(50));

//매개변수를 달리해서 작성 커링 사용

const identity = field => value => dog => dog[field] === value;

getDogNmaes(dogs,identity('색상')('갈색')); // ['섀도']
getDogNmaes(dogs,identity('지역')('캔자스')); //['섀도']

//모든 조건을 충족하는 강아지를 찾아야 한다면? 검사에 사용할 여러 개의 비교함수를 전달하고, 배열 매서드인 every()를 사용할 수 있다. 
//every 메서드는 모든 값이 true를 반환할 때 true를 반환한다.

function allFilters(dogs, ...checks){
    return dogs
    .filter(dog => checks.every(check => check(dog)))
    .map(dog => dog['이름']);
}

allFilters(dogs, colorCheck('검정색'), stateCheck('캔자스'));
//['도니']

function anyFilters(dogs, ...checks){
    return dogs
    .filter(dog => checks.some(check => check(dog)))
    .map(dog => dog['이름']);
}

anyFilters(dogs, weightCheck(20), colorCheck('갈색'));
//['맥스', '섀도']