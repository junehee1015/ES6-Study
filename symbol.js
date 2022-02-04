'use strict'

let arr1 = [1, 2, 3, 4, 5];
console.log(`arr1.length: ${arr1.length}`);

arr1.length = 50;
console.log(`arr1.length: ${arr1.length}`);
// length의 속성이 덮여쓰여져서 arr.length 값이 바뀐다.

console.log('----Symbol 사용----');
let arr2 = ['a', 'b', 'c'];
console.log(`arr2.length: ${arr2.length}`);

const length = Symbol();
arr2[length] = 50;

console.log(`arr2.length: ${arr2.length}`); // 3
console.log(`arr2.length: ${arr2[length]}`); // 50
// 원래 length의 속성은 지키고 새로운 length의 속성 값을 추가 할 수 있다.

let symbol1 = Symbol('name');
let symbol2 = Symbol('name');
// Symbol의 ()안에 문자열을 넣을 수 있지만 어떤 영향도 끼치지 않는다.
// 이유는 Symbol은 매 번 새로운 Symbol값을 생성하기 때문이다.

console.log(symbol1 === symbol2); // false
console.log(symbol1 == symbol2); // false

// Symbol은 String 전환이 안되기 때문에 console을 통해서 출력할 수 있다.
console.log(symbol1);
console.log(symbol2); // Symbol(name)

// for in을 사용하여 배열을 출력하면 배열도 객체로 인식하여 출력되지만 index 값이 출력된다.
