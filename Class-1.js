'use strict'

// class는 기본적으로 use strict 자동 적용

// class 선언
class Person {

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    sayHello() {
        console.log(`안녕하세요. ${this.age}살 ${this.name}입니다.`);
    }
}

// class 객체 생성, intance 생성
const p1 = new Person('홍길동', 20);
console.log(p1.name);
console.log(p1.age);
p1.sayHello();

const p2 = new Person('이순신', 15);
console.log(p2.name);
console.log(p2.age);
p2.sayHello();

console.log(p1 instanceof Person);
console.log(p2 instanceof Person);


// 무명 표현식
const noNamed = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const no = new noNamed('홍길동', 20);
console.log(`${no.name}, ${no.age}`);
console.log(noNamed.name); // class명이 없기 때문에 변수명이 class명으로 대체 된다.
// 유명 표현식
const yesNamed = class Named {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const yes = new yesNamed('이순신', 15);
console.log(yes.name, yes.age);
console.log(yesNamed.name); // class명이 있기 떄문에 class명 출력
// class명으로 instance 객체를 만들면 Error


// [1] 생성자
function Fruits(name, color) {
    this.name = name;
    this.color = color;
}
Fruits.prototype.say = function() {console.log(`constructor: ${this.name}는 ${this.color}색이다.`);};
const f1 = new Fruits('바나나', '노랑');
f1.say();

// {2} class
class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    say() {
        console.log(`class: ${this.name}는 ${this.color}색이다.`);
    }
}
const f2 = new Fruit('바나나', '노랑');
f2.say();
// class의 method는 열거 대상이 아니다.
for(let i in f1){console.log('constructor: ',i);} // name, color, say
for(let i in f2){console.log('class: ',i);} // name, color


// class의 type은 function이다.
// class 내에 정의한 method는 Prototype 객체에 추가된다.
// 그래서 class의 instance(객체)가 생성되면 method를 자류롭게 사용할 수 있다.


// function level scope와 block level scope
// var
// 함수 레벨 스코프
// 키워드는 중복이 가능하다.
// hoisting(호이스팅) 가능
// 함수가 아닌 변수는 모두 전역변수
var a = 1;  // 전역변수
console.log(a);
{
    var a = 2;  // 전역변수
}
console.log(a);

// hoisting(호이스팅)
// 기본적으로 모든 선언문(function, var, let, const, class) 호이스팅
// 스코프 안의 어디에서든 변수 선언은 최상위에서 선언한 것과 동일하다.

console.log(testVar);   // undefined
var testVar;    // 변수 선언과 동시에 값을 할당한다.


let testLet;    // 코드가 순서대로 읽히면서 선언 된 라인에 왔을때 초기화가 된다.
console.log(testLet); // 선언되기 전에 호출되면 initialization reference error(초기화 에러)
// class 상속도 마찬가지로 initialization reference error(초기화 에러)
class Parent {}
class child extends Parent {}





