$(function(){
    $('.thumb').isotope({
        //option
        itemSelector:'.thumb_item',
        stagger: 50,    // 1 = 1ms
        transitionDuration: '0.2s',
        hiddenStyle: {
            opacity: 0,
        },
        visibleStyle: {
            opacity: 1,
        }
    });

    // 이미지팝업 - lightbox2 플러그인 이용
    lightbox.option({
        'resizeDuration': 500,  //리사이징 시간
        'wrapAround': true,  // 페이징 순환 여부 (팝업 세트 loop 여부)
        'fadeDuration': 100,    //페이지 변환시 페이드 시간
        'positionFromTop': 100, //팝업 위치, 위에서 떨어진 정도
        'showImageNumberLabel':false,   //이미지 라벨링 표시여부
    })

    const $btn = $('.nav ul li a'); //버튼 역할하는 nav a를 변수로

    $btn.click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
    });
    $('.btnAll').click(function(){
        $('.thumb').isotope({ filter: '.all' });
    })
    $('.btnWeb').click(function(){
        $('.thumb').isotope({ filter: '.web' });
    });
    $('.btnMobile').click(function(){
        $('.thumb').isotope({ filter: '.mobile' });
    });
    $('.btnMotion').click(function(){
        $('.thumb').isotope({ filter: '.motion' });
    });
    $('.btnAward').click(function(){
        $('.thumb').isotope({ filter: '.award' });
    });
})