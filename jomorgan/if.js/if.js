/*const transactions = [...spending, ...income];
const balance = calculateBalence(transactions);

let color;
if(balance > 0){
    color = 'green';
} else{
    color = 'red';
}

너무 어수선하다. 삼항 연산자와 단락 평가를 이용해 조건문을 최대한 축약해서 변수에 할당하는 방법을 알아보자.

false, null, 0, NaN, ' ', " " 은 모두 거짓 값이다. 

객체와 배열은 비었더라도 항상 참이다. 그래서 객체와 배열이 비어있는지 확인하려면, [].length 또는 Object.keys({}).length 와 같은 방법을 사용해야 한다.
삼항 연산자 사용법,

if(active){
    var display = 'bold'
} else{
    var display = 'normal'
}

var display = active ? 'bold' : 'normal';


let permissions;
if(title === '과장'){
    permissions = ['근로시간', '수당'];
}
else
{
    permissions = ['근로시간'];
}

위 코드를 삼항연사자로 바꾸며냐

var permissions = title==='과장' ? ['근로시간', '수당'] : ['근로시간'];
*/
function getTimePermissions({title}){
    if(title === '과장'){
        return ['근로시간', '초과근무승인', '수당'];
    }
    if(title === '부장'){
        return ['근로시간', '초과근무승인'];
    }
    return ['근로시간'];
}

const permissions = getTimePermissions({title : '과장'});
console.log(permissions);