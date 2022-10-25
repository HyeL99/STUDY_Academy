function menuTrigger() {
    $('.trigger').toggleClass('active');
    $('nav').slideToggle(400);
}
$(function(){
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
});