//class와 prototype은 다르지 않은 개념이다! 클래스는 단지 간결한 방법일 뿐이다. 직관적인 인터페이스일 뿐이다.
//자바스크립트는 새로운 인스턴스를 생성할 때 메서드를 복제하지 않는다. 대신 프로토타입에 대한 연결을 생성한다. 
function Coupon(price, expriation){
    this.price = price;
    this.expriation = expriation || '2주';
}

const coupon = new Coupon(5, '2개월');
console.log(coupon.price);

Coupon.prototype.getExpirationMessage = function(){
    return `이 쿠폰은 ${this.expriation}후에 만료됩니다.`;
}
//이 과정을 class는 좀더 직관적이고 쉽게 해준다.

console.log(coupon.getExpirationMessage());


class FlashCoupon extends Coupon {
    constructor(price, expriation){
        super(price);
        this.expriation = expriation || '2주';
    }

    getExpirationMessage(){
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expriation} 후에 만료됩니다.`
    }
}

//우리가 작성한 클래스의 속성 중 노출할 생각이 없었던 것을 누군가 조작하려고 하는 경우 또는
//속성에 잘못된 자료형을 설정해 정수가 필요한 코드에 문자열을 넣어서 버그가 발생할 수 있음
//자바스크립트는 비공개 속성을 기본적으로 지원하지 않는다. 모든것이 접근 가능하게 드러나 있다.
//그래서 의도치 않게 코드의 다른 부분에 값을 설정하는 경우가 생길 수 있다. 예를들어 가격을 정수로 설정하지 않고 문자열을 사용한다면 어떻게 될까?

coupon.price = '$10';

//정상 작동하지 않는다.

/*해결책은 게터와 세터를 이용해서 로직을 추가하고 속성을 뒤로 숨기는 것이다.
//게터는 호출할때 괄호를 안써도 된다. 
//세터는 마지 속성을 설정하듯이 값을 넣어주면 된다.
게터와 세터를 세트로 사용해서 우리의 의도를 숨기고, 위의 문제를 해결한다.
게터와 세터는 이름이 같아야 하며, 속성과는 이름이 달라야 한다.
*/
class Coupon {
    constructor(price, expriation){
        this._price = price;
        this.expriation = expriation || '2주';
        }

    get priceText(){
        return `$ ${this._price}`;
    }
    get price(){
        return this._price;
    }
    set price(price){
        const newPrice = price.toString().replace(/[^\d]/g, '');
        this._price = parseInt(newPrice, 10);
    }
    get expirationMessage(){
        return `이 쿠폰은 ${this.expiration}후에 만료됩니다.`;
    }
}

const coupon = new Coupon(5);
coupon.price;
//5

coupon.price = '$10';
coupon.price;
//10

coupon.priceText;
//$ 10 
//정상 작동.

