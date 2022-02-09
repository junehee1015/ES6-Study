'use strict'

// constructor(생성자)
// 1. instance 객체를 생성할 때 제일 먼저 실행된다.
// 2. 생성되는 객체의 초기화를 담당한다.
// 3. class 내에 constructor method는 오직 1개여야 한다. (2개 이상 Error)

// constructor method는 생략이 가능하다.
// class에 constructor() {} 한 것과 동일하다.
// -> 객체 생성시 초기화를 해야한다면 생략 X
class Person {
    // constructor() {} -> 작성 한 것과 마찬가지
}
const p1 = new Person();



// 상속(inheritance)
// 1. 부모가 가진 자원을 그대로 상속받아 자식 class를 생성 및 확장하여 만들 수 있다. (extends)
// 2. 부모로부터 물려받은 것을 그대로 사용해도 되고, 자식이 재정의해서 사용하는 것도 가능하다.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hunt() {
        return `${this.name}(가/이) 먹이를 사냥합니다.`
    }
    eat() {
        return `${this.name}(가/이) 먹이를 먹습니다.`
    }
}

class Tiger extends Animal {
    // 재정의(overriding)
    eat() {
        return `${this.name}가 맛있게 먹습니다.`;
    }
}
const t1 = new Tiger('호돌이', 5);
console.log(t1.name);
console.log(t1.age);
console.log(t1.age);
console.log(t1.eat());



// super()
class KindOfAnimal {
    constructor(group) { 
        this.group = group;
    }
    getGroup() {
        return this.group;
    }
    run() {}
    eat() {}
    sleep() {}
    bark() {return `짖다.`;}
}
class Mammal extends KindOfAnimal {
    constructor(name, finger, toe, eyesight) {
        super(Mammal.name); // 값을 넣어주어야 부모 class에 전달이 된다.
        // 1. 자식 class 생성자 내에서 부모 class의 생성자를 호출해주어야 한다.
        //    -> 자식 class는 부모 class에서 this의 값을 할당하는 일을 부모 class에서 처리하기 때문에 super()를 사용해야 한다.
        // 2. 부모 class에서 참조 해야하기 때문에 this 보다 super가 당연히 먼저 호출되어야 한다. (아니면 Error)
        this.name = name;
        this.finger = finger;
        this.toe = toe;
        this.eyesight = eyesight;
    }
    bark() {
        return '포효하며';
    }
    hunt() {
        return `${this.name}(${this.group})이/가 ${this.bark()} 사냥한다.`;
        // 1. super.method: 자식 class에서 method를 재정의 해도 부모의 method를 그대로 사용할 수 있다.
    }
}
const mam1 = new Mammal('호랑이', 10, 10, 1.5);
console.log(mam1.name);
console.log(mam1.getGroup());
console.log(mam1.hunt());

// 속성 출력
console.log(Object.getOwnPropertyNames(mam1)); // property
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1))); // method



// Static(정적) method
// 해당 method 앞에 static 붙이기 -> 따로 instance 객체를 생성하지 않아도 method 사용 가능
// -> class명.method
// 반대로 intance 객체를 통해서는 method를 사용할 수 없다.
// -> 즉, instance 객체에 따라서 바뀌지 않는 고정된 method이다.
class Athlete {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    rest() {
        console.log('휴식하다.');
    }
    static sleep() {
        console.log('잠자다.');
    }
}
const a1 = new Athlete('안정환');
console.log(a1.name);
console.log(a1.getName());
a1.rest();
// a1.sleep(); // Error
// class명으로 호출해야한다.
Athlete.sleep();

// instance 객체로 호출이 안되는 이유
// class의 prototype 속성은 -> prototype 객체 참조 / prototype 객체의 constructor는 -> class를 참조
// -> method는 prototype 객체의 constructor에 저장되지만 static method는 class의 prototype 속성에 저장되기 때문에 호출이 안된다.


// instance 객체로 호출하는 방법
// prototype 객체의 constructor는 class를 참조하기 때문에
// instance 객체.constructor.static method 를 해주면 instance 객체로도 호출할 수 있다.
a1.constructor.sleep();



// static method의 상속
class Add {
    static plus(x) {
        x = x || 100;
        return x + 1000;
    }
}
class ChildAdd extends Add {
    // 자식 class에서 static method는 overriding이 안된다.
    static plus(x) {
        // 부모의 method를 쓰기 위해 super.method
        return super.plus(x)+super.plus(x);
    }
}
console.log(Add.plus());
console.log(Add.plus(500));
console.log(ChildAdd.plus());
console.log(ChildAdd.plus(50));

// method를 사용할 때에도 constructor로 호출해야한다.
const add = new Add();
console.log(add.constructor.plus(1000));
const cAdd = new ChildAdd();
console.log(cAdd.constructor.plus(1000));

