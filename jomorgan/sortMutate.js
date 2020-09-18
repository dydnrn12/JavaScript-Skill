const staff = [
    {
        name : 'joe',
        years : 10,
    },
    {
        name : 'Theo',
        years : 5,
    },
    {
        name : 'Dyan',
        years : 10,
    },
];

function sortByYears(a,b){
    if(a.years === b.years){
        return 0;
    }
    return a.years - b.years;
}

console.log(staff.sort(sortByYears));