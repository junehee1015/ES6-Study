'use strict'

// onclick
// 1. 하나의 callback 함수(listener)만 등록할 수 있다.
// 2. 호환성이 좋다.
// 3. click시 구현 될 기능(function)만 수행한다.
// 4. event handler가 여러개일 때 나중에 작성한 코드만 실행된다.

// addEventListener
// 1. 여러개의 callback 함수(listener)를 등록할 수 있다.
// 2. 대부분의 모던 브라우저가 지원된다.
// 3. event handler가 여러개이면 순차적으로 실행된다.
// 4. 3번째 parameter 값으로 버블링, 캡쳐링 등을 설정할 수 있다.(default = false)

//    false -> 버블링: event가 발생한 요소에서 window까지 event를 전파(Propagation)한다.
//                  -> 자식 객체 => 부모 객체, 즉 상위로 전파한다.

//    true -> 캡쳐링: 부모 객체 => 자식 객체, 즉 하위로 전파한다.
//    event.stopPropagation: 다음 버블링 또는 캡쳐링을 멈춘다.



// 구버전 브라우저 지원 등 호환성을 고려해야 한다면 -> onclick
// 아니면 addEventListener

window.onload = () => {
    const div = document.querySelector('#div_btn');
    const p = document.querySelector('#p_btn');

    div.addEventListener('click', () => {
        alert('div click');
    });
    
    p.addEventListener('click', () => {
        alert('p click');
        event.stopPropagation();
    });
    // p tag를 click하면 버블링 때문에 div의 event도 실행된다.
    // 하지만 event.stopPropagation method를 사용하면 버블링되지 않는다.
}