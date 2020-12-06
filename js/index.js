$(document).ready(function () {

    var status1 = 0;
    var status2 = 0;
    var status3 = 0;
    var status4 = 0;
    var status5 = 0;
    var status6 = 0;
    var status7 = 0;
    // 1번 테이프
    $("#tape_1").on("click", function () {
        if (status1 == 0) {
            $("#tape_1").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status1 = 1;
        } else if (status1 == 1) {
            $("#tape_1").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status1 = 2;
        } else if (status1 == 2) {
            $("#tape_1").attr("src", "img/tape1.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status1 = 0;
        }
    })
    // 2번 테이프
    $("#tape_2").on("click", function () {
        if (status2 == 0) {
            $("#tape_2").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status2 = 1;
        } else if (status2 == 1) {
            $("#tape_2").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status2 = 2;
        } else if (status2 == 2) {
            $("#tape_2").attr("src", "img/tape2.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status2 = 0;
        }
    })

    // 3번 테이프
    $("#tape_3").on("click", function () {
        if (status3 == 0) {
            $("#tape_3").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status3 = 1;
        } else if (status3 == 1) {
            $("#tape_3").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status3 = 2;
        } else if (status3 == 2) {
            $("#tape_3").attr("src", "img/tape3.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status3 = 0;
        }
    })

    // 4번 테이프
    $("#tape_4").on("click", function () {
        if (status4 == 0) {
            $("#tape_4").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status4 = 1;
        } else if (status4 == 1) {
            $("#tape_4").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status4 = 2;
        } else if (status4 == 2) {
            $("#tape_4").attr("src", "img/tape4.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status5 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status4 = 0;
        }
    })

    // 5번 테이프
    $("#tape_5").on("click", function () {
        if (status5 == 0) {
            $("#tape_5").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status5 = 1;
        } else if (status5 == 1) {
            $("#tape_5").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status5 = 2;
        } else if (status5 == 2) {
            $("#tape_5").attr("src", "img/tape5.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_6").attr("src", "img/tape6.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status6 = 0;
            status7 = 0;
            // 여기까지
            status5 = 0;
        }
    })

    // 6번 테이프
    $("#tape_6").on("click", function () {
        if (status6 == 0) {
            $("#tape_6").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status7 = 0;
            // 여기까지
            status6 = 1;
        } else if (status6 == 1) {
            $("#tape_6").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status7 = 0;
            // 여기까지
            status6 = 2;
        } else if (status6 == 2) {
            $("#tape_6").attr("src", "img/tape6.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_7").attr("src", "img/tape7.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status7 = 0;
            // 여기까지
            status6 = 0;
        }
    })

    // 7번 테이프
    $("#tape_7").on("click", function () {
        if (status7 == 0) {
            $("#tape_7").attr("src", "img/a-side.png")
            $("#button").attr("src", "img/button2.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            // 여기까지
            status7 = 1;
        } else if (status7 == 1) {
            $("#tape_7").attr("src", "img/b-side.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            // 여기까지
            status7 = 2;
        } else if (status7 == 2) {
            $("#tape_7").attr("src", "img/tape7.png")
            $("#button").attr("src", "img/button1.png")
            // 강제 리셋
            $("#tape_1").attr("src", "img/tape1.png")
            $("#tape_2").attr("src", "img/tape2.png")
            $("#tape_3").attr("src", "img/tape3.png")
            $("#tape_4").attr("src", "img/tape4.png")
            $("#tape_5").attr("src", "img/tape5.png")
            $("#tape_6").attr("src", "img/tape6.png")
            status1 = 0;
            status2 = 0;
            status3 = 0;
            status4 = 0;
            status5 = 0;
            status6 = 0;
            // 여기까지
            status7 = 0;
        }
    })

    // 바깥 클릭시 그냥 초기화
    $(".blanc").on("click", function () {
        $("#tape_1").attr("src", "img/tape1.png")
        $("#tape_2").attr("src", "img/tape2.png")
        $("#tape_3").attr("src", "img/tape3.png")
        $("#tape_4").attr("src", "img/tape4.png")
        $("#tape_5").attr("src", "img/tape5.png")
        $("#tape_6").attr("src", "img/tape6.png")
        $("#tape_7").attr("src", "img/tape7.png")
        $("#button").attr("src", "img/button1.png")
        status1 = 0;
        status2 = 0;
        status3 = 0;
        status4 = 0;
        status5 = 0;
        status6 = 0;
        status7 = 0;
    })

})