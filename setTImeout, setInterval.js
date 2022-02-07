'use strict'

// 비동기 처리에는 다양한 방법들이 있다. -> Promise와 Generator함수를 이용한 비동기 처리.

// [-] 호출 스케줄링 함수 -> setTimeout(), setInterval()

// setTimeout()                              setInterval()
// 일정 시간 후에 함수만 한 번만 실행.         일정 시간마다 함수만 주기적으로 실행.
// clearTImeout() // 지연 호출 중단           clearInterval() // 주기적 실행 중단



// setTImeout()
// 함수를 호출할때는 함수를 호출하지 말고 함수명만 기재.
// setTimeout(함수, 시간, property)
// setTimeout() 호출 -> Timer 식별자 반환 -> setTimeout의 갯수 순서대로 1, 2, 3...

// 예시 1)
function testSetIimeout(hello) {
    console.log(`setTimeout 실행 property: ${hello}`);
}
// testSetIimeout();   // 일반 호출
setTimeout(testSetIimeout, 1000, 'hellow~');   // 지연 호출 -> 시간 단위는 millisecond, 1000 - 1초, default = 0
// 예시 2)
setTimeout((hi) => {
    console.log(`property: ${hi}`)
}, 2000, 'hi');

// Timer 식별자.
// 1.
const settimeout1 = setTimeout((a) => {
    console.log(`settimeout1: ${a}`);
}, 4000, 'aaa');
console.log(settimeout1);   // timer 식벌자: 3 (setTimeput() 세 번째로 사용되어서 3)

// 2.
const settimeout2 = setTimeout((b) => {
    console.log(`settimeout2: ${b}`);
}, 5000, 'bbb');
console.log(settimeout2);   // timer 식변자: 4 (setTimeput() 네 번째로 사용되어서 4)
// 위 setTImeout들을 주석처리 또는 지우면 timer 식별자도 순서에 맞게 바뀐다.    

// 호출 스케줄링 취소 -> clearTImeout()
clearTimeout(settimeout1); // 더 이상 호출되지 않는다.




// setInterval()
// setTimeout()은 함수를 한 번만 호출하지만 setInterval()은 함수를 주기적으로 호출한다.
const setinterval = setInterval(() => {
    console.log('korea');
}, 1000);

// 주기적인 호출 중지 -> clearInterval()
// 예시 1)
clearInterval(setinterval);

const setinterval2 = setInterval(() => {
    console.log('setInterval');
}, 1000);

// 예시 2)
const intervalStop = (setinterval2) => {
    clearInterval(setinterval2);
};
setTimeout(intervalStop, 5000, setinterval2); // property를 넣어주어야 한다.
// 잘못된 방법 setTImeout(intervalStop(setinterval2), 5000);
// 옮바른 방법 setTimeout(() => {intervalStop(setinterval2)}, 5000);
// -> 함수에만 반응하기 때문이다.




// clearInterval()
let count = 0;
let interval = setInterval(() => {
    console.log(count);
    
    count++;
    if(count == 10) clearInterval(interval);
}, 1000);

// clock
const clock = () => {
    let date = new Date();
    console.log(`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    // 1.
    // const timer = setTimeout(() => clock(), 1000);
}
// clock();

// 2.
const timer = setInterval(() => {
    clock();
    setTimeout(() => {
        clearInterval(timer);
    }, 10000);
}, 1000);
