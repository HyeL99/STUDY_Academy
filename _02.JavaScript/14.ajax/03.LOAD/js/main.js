$(function(){
    $('nav a').click(function(e){
        e.preventDefault();
        const href = this.href;
        console.log(href);

        $(this).addClass('current');
        $(this).siblings('a').removeClass('current');

        $('#contentWrap').load(`${href} #content`).hide().fadeIn(1000);
    })
});