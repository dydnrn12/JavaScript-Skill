import {Coupon} from './constructor.mjs';

class FlashCoupon extends Coupon{
    constructor(price, expiration){
        super(price);
        this.expiration = expiration || '2시간';
    }

    getExpirationMessage(){
        return `이 쿠폰은 깜잒 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }
    isRewardsEligible(user){
        return super.isRewardsEligible(user) && this.price > 20;
    }
    getRewads(user){
        if(this.isRewardsEligible(user)){
            this.price = this.price * 0.8;
        }
    }

}

const flash = new FlashCoupon(10);


console.log(flash.price);
console.log(flash.getPriceText());