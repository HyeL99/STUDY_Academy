// JavaScript Document
$(document).ready(
	function(){
		var s=0;
		var sc=0;
		var w=$("div.reauto").width()/2;
		var n=0;
		var m=1;
		var firstul=$("div.reauto ul:first-child");
		var secondul=$("div.reauto ul:first-child + ul");
		var na=1;
		
		/* -------------자동슬라이딩----------------- */
			var auto=setInterval(function(){
				n=$("div.reauto").offset().left;
				if(s<4){
						$("div.reauto").animate({"left":-100*s+"%"},1000/na);
							s+=m;
							sc=s;
					}else{
						 n=0;
						 s=1;
						 $("div.reauto").css({"left":n},100);
						// $("div.reauto").append(firstul);
						 $("div.reauto").animate({"left":-100*s+"%"},1000);
						// s+=m;
						// sc=s;
						}
				if(n<-w){
					}
				},
			2000);
			

			/* NEXT 버튼 */
			$("p.after").click(
				function(){
					m=0; //자동슬라이딩을 멈추게 함 
					sc++; //1,2,3
					s=sc; // 클릭시 이동과 자동이동을 맞춤
					na=5;
					console.log("자동s값:"+s);
					if(sc>3){
						n=0;
						s=4;
						sc=1;
						$("div.reauto").css({"left":n});
						$("div.reauto").stop().animate({"left":"-=100%"},500);
						console.log("클릭sc값:"+sc);
					}else{
						$("div.reauto").stop().animate({"left":"-=100%"},500);
						console.log("클릭sc값:"+sc);
						
					}


				}
			);
			
			/* PREV 버튼 */
			$("p.before").click(
				function(){
					m=0;	
					na=5;
					console.log("이전클릭자동s값:"+s);
					if(sc<1){
						n=0;
						s=2;
						sc=0;
						//w=w+$("div.reauto ul li").width();
						$("div.reauto").prepend(secondul);
						$("div.reauto").css({"left":-w});
						$("div.reauto").stop().animate({"left":"+=100%"},500);
						console.log(-w);
						//$("div.reauto").animate({"left":-100*s+"%"},1000);
						console.log("이전클릭sc값:"+sc);
					}else{
						$("div.reauto").stop().animate({"left":"+=100%"},500);
						console.log("이전클릭sc값:"+sc);
					  sc--;	
						s=sc;
					}
				}
			);
			$("p").click(function(){
				clearInterval(auto);
			});
			$("p").mouseleave(function(){
				auto=setInterval(function(){
						n=$("div.reauto").offset().left;
						if(s<4){
								$("div.reauto").animate({"left":-100*s+"%"},1000/na);
									s+=m;
									sc=s;
							}else{
								n=0;
								s=1;
								$("div.reauto").css({"left":n},100);
								// $("div.reauto").append(firstul);
								$("div.reauto").animate({"left":-100*s+"%"},1000);
								// s+=m;
								// sc=s;
								}
						if(n<-w){
							}
						},
					2000);
			});
			$("div.reauto").mouseenter(
				function(){
					m=1;
					na=1;
				}
			);
			

	}
);