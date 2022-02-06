'use strict'

// 객체의 속성이 변경, 수정되지 못하도록 하는 방법
// 1. 생성자 함수 내에서 const로 변수를 만든다.
// 2. get method를 만들어 준다.
// 3. 기존 호출 부분을 get method로 호출한다.

function Diagram(name, side) {
    // this.name = name; -> 기존의 방식: 쉽게 수정 변경이 가능하다.
    // this.side = side;

    let n = name;
    this.getName = () => n;

    const s = side;
    this.getSide = () => s;
}
Diagram.prototype.color = 'black';
Diagram.prototype.shape = function(){
    console.log(`${this.getSide()}개의 변으로 이루어진 ${this.getName()} 도형이다.`);
    // 기존 this.변수의 자리에 get method 사용.
};
let triangle = new Diagram('삼각형', 3);
//console.log(triangle.name);
//console.log(triangle.side);
console.log(triangle.getName()); // 기존 name의 자리에 getName method 사용.
console.log(triangle.getSide());
console.log('color:',triangle.color);
triangle.shape();

// result
// triangle.name = '오각형';
// console.log(triangle.name);
// 기존의 방식은 쉽게 변경이 가능하다.

// method 방식을 사용하면 바뀌지 않고 바꾸려고 하면 error가 나온다.
triangle.getName() = '홍길동';
console.log(triangle.getName()); // error