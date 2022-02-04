'use strict'

let test1 = ['k', 'o', 'r', 'e', 'a'];
let test2 = 'korea';

console.log(test1);

//spread 연산자
console.log(...test1);
console.log([...test2]);


//set 생성
let temp = new Set().add('x'); // 생성하면서 .add로 값을 추가 할 수 있다.


//set 추가
temp.add('a');
temp.add('b');
temp.add('c');


//set 삭제
temp.delete('b');
temp.clear(); //전부 삭제

temp.add('a');
temp.add('b');
temp.add('c');


//set 출력
console.log('----set----');
console.log(temp);
console.log(...temp);
console.log([...temp]);


//반복문
// 1. for문
console.log('----for문----');
for(let i=0; i<test1.length; i++){
    console.log(test1[i]);
}


// 2. forEach() method
console.log('----forEach()----');
test1.forEach(function(value, index, array) {
    // value, index, array를 받을 수 있다.
    console.log(`${value} [${index}]`);
});

// arrow function
console.log('----forEach() arrow----');
test1.forEach((value, index) => console.log(`${value} [${index}]`));


// 3. for in, for of
// 생성시 배열처럼 바로 추가 가능.
console.log('----Set 생성----');
let testSet = new Set(['a', 'b', 'c']).add('d');
testSet.add('e');

console.log(testSet);

console.log('----for in----');
for(let i in testSet) {
    console.log(i);
    // 아무것도 나타나지 않는다.
}

//for of와 forEach()로 전부 출력 할 수 있다.
console.log('----for문----');
for(let i=0; i<testSet.size; i++) {
    console.log(i);
}
// for문은 index?가 출력된다.

console.log('----for of----');
for(let i of testSet) {
    console.log(i);
}

console.log('----forEach----');
testSet.forEach((value) => {
    console.log(value);
});

// 4. Set의 다양한 method keys(), values(), entries()

// keys() : key만 반환.
// values() : value만 반환.
// entries() : key, value를 담은 배열 반환. ['key', 'value']
console.log('----Set keys----');
const keysIterator = testSet.keys();
// SetIterator 가 생성된다.

console.log(keysIterator);
console.log(keysIterator.next().value); // a
console.log(keysIterator.next().value); // b
console.log(keysIterator.next().value); // c
console.log(keysIterator.next().value); // d
console.log(keysIterator.next().value); // e
console.log(keysIterator.next().value); // undefined
// 하나씩 빼내어 사용하여 값을 모두 사용하면 빈 SetIterator 가 된다.
console.log(keysIterator);

console.log('----Set values----');
const valuesIterator = testSet.values();

console.log(valuesIterator);
console.log(valuesIterator.next().value); // a
console.log(valuesIterator.next().value); // b
// 하나씩 빼내어 사용하여 값을 모두 사용하면 빈 SetIterator 객체가 된다.
console.log(valuesIterator);

console.log('----entries----');
const testEntries = testSet.entries();

console.log(testEntries);
// 배열의 형태로 반환된다.
console.log(testEntries.next().value); // ['a', 'a'];
console.log(testEntries.next().value); // ['b', 'b'];
console.log(testEntries);