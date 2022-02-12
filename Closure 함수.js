'use strict'

// Closure 함수
// 외부에 있는 변수가 내부 함수와 외부 함수를 호출한 후에도 종료되지 않고 계속 참조하는 것.
// -> 외부의 변수가 내부의 함수와 끊이지 않고 연결고리를 계속 이어가는 것.

// 1. 외부 함수에서 내부 함수 자체를 return.
// 2. 외부 함수를 받을 변수 지정.
// -> 변수가 내부 함수를 계속해서 참조하게 되어 함수가 종료되지 않는다.


// 실행할 때마다 asciiNum이 증가하도록 만들기.
// (1)
const external1 = () => {
    let asciiNum = 65;
    
    let internal = () => {
        let char_ = String.fromCharCode(asciiNum);
        console.log(char_, asciiNum++); // internal 함수에는 asciiNum이 없기 때문에 상위에서 변수를 찾아서 가져온다.
    }
    internal();
}
external1(); // A 65
external1(); // A 65
// fail
console.log('-----------------------');

// (2)
// 함수형 programming에서는 return 해주는 것이 좋다.
const external2 = () => {
    let asciiNum = 65;
    
    let internal = () => {
        let char_ = String.fromCharCode(asciiNum);
        return `${char_} ${asciiNum++}`;
    }
    return internal();
}
console.log(external2()); // A 65
console.log(external2()); // A 65
// fail
console.log('-----------------------');

// (3)
// 함수 자체를 반환함으로서 함수가 종료되지 않고 계속 참조하게 된다.
const external3 = () => {
    let asciiNum = 65;

    let internal = () => {
        let char_ = String.fromCharCode(asciiNum);
        return `${char_} ${asciiNum++}`;
    }
    return internal;
}
// 연결고리가 계속 남도록 함수 자체를 return 받고 그 함수를 받은 변수를 계속해서 재실행되게 한다.
// 변수가 내부 함수를 반환시킨 외부 함수를 받으면 그 변수가 계속해서 내부 함수를 참조하게 된다.
// Garbage Collector는 변수가 참조하고 있는 함수는 수집하지 않기 때문에 수집대상에서 제외된다.
// 그래서 내부 함수는 변수에 의해 호출될 수 있다.
const resetExternal = external3(); // 가장 중요한 부분!
console.log(resetExternal()); // A 65
console.log(resetExternal()); // B 66
console.log(resetExternal()); // C 67


// 1초 단위로 1초씩 증가하는 closure counter
const out = () => {
    let count = 0;
    let internal = () => count++;
    return internal;
}
const closureCount = out();
// setInterval(() => console.log(closureCount()), 1000);


// button을 click하면 count
const btn = document.querySelector('#btn');
const p = document.querySelector('#cnt');

const pCount = () => {
    let cnt = 1;
    let internal = () => cnt++;
    return internal;
}
const pCounting = pCount();
// btn.addEventListener('click', () => {
//     p.innerHTML = pCounting();
// });


// li 태그에서 closure
const li = document.querySelectorAll('li');
// click event
li.forEach((value, index) => {
    li[index].addEventListener('click', () => {
        console.log(`${index+1}번째 list 입니다.`);
    });
});


// li 태그를 만들어 자동화
const makeList = (li) => {
    let ul = '<ul>';
    for(let i=0; i<li.length; i++) {
        ul += '<li>'+ li[i] + '</li>';
    }
    ul += '</ul>';
    return ul;
};
const animal = ['강아지', '고양이', '말', '호랑이', '코끼리'];
const animalList = makeList(animal);

// li 출력
document.body.innerHTML = animalList;

// click event
const list = document.querySelectorAll('li');

list.forEach((value, index) => {
    list[index].addEventListener('click', () => {
        console.log(`${index+1}번째 ${animal[index]} 입니다.`);
    });
});