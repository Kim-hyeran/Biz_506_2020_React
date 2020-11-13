// 선언된 함수를 호출하여 사용하기
f1()

// java script의 고전적인 함수 선언
function f1() {
    console.log("나는 f1입니다")
}

// 2세대 함수 선언
// f2() : 고전적인 함수 선언과는 달리 코드 순서가 중요하기 때문에 함수 선언보다 호출이 먼저 올 수 없다.
const f2 = function() {
    console.log("나는 f2입니다")
}
f2()

const f3 = function() {
    return 20+30
}
console.log(f3())

const f4 = function (num1, num2) {
    return num1+num2
}
console.log(f4(30, 100))
console.log(f4())

// 신세대 화살표 함수
const f5 = ()=> {
    console.log("나는 f5입니다")
}
f5()

const f6 = ()=> {
    return 100+70
}
console.log(f6())

const f7 = ()=> 200+300

const f8 = arg=> arg*arg    // 매개변수가 1개만 존재할 때는 괄호 생략 가능

/**
 * 화살표 함수
 * function 키워드를 제외하고 선언하는 것
 *   함수이름 = (매개변수)=> {함수본체}
 * 
 * 매개변수가 없을 때 : 함수이름 = ()=> {함수본체}
 * 매개변수가 1개만 있을 때 : 함수이름 = 매개변수=> {함수본체}
 * 매개변수가 2개 이상일 때 : 함수이름 = (매개변수1, 매개변수2, ...)=> {함수본체}
 * 함수 본체에 return문만 필요로 할 때 : 함수이름 = ()=> return값(return식)
 * 함수이름 = 매개변수=> return값(return식)
 *   단, 함수본체에 다른 연산식들이 필요한 경우는 함수본체를 {}로 묶어야 한다.
 *   함수이름 = (매개변수1, 매개변수2)=> {
 *     const 합계 = 매개변수1 + 매개변수2
 *     return 합계
 *   }
 */