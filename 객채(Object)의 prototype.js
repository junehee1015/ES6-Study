'use strict'

// prototype(원형)
// 자바스크립트는 프로토타입 기반의 언어이다.
// 확장과 재사용성이 높다.

// 객체의 프로토타입을 기반으로 새로운 객체를 생성하는 프로그래밍 방식.
// 생성된 객체는 자기자신의 프로토타입을 갖는다.
// -> 자신이 어디에서 만들어졌는지 안다.

// 기존에는 Class가 없엇기 때문에 객체의 프로토타입을 이용하여 객체의 확장, 재사용, 상속등을 구현했다.
// Prototype 객체는 new 연산자를 사용하여 생성
// -> 공유 property, method등을 제공하기 위해 사용된다.

// 예
const apple = {color: 'red'};
console.log(apple.color);

// 속성 추가
apple.taste = 'sweet';
console.log(apple.taste);

// 속성 체크 hasOwnProperty
console.log(apple.hasOwnProperty('taste')); // true
console.log(apple.hasOwnProperty('name')); // false

console.log(apple);
// console창의 사용한 Object에서 Prototype을 확인할 수 있다.

const banana = {
    color: 'yellow',
    hasOwnProperty: function(){
        console.log('hellow');
    }
}
banana.hasOwnProperty();
// 부모가 가지고 있는 method를 직접 정의해서 사용하면 다른 값의 method가 된다.