/*매개 변수 기본값이 좋은 기능을 하지만, 순서를 항상 지켜야 하는 단점이 있다. 매개 변수를 건너뛰고 싶을 때도 있는법
  추가 인수를 객체에 담아 함수의 마지막 매개변수로 전달한다.
  여러 장의 사진을 전달해 값을 HTML 문자열로 변환하려면 어떻게 할까? 
  이미지, 제목, 촬영한 사람, 위치를 순서대로 보여주고 싶고, 또 추가 정보도 있다. 
  사진에 따라 촬영 장비, 이미지 형식, 렌즈 정보 등 개별적인 정보가 담길 수 있다. 어쨌든 입력된 정보를 모두 노출해야 한다.
  이런 정보를 개별 매개변수로 전달하는 것은 적절하지 않다. 
  */

  const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
    location: [32.7122222, -103.1405556],
  };
//사진에 담을 정보들.. 사진에 대한 정보를 함수에 전달한 뒤, photo.title과 같이 정보를 가져올 수 있고, 또는 넘겨받은 정보를 변수에 할당해 사용할 수도 있다.
//미리 알수 있는 값을 받아서 처리하는것은 어렵지 않다. 정말 어려운 문제는 미리 알수 없는 과도한 양의 정보를 다루는 것.
//과도한 정보를 다루는 유일한 방법은 다른 곳에서 사용할 키-값 쌍은 제거하고 남은 값을 유지하는 것 뿐이다. 
//객체를 조작하기 전에 객체를 복사해야 한다. 그리고 키를 하나씩 삭제하면 된다. 

function displayPhoto(photo) {
    const title = photo.title;
    const photographer = photo.photographer || 'Anonymous';
    const location = photo.location;
    const url = photo.src;
  
    const copy = { ...photo };
    delete copy.title;
    delete copy.photographer;
    delete copy.location;
    delete copy.src;
  
    const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);
  
    return (`
      <img alt="Photo of ${title} by ${photographer}" src="${url}" />
      <div>${title}</div>
      <div>${photographer}</div>
      <div>Latitude: ${location[0]} </div>
      <div>Longitude: ${location[1]} </div>
      <div>${additional.join(' <br/> ')}</div>
    `);
  }

  //위 코드는 객체에서 값을 가져오는데 코드를 엄청 쓰고 있다. 그러나 자바스크립트에서는 해체 할당이라는 과정을 통해 객체에 있는 정보를 곧바로 변수에 할당할 수 있다.
  
  const landscape = {
      photographer = 'Nathan',
  };

 // const {photographer} = landscape;
  //값을 할당하는 변수의 이름은 객체의 키와 반드시 일치해야 한다. 중괄호는 변수에 할당되는 값이 객체에 있다는 것을 나타낸다.

  const landscape = {};
  const {photographer = 'Anonymous', title} = landscape;
  //객체에 키가 존재하지 않을 경우, 기본값을 설정하거나, 그렇지 않으면 undefined가 할당된다.
  //photographer: Anonymous, title = undefined.
  console.log(photographer, title);

  //근데 키 이름을 모를땐,, ...(나머지 매개변수)를 사용하면 된다. 

  const landscape = {
      photographer: 'Nathan',
      equipment : 'Canon',
      format: 'digital',
  };

  const {
      photographer,
      ...additional
  } = landscape;

  //additional에는 객체에 남아있는 키-값 쌍을 모아놓은 객체가 들어간다.
  //additional ; {equipment : 'Canon', format : 'digital'}
  //변수 이름을 바꾸고 싶으면

  const landscape = {
      src : '/landscape-nm.jpg',
  };

  const { src : url } = landscape;

  //src : 참조 오류, url  = '/landscape-nm.jpg'

  //또한 배열에도 해체 할당을 사용할 수 있는데, 배열에는 키가 없기 때문에 변수 이름을 마음대로 정할 수 있지만, 배열에 담긴 순서대로 할당해야 한다.

  const landscape ={
      location : [32.7122222, -103.140556],
  };

  const {location} = landscape;
  const [Latitude, Longitude] = location; 

  // 한 줄로 줄이면

  const {location : [Latitude, Longitude]} = landscape;

  //최종적인 코드

  function displayPhoto(photo) {
    const {
      title,
      photographer = 'Anonymous',
      location: [latitude, longitude],
      src: url,
      ...other
    } = photo;
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
      <img alt="Photo of ${title} by ${photographer}" src="${url}" />
      <div>${title}</div>
      <div>${photographer}</div>
      <div>Latitude: ${latitude} </div>
      <div>Longitude: ${longitude} </div>
      <div>${additional.join(' <br/> ')}</div>
    `);
  }

  //매개변수 정리와 해체 할당이 무슨 연관이 있느냐??

  function displayPhoto({
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...other
  }) {
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
      <img alt="Photo of ${title} by ${photographer}" src="${url}" />
      <div>${title}</div>
      <div>${photographer}</div>
      <div>Latitude: ${latitude} </div>
      <div>Longitude: ${longitude} </div>
      <div>${additional.join(' <br/> ')}</div>
    `);
  }

  //해체 할당을 매개변수에 사용하면, 변수를 사용하지 않아도 마치 정보를 함수 몸체에서 할당한 것처럼 작동한다.
  //또한 let으로 변수를 할당하기 떄문에 변수를 재할당할 수도 있다. 