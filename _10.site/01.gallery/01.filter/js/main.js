$(function(){
    const $btn = $('.nav ul li a'); //버튼 역할하는 nav a를 변수로

    $btn.click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
    });
    $('.btnAll').click(function(){
        $('.all').show();
    })
    $('.btnWeb').click(function(){
        $('.all').hide();
        $('.web').show();
    });
    $('.btnMobile').click(function(){
        $('.all').hide();
        $('.mobile').show();
    });
    $('.btnMotion').click(function(){
        $('.all').hide();
        $('.motion').show();
    });
    $('.btnAward').click(function(){
        $('.all').hide();
        $('.award').show();
    });
})