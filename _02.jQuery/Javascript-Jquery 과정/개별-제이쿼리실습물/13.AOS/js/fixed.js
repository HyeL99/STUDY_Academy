// 대메뉴 스크롤 고$()
$(document).ready(
  function(){
    var w=$(window).scrollTop();
    var aboutT=$("#about").offset().top;
    $(window).scroll(
      function(){
        w=$(window).scrollTop();
        if(w>=aboutT){
          $(".gnb").addClass("fixed");
        }
        if(w<aboutT){
          $(".gnb").removeClass("fixed");
        }

      }
    );
  }
);
// 대메뉴 클릭시 페이지 스크롤링
$(document).ready(
  function(){
   var pageS=[];
    pageS[0]=$("#about").offset().top;
    pageS[1]=$("#porfolio").offset().top;
    pageS[2]=$("#contact").offset().top;
    var st=$(window).scrollTop();
  var i;
   $(".gnb li a").click(
     function(){
       i=$(this).attr("data-top");
       $("html,body").animate({scrollTop:pageS[i]},1000);
       return false;
     }
   );
   $(window).scroll(
     function(){
       st=$(window).scrollTop();
       if(st==pageS[1]){
         $("#porfolio h2").addClass("portani");
       }
     }
   );

  }
);
