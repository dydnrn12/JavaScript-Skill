//Coupon 클래스
//클래스를 선언할 때는 class 키워드를 사용한다. 그리고 새로운 인스턴스를 생성할 때는 new 키워드를 사용한다.

export class Coupon {
    constructor(price, expiration){
        this.price = price;
        this.expiration = expiration || '2주';
    }
    getPriceText(){
        return `${this.price}`;
    }
    getExpirationMessage(){
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
    isRewardsEligible(user){
        return user.rewardsEligible && user.active;
    }
    getRewads(user){
        if(this.isRewardsEligible(user)){
            this.price = this.price * 0.9;
        }
    }
}    

const coupon = new Coupon(5);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());
