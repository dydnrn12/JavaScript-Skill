/*const prices = ['1.0' , '2.15'];

const formattedPrices = [];
for(let i=0; i < prices.length; i++){
    formattedPrices.push(parseFloat(prices[i]));
}

//숫자로 변환할 수 있는 값만 필요로 하는데, 숫자 형식이 아닌 문자열이 있다면
const prices = ['1.0' , 'nighting', '2.15'];
const formattedPrices = [];
for(let i=0; i < prices.length; i++){
    const price = parseFloat(prices[i]);
    if(price){
        formattedPrices.push(parseFloat(prices[i]));
    }
}

//---------------너무 어수선하다..
// 사용할 수 있는 배열 메서드 : map(), sort(), filter(), find(), forEach() 등등... 

const prices = ['1.0' , '2.15'];
const formattedPrices = prices.map(price => parseFloat(price));

//---false 값을 제거해야하는 복잡한 for문은 어떻게?? ---------배열 메서드는 연결해서 사용할 수 있다. 한 가지 배열 메서드를 호출하고 반환된 결과는 이어지는 배열 메서드로 전달
const prices = ['1.0' , '2.15'];
const formattedPrices = prices.map(price => parseFloat(price))
.filter(price => price);
*/

//-----------------------------------------------

const team  = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M',
];

console.log('Dave and David and Davis'.match(/Dav/));
console.log('Michelle'.match(/Dav/));

const daves = [];
for(let i=0; i<team.length; i++){
    if(team[i].match(/Dav/)){
        daves.push(team[i]);
    }
}

//-------------------------for문과 match를 이용해서 하는 방법 ---------------------우아하지 않음

//----------------filter!! filter 함수에 전달하는 함수는 반드시 참 값을 반환해야 한다. 배열의 각 항목을 순회할 때, 참 값을 반환하면 그 값은 유지된다. 
// 참 값을 반환하지 않으면 그 값은 새로운 배열에 담기지 않는다. 


const scores  = [30, 82, 70, 45];
function getNumberOfPassingScores(scores){
    const passing = scores.filter(score => score>59);
    return passing.length;
    //2
}


//--- 또한 filter 메소드는 조건에 일치하는 값이 없는 경우에도 배열을 반환한다. 

function getPerfectScores(scores){
    const perfect = scores.filter(score => score === 100);
    return perfect.length;
    // 0
}


//-----------------------filter 대신 참 값을 반환하는 첫 번째 항목만 반환하는 find 함수도 있다. ID 같은 하나만 존재하는 항목을 찾을 때 유용하다.

const instructors = [
    {
        name: '짐',
        libraries: ['미디어교육정보 도서관'],
    },
    {
        name: '새라',
        libraries: ['기념 도서관', '문헌정보학 도서관'],
    },
    {
        name: '엘리엇',
        libraries: ['중앙 도서관'],
    },
];

let memorialInstructor;
for(let i=0; i<instructors.length; i++){
    if(instructors[i].libraries.includes('기념 도서관')){
        memorialInstructor = instructors[i].name;
    }
}
// ----------find 함수를 이용하면
const librarian = instructors.find(instructor => {instructor.libraries.includes('기념 도서관');});

// 만약 조건에 맞는 항목이 없으면 filter는 빈 배열을 반환하지만 find 는 undefined 를 반환한다. 


// 이 단점을 보완하기 위해 단락평가를 이용한다.???

const images = [
    {
        path : './me.jpg',
        profile : false,
    }
];

const profile = images.find(image => image.profile) || {
    path : './default.jpg'
};

//find 함수가 undefined 를 반환하면 

 const findByLibrary = library => instructor => {
     return instructor.libraries.includes(library);
 };

 const librarian = instructors.find(findByLibrary('미디어교육정보 도서관'));

 //------------------------------------------------------------------TIP 34 공부할 때 다시와서 보기!