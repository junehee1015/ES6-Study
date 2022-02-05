'use strict'

// 1. javascript는 객체지향 언어인가?
// javascript는 Prototype 상속에 기반을 둔 객체지향 언어이다.
// 최근 Class 문법이 지원이 되며 다른 언어들과 비슷해졌다.

// 2. 상속의 필요성
// 재사용의 목적이 가장 크다.
// Prototype chainning이 되어 있는 부모 객체의 속성, method를 사용하기 위함이다.
// 새로운 기능을 추가하여 기존의 method를 확장시킬 수 있다.

// 3. Prototype chain(상속)
// 객체 내의 prototype은 상속을 해준 부모 객체(Prototype Object)를 참조한다.
// 자식 객체가 prototype이 가르키는 부모 객체(Prototype Object)의 속성, method를 사용할 수 있다.

let obj1 = {
    name: '홍길동',
    age: 20,
    hellow: function() {
        console.log(`i'm ${this.name}`);
    }
};
let obj2 = {
    name: '이순신'
};
console.log(obj2);
// new를 통해서 생성된 객체가 아니기 때문에 Object가 최상위 객체이다.

obj2.__proto__ = obj1;
// __proto__를 사용하여 Object의 부모를 바꾸어줄 수 있다.
console.log(obj2);
console.log(obj2.name); // obj2 내에 name 속성이 있기 때문에 '이순신' 출력
console.log(obj2.age); // 부모 객체에서 가져온 20 출력
obj2.hellow(); // 부모 객체의 method 사용 this.name은 obj2에서 먼저 찾고 없으면 부모 속성 사용.

let obj3 ={};
obj3.__proto__ = obj2;
console.log(obj3);
console.log(obj3.name);
console.log(obj3.age);
obj3.hellow();
// 빈 객체에 __proto__로 obj2를 상속 받으면 obj2는 obj1을 상속 받았기 때문에 obj1의 속성과 method까지 사용할 수 있다.
// obj3 -> prototype obj2 상속 -> prototype obj1 상속 -> Object(최상위) 상속