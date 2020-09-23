const icon = {
    path : 'acme/bar.png'
}

function getIconPath(icon) {
    const path = icon.path ? icon.path : 'uploads/default.png';
    return `https://assets.foo.com/${path}`;
}

getIconPath(icon);

//------------------------------------|| 연산자의 특징  -------하나라도 true를 반환하면 나머지들은 확인하지 않음.

const name = 'joe' || 'i have no name';
//name; 
//joe ------------||를 이용해서 삼항 연산자를 대체해보자.

function getIconPath(icon){
    const path = icon.path || 'uploads/dafault.png';
    return `https://assets.foo.com/${path}`;
}


// ---------------------사용자로부터 이미지 세트를 받을 때.

const userConfig1 = {
}

const userConfig2 = {
    images : []
}

const userConfig3 = {
    images : [
        'me.png',
        'work.png'
    ]
}
console.log(userConfig3.images[0]);
//userConfig1 과 userConfig2 와 같이 객체의 속성이나 배열의 속성이 비어있을 경우 제대로 작동하지 않는다. 이 모두를 아우를 수 있는 코드는

function getImage(userConfig){
    let img = 'default.png';
    if(userConfig.images){
        if(userConfig.images.length){
            img = userConfig.images[0];
        }
    }
    return img;
}

// ----------그러나 조금 조잡하다.


function getImage(userConfig){
    if(userConfig.images && userConfig.images.length>0){
        return userConfig.images[0];
    }
    return 'default.png';
}

// 또다른 방법

function getImage(userConfig){
    const images = userConfig.images;
    return images && images.length > 0 ? images[0] : 'default.png';
}

// ----gif 파일을 받지 않으려고 할 때에는??

function getImage(userConfig){
    const images = userConfig.images;
    return images &&
                images.length &&
                images[0].indexof('gif') < 0
        ? images[0] : 'default.png';
}