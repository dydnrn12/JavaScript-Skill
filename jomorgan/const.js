function getLowestPrice(item){
    const count = item.inventory;
    let price = item.price;

    if(item.salePrice){
        const saleCount = item.saleInventory;
        if(saleCount > 0){
            price = item.salePrice;
        }
    }
    if(count){
        return price;
    }
    return 0;
}

const item = {
    inventory : 3,
    price : 3,
    salePrice : 2,
    saleInventory : 0,
};
// 재고가 없으면 0을 반환
// 어떤 상품이 할인 중이고 재고가 있다면 할인 가격을 반환
// 어떤 상품이 할인 중이 아니거나 할인 중이라도 할인 상품의 재고가 없다면 정상 가격을 반환.

console.log(getLowestPrice(item));