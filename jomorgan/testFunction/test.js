//테스트 가능한 함수를 만들어라. 앱 버그가 준다.

import { getTaxInformation } from './taxService';

function formatPrice(user, { price, location }) {
  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';

  return `${user} your total is: ${price} ${taxes}`;
}

export { formatPrice };


//여기서 test하기 어려운 것은 getTaxInformation(location) 부분이다. formatPrice와 getTaxInformation이 밀접하게 연관되어있다. 또한 getTaxInformation이 외부 API에도 접근해야 한다면, 문제가 된다.

//해결책은 모의객체(mock)를 생성해서 함수를 가로채고 명시적인 반환값을 설정하게 만들어야 합니다.

//이 코드를 테스트하기 위해서는 getTaxInformation의 의존성을 해결해야 하는데, 함수의 인수로 받아오는 방법이 있다.


function formatPrice(user, { price, location }, getTaxInformation) {
  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';

  return `${user} your total is: ${price} ${taxes}`;
}

//이렇게 하면 테스트 작성이 쉬워진다.

import expect from 'expect';

import { formatPrice } from './test';

describe('format price', () => {
  it('should return plus tax if no tax info', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => null); //의존성 주입 부분.
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
  });
  //it 은 테스트 케이스를 만드는 함수.

  it('should return plus tax information', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => 0.1);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus $3 in taxes.');
  });
});

//describe 는 여러개의 테스트 케이스를 묶을 수 있다. 