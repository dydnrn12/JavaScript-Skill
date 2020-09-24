import {Coupon} from './constructor.mjs';

class FlashCoupon extends Coupon{
}

const flash = new FlashCoupon();
console.log(flash.price());
console.log(flash.expiration());