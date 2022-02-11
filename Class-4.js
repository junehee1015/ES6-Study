'use strict'

// 다형성(polymorphism)
// 설계적인 부분과 동작이나 기능이 구현되는 부분을 분리하여 객체 별로 다양하게 사용하는 것.
// -> 부모 class에서 상속받은 자식 class의 instance 객체 별로 적절한 method를 사용하게 하는 것.
// -> 설계 부분과 구현 부분은 1:n의 관계가 성립된다.

// [1] for of
// 다양한 자료구조에서 사용할 수 있다. -> 반복 가능한 객체(Array, String, Map, Set...)
// 반복문 내에서 배열이나 문자열에서 동작하는 특정 인터페이스가 지원되는 자료구조를 사용하기 때문이다.
// 반복 가능한 객체가 [Symbol.iterator] 속성을 가지고 있여야 한다.
// 내가 만든 사용자 정의 객체에서도 이러한 특정 인터페이스 규격을 맞추면 사용할 수 있다.

// Array
const fruits = ['apple', 'orange', 'melon', 'lemon', 'peach'];
for(let arr of fruits) {
    console.log(arr);
}

// String
const nation = 'korea';
for(let str of nation) {
    console.log(str);
}

// Number
// 반복 가능한 것이 아니기 때문에 Error(is not iterable)

//Map
const mable = new Map([['ironman', 1], ['hurk', 2], ['spiderman', 3]]);
for(let m of mable) {
    console.log(m);
}
// 구조분해 할당(destructuring)
for(let [key, value] of mable) {
    console.log(key, ':', value);
}



// [2] toString()
// 객체를 텍스트로 형식으로 출력시키고자 할 때 자동으로 toString() method가 호출된다.
// 객체를 나타내는 문자열을 반환하기 때문에 Object에서 파생된 모든 객체에 상속된다.

// Object
const date = new Date(2022, 2, 11, 9, 43, 1);
console.log(date);
console.log(typeof date); // Object

const strDate = date.toString();
console.log(strDate);
console.log(typeof strDate); // String 

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);

const strArr = arr.toString();
console.log(strArr);
console.log(typeof strArr);


// toString() method 재정의의 목적은 보다 객체의 정보를 잘 보여주기 위해서이다.
function Person(name, age, hp, gender) {
    this.name = name;
    this.age = age;
    this.hp = hp;
    this.gender = gender;
}
const p1 = new Person('홍길동', 20, '010-1111-2222', '남');
Person.prototype.toString = function() {
    return `info: ${this.name}(${this.age}/${this.gender}) hp: ${this.hp}`;
};
console.log(p1.toString());

// String.prototype.toString 재정의
String.prototype.toString = function() {return '재정의: '+this.valueOf()};

let str = 'toString을 재정의 해보자.';
console.log(str);
console.log(str.toString()); // 재정의: 가 붙어서 나온다.

// toString()을 사용하지 않아도 method를 사용하는 방법
let toStr = new String('toString을 사용하지 않고 사용되게 하는 방법');
alert(toStr);



// iterable 객체와 iterator 객체
// iterable 객체 규약
// for of를 사용하여 반복이 가능한 객체를 반복할 때 값이 열거되고 내부에는 *@@iterator method가 구현되어 있어야 한다.
// -> 반복이 가능한 객체(Array, String, Map, Set, argument...) == iterable 객체
// @@iterator method를 사용해서 규약을 지키면 사용자 정의 객체도 iterable 객체로 만들 수 있다.
// -> Symbol.iterator() == @@iterator
// -> iterable 객체마다 열거되는 방식이 다른데 이러한 차이를 공통화 하기 위해서 내부적으로 @@iterator method를 구현한다.
// -> chainning 상의 객체 중에서 하나가 속성으로 [Symbol.iterator] 키를 가져야 한다.
const strIter = 'KOREA';
const arrIter = [1, 2, 3, 4, 5];

for(let it of strIter) { // 일반적으로 사용하는 방법
    console.log(it);
}

