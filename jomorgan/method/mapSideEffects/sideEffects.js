// mapSpread 폴더의 입양견 예제 코드에서는 사용자가 필터링 조건을 설정했는데, 아마 필터링 조건의 
//기본값도 필요할 것이다. 사용자가 명시적으로 설정하지 않은 조건에 대해서는 기본값을 적용하고, 추가로 사용자가 적용하는 필터링 조건은 기본값을 덮어 쓴다.

const defaults = new Map()
    .set('색상', '갈색')
    .set('견종', '비글')
    .set('지역', '캔자스');

const filters = new Map()
    .set('색상', '검정색');

//필터링 조건을 담은 컬렉션을 새로 생성하려면 어떻게 해야 하나?

function applyDefaults(map, defaults){
    for( const [key, value] of defaults){
        if(!map.has(key)){
            map.set(key,value);
        }
    }
}

// 위 함수 방법은 사용자 filter 객체를 조작하게 된다. 조작하면 좋지 않다. 또한 사용자가 선택하지 않은 기본값도 모두 노출된다..!

// 본 객체를 조작하지 말고 사본을 만들자.

function applyDefaultsWithCopy(map, defaults)
{
    const copy = new Map([...map]);
    for(const [key, value] of defaults){
        if(!copy.has(key)){
            copy.set(key,value);
        }
    }
    return copy;
}

// 키의 존재 여부를 일일이 확인하고 있는데, map은 하나의 키를 한 번만 사용할 수 있다. 새로운 키로 맵을 생성하면, 어떤 값이든 해당 키에 마지막으로 선언한 값을 사용

function applyDefaultsWithMapProperty(map, defaults){
    return new Map([...map,...defaults]);
}