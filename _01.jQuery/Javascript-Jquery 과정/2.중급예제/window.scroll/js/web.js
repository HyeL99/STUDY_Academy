// JavaScript Document
$(document).ready(
	function(){
		var n=1;
		var count=$("ul li").length-1;
		//$("div ul li").css("opacity","0");
		//$("div ul li:eq(0)").css("opacity","1");
		//alert(count);
		//alert("제이쿼리 활용");
		var timer=setInterval(
			function(){
				if(n<5){	
					$("ul").animate({"left":"-=558px"},500);
					n+=1;
				}else{
					$("ul").animate({"left":"0px"},500);
					n=1;
					}
			},2000
		);
		$("p").click(
			function(){
				clearInterval(timer);
				if(n>count){
					$("ul").animate({"left":"0px"},500);	
					n=1;
				}
				else{
					$("ul").animate({"left":"-=558px"},500);
					n+=1;
				}
			}
			//function(){
//				if(n<3){
//					$("div ul").animate({"left":"-=250px"},500);	
//					n+=1;
//				}
//				else if(n>2){
//					$("div ul").animate({"left":"0px"},500);
//					n=1;
//				}
//			}
		);
		$("p").before("");
		$("p.prev").click(
			function(){
				clearInterval(timer);
				if(n>1){
				$("ul").animate({"left":"+=558px"},500);
				n-=1;
				}else{
					$("ul").animate({"left":"0px"},500);
					}
			}
		);
		//$("p").after("<p>이전보기</p>");
		$("ul.sm li:first-child").click(
			function(){
				clearInterval(timer);
				$("div#web ul").animate({"left":"0px"},500);
				n=1;
			}
		);
		$("ul.sm li:nth-child(2)").click(
			function(){
				clearInterval(time);
				$("div#web ul").animate({"left":"-558px"},500);
				n=2;
			}
		);
		$("ul.sm li:nth-child(3)").click(
			function(){
				clearInterval(timer);
				$("div#web ul").animate({"left":"-1116px"},500);
				n=3;
			}
		);
			$("div.big").hide();
		$("div ul li:first img").click(
			function(){
				clearInterval(timer);
				//$("div.big div.inimg").fadeIn();
				$("div.big div.inimg").html("<img src='img/w1.jpg' />"); //html은 교체
				$("div.big div.inimg").append("<a class='close'>닫기</a>"); //append는 추가
				$("div.big a").text("close"); //text 글자 교체
				$("div.big").fadeIn(500);
				$("div.all").css("opacity",0.5);
			}
		);
	}
);