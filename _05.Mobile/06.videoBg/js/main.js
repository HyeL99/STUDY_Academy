function menuTrigger() {
    $('.trigger').toggleClass('active');
    $('nav').slideToggle(400);
}

// 화면 크기 조절 이벤트
$(window).resize(function(){
    let $winW = $(window).width(); //브라우저의 가로길이를 변수에 저장
    if($winW >= 768){
        $('nav').removeAttr('style');
    } else {
        if($('.trigger').hasClass('active')){
            $('nav').show();
        }
    }
});

// 스크롤 이벤트 (헤더)
$(window).scroll(function(){
    if($(window).scrollTop() == 0){
        $("#header_wrap").removeClass("scroll");
    }
    else if($(window).scrollTop() >= 100){
        $("#header_wrap").addClass("scroll");
    }
});

AOS.init();