$(function(){
    let tasteUl = $("#taste").offset().top; //taste ul 의 위치값
    let tasteUlH = $("#taste").height()/3*2;
    let brandUl = $("#brand ul").offset().top;
    let brandUlH = $("#brand ul").height()/2;
    let articleT = $("#help article.card").offset().top;
    let articleH = $("#help article.card").height()/2;
    let buttonT = $("#service article.fnq div.fnq-header a").offset().top;
    let buttonH = $("#service article.fnq div.fnq-header a").height()/2;
    let cardUl = $("#service div.card-space").offset().top;
    let cardUlH = $("#service div.card-space").height()/2;

    let winH = $(window).height(); //브라우저의 높이값

    let tasteTop = tasteUl - winH + tasteUlH;
    let brandTop = brandUl - winH + brandUlH;
    let articleTop = articleT - winH + articleH;
    let buttonTop = buttonT - winH + buttonH;
    let cardTop = cardUl - winH + cardUlH;

    $('header').before("<span class='headerBack'></span>")
    $('.headerBack').css({
        "position":"fixed",
        "display": "block",
        "width":"100%",
        'height': '106px',
        'background':'transparent',
        'border-bottom':'0px',
        'left':'0',
        'top':'0',
        'z-index':'1',
    })
    $(window).on("scroll",function(){
        if($(window).scrollTop()>tasteTop){
            for(let i=0; i<6; i++){
                setTimeout(function(){
                    $("#taste ul li:eq("+i+")").addClass("up");
                },i*100);
            }
        }else{
            for(let i=0; i<6; i++){
                setTimeout(function(){
                    $("#taste ul li:eq("+i+")").removeClass("up");
                },i*100);
            }
        };

        if($(window).scrollTop()>brandTop){
            for(let i=0; i<6; i++){
                setTimeout(function(){
                    $("#brand ul li:eq("+i+")").addClass("up");
                },i*100);
            };
        }else{
            for(let i=0; i<6; i++){
                setTimeout(function(){
                    $("#brand ul li:eq("+i+")").removeClass("up");
                },i*100);
            };
        };

        if($(window).scrollTop()>articleTop){
            $("#help article.card").addClass("up");
        }else{
            $("#help article.card").removeClass("up");
        }

        if($(window).scrollTop()>buttonTop){
            $("#service article.fnq div.fnq-header a").addClass("up");
        }else{
            $("#service article.fnq div.fnq-header a").removeClass("up");
        }

        if($(window).scrollTop()>cardTop){
            $("#service div.card-space article").addClass("up");
        }else{
            $("#service div.card-space article").removeClass("up");
        }
        
        if($(window).scrollTop()>0){
            if($(window).width()<=768){
                $('.headerBack').css('height','81px');
            }else if($(window).width()<=1200){
                $('.headerBack').css('height','126px');
            }
            $('.headerBack').css({
                'background':'#fff',
                'border-bottom':'1px solid #dfebf9',
                'box-sizing':'border-box'
            })
        }else{
            $('.headerBack').css({
                'background':'transparent',
                'border-bottom':'0px'
            })
        }
    });
})