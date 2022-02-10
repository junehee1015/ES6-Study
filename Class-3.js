'use strict'

// Object.create()
// class 문법이 추가되기 이전 javascript에서 객체지향을 구현하기 위해 사용한 방식.

// Object.create(부모 객체.prototype)
// 1. 첫 번째로 들어온 객체(부모 객체)의 Prototype 객체를 복제한다.
//    -> 복제된 객체를 자식객체.prototype에 할당한다.

// 2. 그러나 여전히 복제된 Prototype 객체는 부모 객체를 참조하고 있기 때문에 자식 객체를 참조하도록 바꿔줘야 한다.
//    -> 자식객체.prototype.constructor

// 3. 부모  객체.call(this, property)
//    -> new를 통해서 instance 객체 생성시 자식 객체의 this가 부모 객체까지 전달되도록 class의 super와 같은 역할을 한다.
//    => = apply(this, property)
function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.sayHello = function() {console.log(`Hello ~ I'm ${this.name}`);};

function Child(name, power) {
    Parent.call(this, name); // class의 super역할
    this.power = power;
}
Child.prototype = Object.create(Parent.prototype); // 부모객체의 prototype 복제
Child.prototype.constructor = Child; // 자식객체를 참조하도록 설정
Child.prototype.scout = function() {console.log(`${this.name}의 전투력은 ${this.power}`);};

const b1 = new Child('batman', 900);
console.log(b1);
console.log(b1.name);
console.log(b1.power);
b1.sayHello();
b1.scout();
console.log(Child.prototype);

const s1 = new Child('superman', 1500);
console.log(s1);
console.log(s1.name);
console.log(s1.power);
s1.sayHello();
s1.scout();
console.log(s1.__proto__); // 자식 prototype 객체
console.log(s1.__proto__.__proto__); // 부모 prototype 객체
console.log(s1.__proto__.__proto__.__proto__); // Object
console.log(s1.__proto__.__proto__.__proto__.__proto__); // null
// __proto__는 instance 객체가 참조하고 있는 prototype 객체를 표시한다.



// 접근 제한자
// javascript는 private, public, protected가 없고 기본적으로 모두 public이다.
// -> 즉, instance 객체를 통해 외부에서 항상 참조가 가능하다.
// -> 그래서 method내 property 앞에 '_'(underscore)를 붙여서 임의로 private라고 암묵적으로 표시하였다. (this._name)

// property 또는 method 앞에 # 을 사용하면 private가 된다.
// -> 외부에서 접근할 수 없다.
// -> 내부에서는 접근 가능.
// 최신 브라우저에서만 지원
class Person {
    name = 'ironman';
    power = 1300;
    #finger = 10; // private
    #toe = 10; // private
}
const p1 = new Person();
console.log(p1.name);
console.log(p1.power);
p1.power = 1000; // instance 객체를 통해 class의 property 접근 가능.
console.log(p1.power);

console.log(p1.finger); // undefined
// console.log(p1.#finger); // private Error -> 외부에서 접근 불가.


class Hero {
    #power = 1000;
    scout() {
        this.#power = 1500; // 내부에서는 접근 가능.
        console.log(`전투력은 ${this.#power}입니다.`);
    }
    #privateMethod() {
        return '안녕하세요. private method 입니다.';
    }
    getPrivateMethod() {
        return this.#privateMethod();
    }
}
const h1 = new Hero();
h1.scout();
// console.log(h1.#privateMethod()); // Private Error -> 외부에서 접근 불가.
console.log(h1.getPrivateMethod()); // get method를 만들어서 접근.


// private static method
// static이여도 여전히 private이기 때문에 외부에서 접근하면 Error가 난다.
class PrivateStatic {
    constructor() {}

    static #privateStaticMethod() {
        return `I'm privateStaticMethod`;
    }
    static getPrivateStaticMethod() { // get method를 사용해서 접근해야 한다.
        return this.#privateStaticMethod();
    }
}
// console.log(PrivateStatic.privateStaticMethod()); // Error
console.log(PrivateStatic.getPrivateStaticMethod());



// getter
// class 속성에 접근하여 값을 가져올 때 사용한다.
// -> method 앞에 get을 붙여 사용. (-> get method)
// -> getter method는 속성처럼 사용한다. 호출(끝에 괄호) X.
// -> 값을 가져오는 용도이기 때문에 반드시 값을 return 해야한다.
class Employee {
    constructor(name, age, email) {
        // property 앞의 '_'(underscore)는 암묵적으로 private의 표시
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name() {return this._name;}
    get age() {return this._age;}
    get email() {return this._email;}

    set name(value) {this._name = value;}
    set age(value) {this._age = value;}
    set email(value) {this._email = value;}

    info() { // method에서도 속성처럼 사용할 수 있다.
        return `이름: ${this.name} / 나이: ${this.age} / 이메일: ${this.email}`;
    }
}
const em1 = new Employee('김사원', 25, 'kimemployee@naver.com');
// get method를 속성처럼 사용한다.
console.log(em1.name);
console.log(em1.age);
console.log(em1.email);
console.log(em1.info());
// 하지만 _property는 암묵적인 private이기 때문에 접근이 가능하다.
em1._name = 'hurk';
console.log('이름:',em1.name);

// setter
// class 속성에 값을 할당할 때 사용한다.
// -> method 앞에 set을 붙여서 사용. (-> set method)
// -> getter와 마찬가지로 method를 속성처럼 사용한다.
// getter는 값을 취할 시 get method 호출
// setter는 값을 할당 시 set method 호출
// em1.name = 'wewe';
em1.name = '김대리';
em1.age = 28;
em1.email = 'kimdaeri@google.com';
console.log(em1.info());