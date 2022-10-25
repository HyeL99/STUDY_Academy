$(function(){
	var n=0 // var 는 변수(그릇)선언 : 변수란 데이터를 담는 그릇
	$("p").click(
		function(){
			n+=1	
			if(n==3){  //  == 같다
				//$("ul").css("left","0px");
				$("div ul").animate({left:"0px"},500);	
				n=0
				
			}else{
				$("div ul").animate({left:"-=250px"},500);
			}
		}
	);
	
	$("ul.sm li:first-child").click(
		function(){
				$("div ul").animate({left:"0px"},500);	
		}
	);
	
	$("ul.sm li:nth-child(2)").click(
		function(){
				$("div ul").animate({left:"-250px"},500);	
		}
	);
	
	$("ul.sm li:nth-child(3)").click(
		function(){
				$("div ul").animate({left:"-500px"},500);	
		}
	);
	
	
  }
);