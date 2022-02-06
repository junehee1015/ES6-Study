'use strict'

// __proto__ 와 Object.getPrototypeOf()
function a() {}

let obj = new a();

console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

console.log(obj.__proto__ === Object.getPrototypeOf(obj)); // true (같다.)
// __proto__가 지원되지 않는 브라우저에서는 Object.getPrototypeOf()를 사용하면 된다.

let obj2 = {}
// obj2.__proto__ = obj;
Object.getPrototypeOf(obj2 = obj);
console.log(obj2);


// 객체를 출력하는 방법
const animal = {
    leg: 4,
    run: function() {
        console.log(`${this.name}이(가) 달린다.`);
    }
};
const tiger = {
    name: '호랑이'
};
tiger.__proto__ = animal;

// 1. for in
// 객체의 key와 value을 출력한다.
// 상속받은 key와 value까지 모두 출력된다.
console.log('----for in----');
for(let i in tiger) {
    console.log(i);
    console.log(`${tiger[i]}`);
}
// 조건문과 hasOwnProperty() method를 통해서 해당 객체의 key와 value만 가지고 올 수 있다.
// hasOwnProperty() 는 해당 객체가 가지고 있는 속성에 대해서 boolean값으로 나타낸다.
console.log('----if 조건문----');
for(let i in tiger) {
    if(tiger.hasOwnProperty(i) == true){
        console.log(`${i}: ${tiger[i]}`);
    }
}


// 2. Object.keys(), Object.values()
// 현재 객체가 가지고 있는 key와 value만 배열로 출력한다.
console.log('----keys,values----');
console.log(Object.keys(tiger));
console.log(Object.values(tiger));

// 3. Object.entries
// 객체의 key와 value를 하나의 배열로 묶어서 출력한다.
console.log('----entries----');
console.log(Object.entries(tiger));
