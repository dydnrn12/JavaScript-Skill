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
