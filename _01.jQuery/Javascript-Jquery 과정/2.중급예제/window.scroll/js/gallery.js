// JavaScript Document

$(document).ready(
	function(){
		var n=1;
		var count=$("div ul li").length-1;
		var timer=setInterval(
			function(){
				if(n<5){
					$("div#web .small4 div.slide ul").animate({"left":"-=558px"},500);
					n+=1;
				}
				else{
					$("div#web .small4 div.slide ul").animate({"left":"0px"},500);
					n=1;
				}
			},2000
		);
		$("p.rightp").click(
			function(){
				clearInterval(timer);
				if(n>4){
						$("div ul").animate({"left":"0px"},500);
						n=1;
					}else{
						$("div ul").animate({"left":"-=558px"},500);
						n+=1;
					}
			}	
		);
		$("p.leftp").click(
			function(){
				clearInterval(timer);
				//이미지ul을 왼쪽으로 250애니메이션하라
				if(n>1){
				$("div#web .small4 div.slide ul").animate({"left":"+=558px"},500);
				n-=1;
				
				}else{
					$("div#web .small4 div.slide ul").animate({"left":"0px"},500);
					}
			}
		);	
	}
);