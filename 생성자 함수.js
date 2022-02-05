'use strict'

// 1. 객체 literal
let fruit = {
    name: 'banana',
    color: 'yellow'
};
console.log(fruit.name, fruit.color);
// 이러한 객체를 수십, 수백개 만들어야 하는 상황에 대비하여
// 비슷한 객체들을 생성해주는 생성자 함수를 만들어 사용한다.


// 2. 생성자 함수
// 첫 글자는 관례적으로 대문자로 작성.
// 새롭게 생성되는 객체 자신을 this라고 칭한다.
// new 연산자를 사용하여 새로운 객체 생성.

// 생성자 함수
function Fruit(name, color) {
    this.name = name;
    this.color = color;
}

// 생성자 함수를 통해서 새로운 객체 생성
let banana = new Fruit('banana', 'yellow');
let apple = new Fruit('apple', 'red');
let orange = new Fruit('orange', 'orange');

console.log(banana);
console.log(apple);
console.log(orange);


// 3. 생성자 함수의 내부 동작
function Fruit(name, color) {
    // this = {} this라는 빈 객체 생성 후 속성 추가. //생략
    this.name = name;
    this.color = color;

    // return this; //생략
}