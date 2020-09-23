const landscape = {
    title = 'Landscape',
    photographer : 'Nathan',
    location : [32.7122222, -103.1405556],
};

//명세를 작성한 사람이 객체에 값을 다시 넣을 수 있는 방법 없이 객체를 분리할 수 있는 인터페이스만 만들어뒀다면, 그 인터페이스는 아무런 쓸모가 없을 것이다.

const region = {
    city : 'hobbs',
    country : 'Lea',
    state : {
        name : 'new Mexico',
        abbreviation : 'NM',
    },
};

/* landscape의 location 정보를 조회해서 region 정보를 조회할 수 있는 헬퍼 함수가 있다고 하자. 우리는 landscape 정보를 받아오고 location을 제외한 뒤, 해당 region
의 city와 state의 약어만 가지는 객체를 만들고 싶다.*/

function getCityandState({location, ...details}){
    const {city, state} = determineCityAndState(location);
    return{
        city,
        state : state.abbreviation,
        ...details,
    };
}

/*해체 할당으로 위치 정보를 담은 키-값 쌍을 할당할 때, location 이외의 모든 정보들을 details에 할당했다. 기존 방식이었다면 객체를 복사해 delete했겠지.

{
    title : 'Landscape',
    photographer : 'Nathan',
    city : 'Hobbs',
    state : "NM",
}

객체가 최종적으로 생성된다*/