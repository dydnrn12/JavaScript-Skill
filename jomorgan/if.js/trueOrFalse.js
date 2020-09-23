const employee = {
    name : 'Eric',
    equipmentTraining : true,
}

if(!employee.equipmentTraining){
    console.log('기계를 작동할 권한이 없습니다.');
}

function listCerts(employee){
    if(employee.equipmentTraining){
        employee.certificates  = ['Equipment'];
        delete employee.equipmentTraining;
    }
}

function checkAuthorization(){
    if(employee.equipmentTraining!==true){
        return '기계를 작동할 권한이 없습니다.';
    }
    return `반갑습니다. ${employee.name} 님`;
}

listCerts(employee);
console.log(checkAuthorization(employee));