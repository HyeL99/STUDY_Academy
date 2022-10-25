const $hCon = document.querySelector('.header_container');

function toggleActive(){
    $hCon.classList.toggle('active');
}

$(function(){
    $('.gnbList ul').slideUp();
    if($(window).width() > 1169){
        $('.gnbList ul').slideDown();
        $('.header_container').removeClass('active');
    } else {
        $('.gnbList').click(function(){
            $(this).toggleClass('active');
            $(this).children('ul').slideToggle();
            $(this).siblings('li').removeClass('active');
            $(this).siblings('li').children('ul').slideUp();
        });
    };

    $('#keepBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings('button').removeClass('active');
        $('.eventContent ul').addClass('keep');
        $('.eventContent ul').removeClass('end');
        console.log('#keepBtn')
    });
    $('#endBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings('button').removeClass('active');
        $('.eventContent ul').addClass('end');
        $('.eventContent ul').removeClass('keep');
        console.log('#endBtn')
    });
});

$(window).resize(function(){
    if($(window).width() > 1169){
        $('.gnbList ul').slideDown();
        if($('.header_container').hasClass('active')){
            $('.header_container').css('left','0');
        }
    }else{
        $('.header_container').removeAttr('style');
        $('.gnbList:not(.active) ul').slideUp(0);
    }
})

function tirePaging(state){
    $('.tireList > li').hide();
    $('.buttonWrap button').removeClass('active');
    switch (state) {
        case "every" :
            $('.tireList li').show();
            $('.buttonWrap button.every').addClass('active');
            break;
        case "all" :
            $('.tireList li.all').show();
            $('.buttonWrap button.all').addClass('active');
            break;
        case "car" :
            $('.tireList li.car').show();
            $('.buttonWrap button.car').addClass('active');
            break;
        case "suv" :
            $('.tireList li.suv').show();
            $('.buttonWrap button.suv').addClass('active');
            break;
        case "summer" :
            $('.tireList li.summer').show();
            $('.buttonWrap button.summer').addClass('active');
            break;
        case "winter" :
            $('.tireList li.winter').show();
            $('.buttonWrap button.winter').addClass('active');
            break;
    }
}