/*function convertWeight(weight){
    return weight / 2.2;
}*/

//파운드를 킬로그램으로 바꾸는 함수, 그러나 온스도 변환해야 한다면??
//함수를 사용한 모든 ounce에 0을 넣어줘야 할까?, ounce가 들어오지 않은 경우의 코드를 따로 작성해야 할까?

function convertWeight(weight, ounces){
    const oz = ounces ? ounces / 16 : 0; //온스 값이 없는 경우를 처리하기 위한 코드
    const total = weight + oz;
    return total / 2.2;
}

//소수점 반올림 하고 싶다!!

function convertWeight(weight, ounces, roundTo) {
    const oz = ounces / 16 || 0;
    const total = weight + oz;
    const conversion = total / 2.2;
  
    const round = roundTo === undefined ? 2 : roundTo;
  
    return roundToDecimalPlace(conversion, round);
  }

//그럼 매개변수 추가할 때마다 추가로 매개변수 관리할 코드를 넣어줘야 하나?  매개 변수 기본값을 사용하자.

function convertWeight(weight, ounces = 0, roundTo = 2) {
    const total = weight + (ounces / 16);
    const conversion = total / 2.2;
  
    return roundToDecimalPlace(conversion, roundTo);
  }
//매개변수에 값을 전달하지 않으면 설정한 기본값이 사용된다. 함수 사용자가 매개변수를 누락하더라도 어떤 값이던 반환할 것이라고 확신할 수 있다.

console.log(convertWeight(6,6));
console.log(convertWeight(44,8));