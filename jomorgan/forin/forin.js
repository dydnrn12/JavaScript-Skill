//객체를 배열 메서드로 다루는 경우 Object.keys() 를 사용해 키 배열을 만들어 배열 메서드 사용
//펼침 연산자를 사용하면 맵을 키 -값 쌍이 담긴 배열로 변환할 수 있다.

const firms = new Map()
    .set(10, 'Ivie Group')
    .set(23, 'Soundscaping Source')
    .set(31, 'Big 6');

console.log([...firms.keys()]);

/*const entries = [...firms];
for(let i=0; i< entries.length; i++){
    const [id, name] = entries[i];
    if(!isAvailable(id)){
        return `${name}은 사용할 수 없습니다.`;
    }
}

function message(){
    const unavailable = [...firms].find(firm => {
        const [id, name] = firm;
        return !isAvailable(id);
    });
    if(unavailable){
        return `${unavailable[1]}는 사용할 수 없습니다.`;
    }
    return 'All firms are available';    
}

const message = [...firms].reduce((availability, firm) => {
    const [id, name] = firm;
    if(!isAvailable(id)){
        return `${name}는 사용할 수 없습니다.`;
    }
    return availability;
}, '모든 회사를 사용할 수 있습니다')
return message;*/

for(const firm of firms){
    const [id,name] = firm;
    if(!isAvailable(id)){
        return `${name}는 사용할 수 없습니다.`
    }
}

//for...of 문은 색인 대신 컬렉션 멤버를 직접 순회한다.
//for...in 문은 객체의 속성을 순회한다. 그러나 객체의 속성은 문제가 많다. 상속받기도 하고, 열거할 수 없는 속성도 있다.

