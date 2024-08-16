// 준비 이벤트
$(() => {

    // 슬라이드 이미지
    let idx = 0;
    setInterval(autoSlide, 2000);
    function autoSlide() {
        // idx 0 -> 1 -> 2 -> 0
        (idx === 2) ? idx = 0 : idx++;
        // fade-in(나타내기) -> opacity:1
        // fade-out(사라지기) -> opacity:0
        // 1in, 0out -> 2in, 1out -> 0in, 2out
        $("#slide li").eq(idx).animate({ opacity: 1 }, 1000, function () {
            if (idx === 0) idx = 3;
            $("#slide li").eq(idx - 1).animate({ opacity: 0 }, 1000);
            if (idx === 3) idx = 0;
        });
    }

    // 모달 팝업

    // 공지사항의 첫 번째 li를 클릭하면
    $(".notice li").eq(0).click(() => {
        $("#modal").css({ display: "block" });
    });

    $("button").click(() => {
        $("#modal").css({ display: "none" });

    }); //모달 팝업 끝

});