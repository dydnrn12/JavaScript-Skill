function getBill(item){
    return {
        name : item.name,
        due : twoWeeksFromNow(),
        total : calculateTotal(item.price),
    };
}

const bill = getBill({
    name : '객실 청소',
    price : 30
}); //이 정보를 getBill함수에서 받아 새로운 객체를 생성해서, 그 객체를 또 다른 함수가 쓰게 된다.

function displayBill(bill){
    return '${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due} 입니다. ';
}