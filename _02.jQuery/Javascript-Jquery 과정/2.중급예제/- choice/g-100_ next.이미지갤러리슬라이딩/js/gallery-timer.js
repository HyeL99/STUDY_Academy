// JavaScript Document
$(document).ready(
	function() {
		var n=1;
		var count=$("div ul li").length-1;
		//$("div ul li").css("opacity","0");
		//$("div ul li:eq(0)").css("opacity","1");
		//alert(count);
		$("div").append("<p class='prev'>이전보기</p>")
		.append("<p class='next'>보기</p>");

		//var timer=setInterval(
//			function(){
//				if(n<3){
//				$("div ul").animate({"left":"-=100%"},500);
//				n+=1;
//				}else{
//					$("div ul").animate({"left":"0"},500);
//					n=1;
//					}
//			},2000
//		);
		var timer=setInterval(
			function(){
				if(n<3){
				$("div ul").animate({"left":"-=100%"},500);
				n+=1;
				}else{
					$("div ul").animate({"left":"0"},500);
					n=1;
					}
			},2000
		);
		// 다음보기
		$("p.next").click(
			function(){
				clearInterval(timer); /*claerInterval()안에는 setInterval()명령덩어리를 배치해야 한다. setInterval()명령덩어리를 변수에 넣어서 그 변수명을 clearInterval()안에 넣어야 한다*/
				if(n>2){
						$("div ul").animate({"left":"0px"},500);
						n=1;
					}else{
					$("div ul").animate({"left":"-=100%"},500);
					n+=1;
					}
			}	
		);
		// 이전버튼
		$("p.prev").click(
			function(){
				clearInterval(timer);
				//이미지ul을 왼쪽으로 250애니메이션하라
				if(n>1){
				$("div ul").animate({"left":"+=100%"},500);
				n-=1;
				
				}else{
					$("div ul").animate({"left":"0px"},500);
					}
			}
		);
		
		$("ul.sm li:eq(0)").click(
				function(){
					$("div ul").animate({"left":"0"},500);
					n=1;
				}
		);
		$("ul.sm li:eq(1)").click(
				function(){
					$("div ul").animate({"left":"-250px"},500);
					n=2;
				}
		);
		$("ul.sm li:eq(2)").click(
				function(){
					$("div ul").animate({"left":"-500px"},500);
					n=3;
				}
		);
		$("div.big").hide();
		$("div ul li:first img").click(
			function(){
			$("div.big div.inimg").html("<img src='img/w1.jpg' />");
			//$("div.big").html("<a class='close'>닫기</a>");
			$("div.big div.inimg").append("<a class='close'>닫기</a>");
			$("div.big a").text("close");
			$("div.big").fadeIn(500);
			$("div.all").css("opacity",0.5);
			}
		);
	}
);