// 내부 움직임
const strIterator = strIter[Symbol.iterator]();
const arrIterator = arrIter[Symbol.iterator]();
console.log(arrIterator); // Array Iterator
console.log(strIterator); // String Iterator

// iterator 규약에 따라서 next() method를 통해서 값이 하나씩 순차적으로 열거된다.
// value, done 두 가지 속성을 갖는다. -> value: 값(열거가 끝나면 undefined), done: false(열거가 끝나면 true)

console.log(strIterator.next()); // 한 개씩 열거
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next()); // undefined, true


// iterator 객체 직접 구현
let makeIter = {
    i: 1,

    // iterator 규약 1.
    [Symbol.iterator]: function() {
        return this;
    },

    // iterator 규약 2.
    next: function() {
        // next method는 객체를 return한다. 
        if(this.i < 5) {
            return {value: this.i++, done: false};
        }else {
            return {value: undefined, done: true};
        }
    }
}
const mIter = makeIter[Symbol.iterator]();
console.log(mIter.next());
console.log(mIter.next());
console.log(mIter.next());
console.log(mIter.next());
console.log(mIter.next());

// for(let i of mIter) { // for of 도 사용 가능.
//     console.log(i);
// }



// 다형성을 구현하기 위한 기본적인 구성
// 1. 상속 관계.
// 2. method 재정의(overriding)
// 3. 재정의 된 method 호출(prototype chainning에서 제일 먼저 찾게되는 method 호출)
// 부모 class에서 설계된 method를 자식 class에서 상속 받아서 구체적으로 어떻게 사용할 것인지 overriding해서 사용하는 개념이다.
// javascript에서는 상속받은 method에 대한 강제성이 없다. 그래서 자식 class에서 부모의 method를 재정의 하지 않아도 오류가 생기지 않는다.

// parent
class Animal {
    constructor(name) {
        this.name = name;
    }
    bark() {throw new Error('bark method를 재정의 하지 않았습니다.');}
}

// child
class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    bark() {return `${this.name}(${this.age}살)이/가 멍멍 짖다.`;}
}
class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    bark() {return `${this.name}(${this.age}살)이/가 야옹야옹 울다.`;}
}
class Horse extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    bark() {return `${this.name}(${this.age}살)이/가 히이이잉 울다.`;}
}

// 배열로 사용하는 방법
const animals = [new Dog('개', 6), new Cat('고양이', 3), new Horse('말', 8)];
for(let i of animals) {
    console.log(i.bark());
}


// function과 prototype 기반
// 인터페이스(interface) -> 설계, 설계도
// 상속받은 자식 class에서 method가 미구현되었다면 Error를 던져준다. -> 강제성 추가.
const Human = function(name) {
    this._name = name;
};
Human.prototype.move = function() {
    // 설계는 방향성만 제시하고 구현하지 않는다.
    // 자식 class에서 재정의 되지 않고 부모 class 까지 올라오면 Error를 던져준다.
    throw new Error('[move method가 overriding 되지 않았습니다.]'); 
};

// 구현
// Object로 class처럼 구현
// 자식 class에서 method를 구현하지 않으면 부모 class에서 Error를 던져 줌으로서 구현을 강제한다.
const Man1Impl = function(name, age) { // 관례적으로 상속받은 class에 implement(impl)을 붙여서 구분한다.
    Human.call(this, name); // class의 super()
    this._age = age;
};
Man1Impl.prototype = Object.create(Human.prototype);
Man1Impl.prototype.constructor = Man1Impl;

Man1Impl.prototype.move = function(args) {
    console.log(`${args}(${this._name}/${this._age})이 이동중입니다.`);
    return '터벅 터벅';
}

const m1 = new Man1Impl('홍길동', 20);
console.log(m1.move('남자1'));



// instanceof
// 객체가 특정 class의 instance 객체인지 확인
console.log(m1 instanceof Man1Impl); // true
console.log(m1 instanceof Human); // true
console.log(m1 instanceof Object); // true
