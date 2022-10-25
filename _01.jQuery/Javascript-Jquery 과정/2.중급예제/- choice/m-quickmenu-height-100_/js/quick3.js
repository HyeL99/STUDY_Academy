// JavaScript Document
$(document).ready(
	function(){
		
		var scrolly=$(window).height()/2-$("ul#quick").height()/2;
		var a=$("div#contents2").offset().top; //a값은 탭갤러리가 상단에서의  위치값
		var h=$(window).scrollTop();
		$(window).scroll(
			function(){
				h=$(window).scrollTop();//스크롤바의 위치값을 변수h에 스크롤될때마다 저장
				$("ul#quick").stop().animate({"top":h},1000);//변수scrolly값은 ul#quick의 수직중앙위치값
				/*if($(window).scrollTop()>a){
					$("ul#quick").stop().animate({"top":scrolly+a},1000);
				}*/
				console.log(h+"/"+$("ul#quick").offset().top);
			}

		);
		var iniauto;
		var auto=$("div#contents1").height();
		var htmlTop=$("html").scrollTop();
		console.log("초기문서높이값:"+htmlTop);	
			// 밑으로 next
			$("ul#quick li.prev a").click(
			function(){
				if(auto<$("div#contents1").height()){
					iniauto=0;
				}else{
					auto=auto-iniauto;
				  $("ul#quick").animate({"top":auto},1000);
				  $("html,body").animate({"scrollTop":auto},1000);
					}
				
			}
		);
		
		//위로 prev
		$("ul#quick li.next a").click(
			function(){
				iniauto=$(window).scrollTop();
				auto=$(window).scrollTop()+auto;
				console.log("다음클릭시 문서높이값:"+auto);	
				$("ul#quick").animate({"top":auto},1000);
				$("html,body").animate({"scrollTop":auto},1000);
			}
		);
		
	}
);