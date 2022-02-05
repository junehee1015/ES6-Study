'use strict'

// 1. __proto__ 와 Object.getPrototypeOf()
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
