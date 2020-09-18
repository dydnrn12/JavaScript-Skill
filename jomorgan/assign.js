const dafaultemployee = {
    name : {
        first : '',
        last : ''
    },
    years : 10
};

const employee = Object.assign(
    {},
    dafaultemployee,
    {
        name : Object.assign({},dafaultemployee.name),
    }
);

console.log(employee);

const employee2 = {...dafaultemployee,
    name : {
        ...dafaultemployee.name
    }
};

console.log(employee2);