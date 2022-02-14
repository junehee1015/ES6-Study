'use strict'

// Currying
// 여러 parameter를 갖는 함수를 하나의 parameter를 갖는 함수의 계층 구조로 만드는 것.
// -> 단일 parameter를 갖는 함수를 연결시킨 것.
// -> 많아지게 되면 메모리 문제가 발생할 수 있기 때문에 장단점을 고려해야한다.
// -> 함수가 필요로 하는 parameter의 갯수 만큼 충족되지 않았다면 계속 함수를 반환한다. (함수를 반환 -> Closure의 개념)
// -> parameter의 갯수를 모두 충족시켰다면 최종적인 값을 반환한다.

// 기본 함수 (인자 2개)
function add1(x, y) {
    return x + y;
}
console.log(add1(1, 2)); // 3

// Currying 함수 (인자 2개)
function sum1(x) {
    return function(y) {
        return x + y;
    }
}
const sum1Value = sum1(2); // Closure의 개념
console.log(sum1Value(3)); // 5

console.log(sum1(1)(2)); // 3



// 기본 함수 (인자 3개)
console.log('--------------------');
function add2(x, y, z) {
    return x + y + z;
}
console.log(add2(1, 2, 3)); // 6

// Currying (인자 3개)
function sum2(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}
// 부분적으로 처리할 수 있는 것이 장점이다.
const sum2Value1 = sum2(1); // 1
const sum2Value2 = sum2Value1(2); // 1+2
console.log(sum2Value2(3)); // 1+2+3 = 6
console.log(sum2(1)(2)(3)); // 6
// Arrow function
console.log('-------Arrow-------')
const sum2Arrow = x => y => z => x + y + z;
const sum2ArrowVal1 = sum2Arrow(1);
const sum2ArrowVal2 = sum2ArrowVal1(1);
console.log(sum2ArrowVal2(1));
console.log(sum2Arrow(1)(1)(1));


// Currying 문자열
// 기본 함수
const feed = function(name, feed) {
    return `${name}의 먹이 - ${feed}`;
}
console.log(feed('호랑이', '육류'));
console.log(feed('송어', '송사리'));

// Currying
const curFeed = function(name) {
    return function(feed) {
        return `${name}의 먹이 - ${feed}`;
    }
}
const cur_feed = curFeed('닭');
console.log(cur_feed('모이'));
console.log(cur_feed('밥')); // parameter에서 원하는 부분만 바꿀 수 있다.
// Arrow
const curFeedArr = name => feed => {return `${name}의 먹이 - ${feed}`};
const curFeed_arr = curFeedArr('고양이');
console.log(curFeedArr);
console.log(curFeed_arr('생선'));


// parameter 값의 순서 바꾸기
// 기본 함수
const order = function(a, b, c, d) {
    return `${b} ${c} ${d} ${a}`;
}
console.log(order(1, 2, 3, 4)); // 2 3 4 1

// Currying
const orderCurry = function(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return `${b} ${c} ${d} ${a}`;
            }
        }
    }
}
const inOrder = orderCurry(1)(2)(3); // (a)(b)(c)
console.log(inOrder(4)); //(d) => 2 3 4 1
// Arrow
const orderCurArr = a => b => c => d => {return `${c} ${b} ${d} ${a}`;};
const inOderArr = orderCurArr(1)(2)(3);
console.log(inOderArr(4)); // 3 2 4 1