window.addEventListener("DOMContentLoaded", () => {

    // 모바일 버튼(햄버거 버튼 모양) 모션 처리와 헤더 등장 모션

    // 요소 찾기
    const nav = document.querySelector("nav");
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");

    // 이벤트 처리
    collapsedMenuIcon.onclick = () => {
        // event.currentTarget는 이벤트 함수내에서 객체 자신을 가리킨다.
        // 함수 호출
        btnMotion(event.currentTarget);
    };

    // 호이스팅
    // 함수 선언(정의)
    function btnMotion(x) {
        /* 
            classList.add("선택자"); -> 선택자 추가
            classList.remove("선택자"); -> 선택자 제거
            classList.toggle("선택자"); -> 선택자를 추가 또는 제거
        */

        //햄버거 버튼: x 에서 트리플바 -> x로 바뀜
        //또 누르면 x ->  트리플바
        // x객체가 change가 있으면 제거, 아니면 추가
        x.classList.toggle("change");

        //nav 태그에 change가 추가
        nav.classList.toggle("change")
    }

});