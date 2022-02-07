'use strict'

// 비동기 처리에는 다양한 방법이 있다.
// 1. callback 함수
// 2. Promise
// 3. async
// 등등

// [1] callback 함수
// 코드가 복잡할수록 가독성이 좋지 않다.
// 1
setTimeout((x) => {
    let result = x;
    console.log(result);

    // 2
    setTimeout((x) => {
        result *= x;
        console.log(result);

        // 3
        setTimeout((x) => {
            result *= x;
            console.log(result);

            // 4
            setTimeout(() => {
                result *= x;
                console.log(result);
            }, 1000, 40);
        }, 1000, 30);
    }, 1000, 20);
}, 1000, 10);


// [2] Promise
// new Promise() 호출 -> 대기(pending)상태
// callback 함수를 선언 할 수 있다. -> property는 resolve와 reject이다.
// callback 함수가 잘 처리되면 resolve() method 호출.
// 즉, 성공하면 return값을 then() method가 받아서 계속 처리한다.
// 가독성이 좋고 정리하기 편리하다.
new Promise((resolve, reject) => {

    setTimeout((x) => {

            let result = x;
            console.log('┌-┐');
            console.log(result);
            console.log('└-┘');
            resolve(result);

    }, 1000, 10);
})
.then((result) => {
    return new Promise((resolve, reject) => {

        setTimeout((x) => {

            result *= x;
            console.log('┌-┐');
            console.log(result);
            console.log('└-┘');
            resolve(result);

        }, 1000, 20);
    });
})
.then((result) => {
    return new Promise((resolve, reject) => {

        setTimeout((x) => {
            
            result *= x;
            console.log('┌--┐');
            console.log(result);
            console.log('└--┘');
            resolve(result);

        }, 1000, 30);
    });
})
.then((result) => {
    return new Promise((resolve, reject) => {

        setTimeout((x) => {
            
            result *= x;
            console.log('┌---┐');
            console.log(result);
            console.log('└---┘');
            resolve(result);

        }, 1000, 40);
    });
});


// [3] Generator
const calc= (x, y) => {
    setTimeout(() => {
        iter.next(x * y);
    }, 1000);
};
function* gen() {   
    const a = yield calc(1, 10);
    console.log(a,'gen');
    const b = yield calc(a, 20);
    console.log(b,'gen');
    const c = yield calc(b, 30);
    console.log(c,'gen');
    const d = yield calc(c, 40);
    console.log(d,'gen');
}
const iter = gen();
iter.next();