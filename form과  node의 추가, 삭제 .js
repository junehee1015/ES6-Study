'use strict'

// form node
// 1. button click시 사용자 이름과 홈페이지 주소가 body에 추가
window.onload = () => {
    document.querySelector('#btn').addEventListener('click', () => {
        // 사용자 입력 값
        const user_name = document.querySelector('#user_name');
        const user_home = document.querySelector('#user_home');
        console.log(`${user_name.value} / ${user_home.value}`);

        // tag node 생성
        let a_node = document.createElement('a');
        a_node.href = user_home.value;

        // txt node 생성
        let a_txt = document.createTextNode(user_name.value);
        a_node.appendChild(a_txt);

        // list에 붙이기
        let memberList = document.querySelector('#memberList');
        let br = document.createElement('br');
        memberList.appendChild(a_node);
        memberList.appendChild(br);

        // input box 초기화
        user_name.value = "";
        user_home.value = "";
    });
};


// node 삭제
// 1.
window.onload = () => {
    document.querySelector('#delBtn1').addEventListener('click', () => {
        // 삭제하고자 하는 요소의 부모 요소 찾기
        let list1 = document.querySelector('#list1');
        // 삭제하고자 하는 요소 찾기
        let list1_p1 = document.querySelector('#list1_p1');
        // 요소 제거
        list1.removeChild(list1_p1);
    });
};

// 2.
window.onload = () => {
    document.querySelector('#delBtn2').addEventListener('dblclick', () => {
        // 삭제할 요소 찾기
        let list2_p1 = document.querySelector('#list2_p1');
        // 그 요소의 부모 찾기
        list2_p1.parentNode.removeChild(list2_p1);
    });
};


// 문자열 요소로 li 요소 삭제하기
window.onload = () => {
    function removeElement(text) {
        const li = document.querySelectorAll('li'); // querySelectorAll은 NodeList 이다.
        // 모든 li 선택
        li.forEach(value => {
            // 전달받은 text와 비교하여 대상 찾기
            if(value.innerText == text) {
                // 삭제 할 요소 찾기
                value.parentNode.removeChild(value);
            }
        });
            
    }
    document.querySelector('#memDelBtn').addEventListener('click', () => {
        removeElement('아무개');
    });
}
