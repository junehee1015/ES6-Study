'use strict'

// 1. 생성자 함수(constructor function)과 그 Prototype 객체가 서로 참조한다.

//         생성자 함수                              Prototype 객체
// Prototype -> Prototype 객체 참조.        constructor -> 생성자 함수 참조.


// 생성자 함수 (1)
function Fruits1(name, color) {
    this.name = name;
    this.color = color;
}
// Prototype 객체 (1)
Fruits1.prototype.what1 = function() {
    console.log(`Fruit 1: ${this.color}색의 ${this.name}이다.`);
};


// 생성자 함수 (2)
function Fruits2(name, color) {
    this.name = name;
    this.color = color;
}
// Prototype 객체 (2)
Fruits2.prototype.what2 = function() {
    console.log(`Fruit 2: ${this.color}색의 ${this.name}이다.`);
};



// Prototype 객체 생성
let banana = new Fruits1('banana', 'yellow');
banana.what1();

// Prototype 객체 바꾸기
// 생성자 함수가 아닌 Prototype 객체를 바꿔줘야 한다.
// = Fruits2 (X) , = Fruits.prototype (O)
banana.__proto__ = Fruits2.prototype;
banana.what2();

// 2. new 연산자를 사용하여 새롭게 생성된 객체 -> instance(인스턴스)
// new 연산자는 생성자 함수를 이용하여 새로운 객체 생성.
// 이렇게 생성된 객체들의 부모는 Prototype 객체이다.
// * Prototype Chain이 어떻게 연결되는지 기억하는 것이 중요하다.

// instance가 어떤 생성자 함수로 생성된 것인지는 Prototype 객체의 constructor 속성이 가르키는 함수를 보면 된다.
// 부모(Prototype 객체)로 부터 속성, method를 상속 받으므로 constructor 속성 참조 가능.
// Object.getPrototypeOf() method로도 확인 가능.
console.log('----construtor 참조 방법----');
console.log(banana.constructor);
console.log(Object.getPrototypeOf(banana));

// instanceOf
// 특정 객체가 Prototype Chain에 연결되어 있는지 확인하는 방법 중 하나이다.
// isPrototypeOf() method를 이용하는 방법도 있다.
console.log('----instanceOf----')
console.log(banana instanceof Fruits1); // false
console.log(banana instanceof Fruits2); // true
console.log(banana instanceof Object); // true

console.log('----isPrototypeOf()----')
console.log(Fruits1.prototype.isPrototypeOf(banana)); // false
console.log(Fruits2.prototype.isPrototypeOf(banana)); // true
console.log(Object.prototype.isPrototypeOf(banana)); // true