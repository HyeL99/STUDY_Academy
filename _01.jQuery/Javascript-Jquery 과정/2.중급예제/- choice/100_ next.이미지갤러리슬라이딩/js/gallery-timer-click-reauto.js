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
    var m=0;
		var timer=setInterval(
			function(){
				console.log("자동n:"+n);
				if(n<3){
					  $("div ul").animate({"left":-100*n+"%"},2000);
						n+=m;
				}else{
					$("div ul").animate({"left":0},2000);
					n=1;
					}
			},4000
		);
	
		// 다음보기
		var nn;
		$("p.next,p.prev").hover(
			function(){
				nn=n;
				console.log("다음버튼nn:"+nn);
			}
		);

		$("p.next,p.prev").mouseleave(
			function(){
				n=nn;
				m=1;
			}
		);

		$("p.next").click(
			function(){
				m=0;
				nn++;
				if(nn>2){
						$("div ul").animate({"left":0},500);
						nn=0;
						n=nn;
					}else{
					$("div ul").animate({"left":"-=100%"},2000);		
					n=nn;
					console.log("클릭nn:"+nn);
					}
			}	
		);
		// 이전버튼
		$("p.prev").click(
			function(){
				m=0;
				nn--;
				//이미지ul을 왼쪽으로 250애니메이션하라
				if(nn<1){
					$("div ul").animate({"left":"0px"},2000);
					nn=0
					n=nn;
				}else{
					$("div ul").animate({"left":"+=100%"},2000);
					n=nn;
					}
			}
		);
		
		$("ul.sm li:eq(0)").click(
				function(){
					$("div ul").animate({"left":"0"},2000);
					n=1;
				}
		);
		$("ul.sm li:eq(1)").click(
				function(){
					$("div ul").animate({"left":"-250px"},2000);
					n=2;
				}
		);
		$("ul.sm li:eq(2)").click(
				function(){
					$("div ul").animate({"left":"-500px"},2000);
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