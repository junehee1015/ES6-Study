'use strict'

// new 연산자
// new를 통해서 객체를 생성하면 function과 같은 이름의 Prototype Object를 생성된 새로운 객체의 Prototpye Object로 설정한다.
// -> 새롭게 생성된 객체의 부모를 설정해준다.

function add(a, b) {
    this.a = a;
    this.b = b;
}
// method는 prototype object에 추가한다.
add.prototype.plus = function(){
    return this.a + this.b;
};
// new를 통하여 새로운 객체 생성 및 상속 받은 method 사용.
let obj1 = new add(1, 2);
console.log(obj1.plus()); // 3



// new 연산자의 내부 동작
// 1. 빈 객체가 생성된다.
let newObj = {};

// 2. 객체의 Prototype Object 설정된다.
newObj.__proto__ = add.prototype; // add prototype object가 상속된다.

// 3. 속성값이 설정된다.
add.apply(newObj, [3, 7]);

// 4. 마지막으로 prototype object의 method를 공유하여 사용할 수 있다.
console.log(newObj.plus()); // 10

// new 연산자를 사용하면 위의 내부 동작 과정을 생략하고 편리하게 사용할 수 있다.
// 객체의 생성
// 생성된 객체의 Prototype Object(원형 객체) 지정
// ()괄호 안의 초기화 값을 편리하게 지정
