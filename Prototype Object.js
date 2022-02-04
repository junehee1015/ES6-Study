'use strict'

// function(함수)를 생성하면 자신과 같은 이름의 Prototype Object(원형 객체)가 생성된다.

// function의 멤버로 Prototype 속성이 생성되는데 Prototype Object를 참조한다.
// Prototype Object는 Constructor(생셩자)가 생성되는데 function을 참조한다.

// fcuntion                                /       Prototype Object
// Prototype 속성 -> Prototype Object 참조 /        Constructor -> function 참조


function animal(){}
// 생성자 함수와 new 연산자를 통해서 만들어지는 모든 Object의 Prototype(원형)이 되는 Object.


let tiger = new animal();
let lion = new animal();
// Prototype Object가 자동으로 생성된다.
// tiger, lion Object(객체)들이 만들어질 수 있도록 해준 원형을 가르킨이다.(참조한다.)

console.log(tiger);
console.log(lion);
// animal Prototype Object는 tiger, lion의 원형이 되는 객체이다.
// 따라서 tiger, lion은 animal Prototype Object에 접근이 가능하다.
// animal Prototype Object에 멤버를 추가하면 tiger, lion에서도 멤버를 공유하여 사용 가능하다.



// animal Prototype Object에 멤버 추가하는 방법
// animal function에 method를 직접 만들지 않고 Prototype Object에 만드는 이유는
// function에 method를 만들면 새로운 Object를 만들때마다 해당 method가 추가되어 메모리 문제가 있을 수 있다.
// tiger, lion은 method가 추가되지 않았음에도 method를 사용할 수 있다.
animal.prototype.animal_run = function() {
    return '동물이 달린다.'
};
console.log(tiger.animal_run());
console.log(lion.animal_run());


// animal Prototype Object는 부모의 입장이고 tiger, lion은 자식의 입장이다.
// 만약 tiger, lion에 같은 method가 있으면(재정의 하면 overriding?) 그것을 실행하고 아니면 부모에서 찾아 실행한다.
tiger.animal_run = function() {
    return 'tiger가 달린다.'
}
console.log(tiger.animal_run());
console.log(lion.animal_run());
// 함수의 Prototype 속성으로도 접근이 가능.
console.log(animal.prototype.animal_run());


// 속성 추가
tiger.leg = 4;
console.log(tiger.leg); // 4
console.log(lion.leg); // undefined
// lion은 자신한테도 없고 부모(Prototype Object)에도 없으니 undefined가 출력된다.
