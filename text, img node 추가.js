'use strict'

// DOM(Document Object Model)
// 문서 객체 모델 -> 웹 문서 또는 웹 태그와 관련된 객체들을 다룬다.
// HTML 요소들의 구조화된 표현

// 태그(tag) = 노드(node) -> element node = 객체(Object)
// DOM의 객체 구조는 'node tree'라고 표현한다.
// javascript를 이용하면 node를 추가하고 삭제하는 등 DOM 조작 작업을 할 수 있다.

// Text Node
// 1. createElement(): 원하는 태그 생성.
// 2. createTextNode(): 원하는 text를 변수에 저장.
// 3. appendChild(): 해당 객체를 붙인다.(합친다.)

window.onload = () => { // script 파일이 load가 되어졌을 때 실행
    
    // 1. Node 생성
    const p_node = document.createElement('p');
    // 2. Text Node 생성
    const p_text_node = document.createTextNode('Hellow Text Node~');
    // 3-1. elementt와 text node 붙이기 
    p_node.appendChild(p_text_node);
    // 3-2. body와 붙이기
    document.body.appendChild(p_node);
};


// Image Node
// 1. img node 생성
// 2. 속성 추가 -> 2가지 방식 (1) .  (2) setAttribute()
// 3. 해당 객체에 붙인다.

// 속성 추가 방식 (1) . 
window.onload = () => {
    // 1. img node 생성
    const img_node1 = document.createElement('img');
    // 2. 속성 추가
    img_node1.src = 'http://cdn.pixabay.com/photo/2020/11/07/13/07/waves-5720916_960_720.jpg';
    img_node1.width = 400;
    img_node1.height = 300;
    // 3. body에 붙이기
    document.body.appendChild(img_node1);
};

// 속성 추가 방식 (2) setAttribute()
// -> 장점으로는 사용자 정의 속성을 직접 만들어서 추가할 수 있다.
window.onload = () => {
    const img_node2 = document.createElement('img');

    img_node2.setAttribute('src', 'http://cdn.pixabay.com/photo/2020/11/07/13/07/waves-5720916_960_720.jpg');
    img_node2.setAttribute('width', 600);
    img_node2.setAttribute('height', 400);
    // 사용자 지정
    img_node2.setAttribute('addProperty', 'img1');

    document.body.appendChild(img_node2);
};



// innerHTML과 innerText
// innerText: 모든 값을 text로 삽입 -> HTML Tag 사용 불가


