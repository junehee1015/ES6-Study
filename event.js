'use strict'

window.onload = () => { 
    // 1. isTrusted 속성
    // button이 사용자의 행위에 의해 클릭되었는지 확인
    // -> 사용자에 의해 클릭 되어지면 true
    // -> javascript method를 사용하여 event를 자동으로 실행시키면 false
    const btn = document.querySelector('button');
    btn.addEventListener('click', addMouseEvent);

    function addMouseEvent(e) {
        console.log(e);

        const trust = e.isTrusted;
        trust ? console.log(`${trust} -> 신뢰할 수 있습니다.`) : console.log(`${trust} -> 신뢰할 수 없습니다.`);

    }
    // dispatchEvent() method에 의해 자동 실행되면 isTrust는 false가 된다.
    const e = new Event('click');
    eventBtn.dispatchEvent(e); // button의 id를 바로 사용

    
    // 2. 버블링, 캡쳐링
    const spans = document.querySelectorAll('span');
    spans.forEach((value, index) => {
        value.addEventListener('click', (e) => {
            console.log(e.currentTarget.id); // id 이름
            console.log(e.currentTarget.className); // class 이름

        },
        //{capture: false} // default = false(버블링)
        true // 이렇게만 작성해줘도 캡쳐링이 된다.
        ); 
    });


    // 3. event 위임
    // event.target: 자식 객체 / 버블링의 가장 처음 요소 / 클린한 요소
    // event.currentTarget: 이벤트가 위임된 부모 객체
    const li = document.querySelectorAll('li');
    li.forEach((value, index) => {
        value.addEventListener('click', (e) => {
            console.log(`${index+1}번`);
            console.log(e.target.id); // li를 click하지만 target은 자식 요소인 img를 가르킨다.
            console.log(e.currentTarget); // 부모 객체인 li를 가르킨다.
        });
    });

    // 새로운 요소를 동적으로 추가했을 때의 event
    const animalList = document.querySelector('.animalList');
    animalList.addEventListener('click', (e) => {
        //e.target으로 자식 객체를 호출한다.
        console.log(e.target.id);
        console.log(e.target.className);

    });

    const liNode = document.createElement('li');
    const liText = document.createTextNode('동적으로 추가된 li');

    const imgNode = document.createElement('img');
    imgNode.src = '../img/tiger.jpg';
    imgNode.id = 'id_tiger';
    imgNode.className = 'class_tiger';

    liNode.appendChild(imgNode);
    animalList.appendChild(liNode);

};