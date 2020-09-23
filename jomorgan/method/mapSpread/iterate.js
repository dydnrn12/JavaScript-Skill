const filters = new Map()
    .set(2, 4)
    .set(1, 4);

function checkFilter(filters){
    for(const entry of filters){
        console.log(entry);
    }
}

checkFilter(filters);

