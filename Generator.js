'use strict'

// 1. Generator(제너레이터)란?

// (1) 함수. -> 조금은 이상하게 동작하는 함수.
// 보통의 함수는 값을 0개 또는 1개를 반환하지만 Generator는 여러개를 반환한다.
// 함수(Generator)가 실행되는 중간에 특정 부분에서 멈추고 값을 외부에서 받아 하나씩 반환한다.

// (2) 외적인 특징으로는 함수에 *을 붙이면 Genrator 함수가 된다. (function*)

// (3) 실행 -> 특정 키워드(yield)에서 멈추고 값을 외부에서 받아온다. -> 필요한 시점에서 다시 함수를 실행한다.
// yield = 양보하다, 양도하다 -> 즉 함수 중간에서 멈추고 제어권을 호출자에게 양도하고 호출자에 의해서 다시 함수가 실행된다.

function* testGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
// Generator 함수는 호출하면 바로 실행되지 않고 iterator 객체를 반환한다.
// 반환된 iterator(반복자) 객체를 보통 it 또는 iter라는 이름으로 받는다.
// 객체이기 때문에 method를 갖는데 next() method는 Generator의 주요 method이다.

const iter = testGenerator();
// next() method가 존재하는데 next() method가 실행될 때마다 yield 부분까지 실행하고 멈춘다.(제어권을 호출자에게 양도한다.)
// yield에서 멈췄을 때 yield의 값(value)를 반환한다.
// yield에 값이 없다면 undefined를 반환한다.
// next() method를 사용하면 항상 value, done 2개의 속성을 가진 객체를 반환한다.
// {value: 값 , done: 함수가 끝났으면 true, 아니면 false}
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: 4, done: true} -> 더이상 실행될 코드가 없기 때문에 true

console.log('------------');

function* testGenerator2() {
    const a = yield 1;
    const b = yield (a * 1);
    const c = yield (b + 2);
    return a * b * c;
}
const iter2 = testGenerator2();

// next()를 호출 -> yield 값을 반환, 함수 stop -> next()에서 값을 받아온다. -> 다음 next() 호출시 다시 함수 실행.

console.log(iter2.next()); // yield 1에 도착 {value: 1, done: false}
console.log(iter2.next(100)); // const a 의 a에 100이 들어가서 다음 yield (a * 1)의 a에 100이 들어간다. {value: 100, done: false}
console.log(iter2.next(50)); // const b 의 b에 50이 들어가서 다음 yield (b + 2)의 b에 50이 들어간다. {value: 52, done: false}
console.log(iter2.next(2)); // const c 의 c에 2가 들어가서 a * b * c 를 연산한다. {value: 10000, done: false}

// Generator 함수와 iterator 객체의 next() method는 서로 데이터를 주고 받을 수 있다.