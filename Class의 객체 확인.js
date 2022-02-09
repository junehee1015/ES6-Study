'use strict'

// class의 객체 확인
// 1.
const p1 = {
    eat(){},
    run(){},
    rest(){}
}
// 2.
class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){}
    run(){}
    rest(){}
}
const p2 = new Person2('장삼봉', 43);

console.log(p1);    // {function eat, run, rest}
console.log(p2);    // Person2 {name, age}
console.log('----keys----');
console.log(Object.keys(p1));   // [eat, run, rest]
console.log(Object.keys(p2));   // [name, age]
console.log('----values----');
console.log(Object.values(p1));
console.log(Object.values(p2));
console.log('----getPrototypeOf----');
console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p2));    // 객체 내부의 Prototype 객체의 method 확인. // {eat, run, rest}
console.log(Object.keys(Object.getPrototypeOf(p2)));    // []
console.log('----getOwnPropertyNames----');
console.log(Object.getOwnPropertyNames(p1));    // [eat, run, rest]
console.log(Object.getOwnPropertyNames(p2));    // 객체의 모든 속성을 배열로 반환한다. // [name, age]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p2)));    // [constructor, eat, run, rest]
console.log(Object.getOwnPropertyNames(Person2.prototype));    // [constructor, eat, run, rest]