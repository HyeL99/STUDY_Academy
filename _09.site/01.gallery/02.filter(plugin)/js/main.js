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