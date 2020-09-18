function addClick(items){
    for(let i =0; i < items.length; i++){
        items[i].onClick = function(){
            return i;
        };
    }

    return items;
}

const exmaple = [{},{},{}];
const clickSet = addClick(exmaple);

console.log(clickSet[0].onClick());
console.log(clickSet[1].onClick());
console.log(clickSet[2].onClick());