 //로드 이벤트
window.addEventListener("DOMContentLoaded", function () {
    //요소찾기
    const mbx = document.querySelector(".mbx");

    //스크롤이벤트
    window.addEventListener("scroll", function () {

        //스크롤양을 p요소에 넣기
        mbx.innerHTML = Math.floor(pageYOffset);

        // 조건 비교 (스크롤양 비교)
        if (p.innerHTML >= 400) {
            //.active 클래스를 추가
            mbx.classList.add("active")
        } 

    });
});