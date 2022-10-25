function openNav(){
    $('nav').animate({'left':'0px'}, 500);
}
function closeNav(){
    $('nav').animate({'left':'-200px'}, 500);
}
$(function(){
    $(window).resize(function(){
        if($(window).width() >= 720){
            $('nav').removeAttr('style');   //스크립트로 적용된 css 요소 삭제
        }
    });
});