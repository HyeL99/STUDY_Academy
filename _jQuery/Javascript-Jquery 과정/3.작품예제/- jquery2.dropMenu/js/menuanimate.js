/*문서가 준비되면 실행해라*/
/*선택자.메서드();*/
$(document).ready(
		function(){
			/*첫번째대메뉴li에 마우스를 올리면 실행해라*/
			$("ul.top1>li:eq(0)").hover(
				/*li:eq(0)는 첫번째위치한 li를 의미*/	
				//()안에 명령을 위치시킬때는 function(){}을 배치한다..
					function(){
							$("ul.top1>li:eq(0) ul").css("opacity","0");
							$("ul.top1>li:eq(0) ul").css({top:"35px"});
							$("ul.top1>li:eq(0) ul").animate({top:'55px',opacity:1},500);
						},
						function(){
							$("ul.top1>li:eq(0) ul").animate({top:'35px'});
						}
					
				);
			$("ul.top1>li:eq(1)").hover(
				/*li:eq(0)는 첫번째위치한 li를 의미*/	
				//()안에 명령을 위치시킬때는 function(){}을 배치한다..
					function(){
							$("ul.top1>li:eq(1) ul").css("opacity","0");
							$("ul.top1>li:eq(1) ul").css({top:"35px"});
							$("ul.top1>li:eq(1) ul").animate({top:'55px',opacity:1},500);
						},
						function(){
							$("ul.top1>li:eq(1) ul").animate({top:'35px'});
						}
					
				);
			$("ul.top1>li:eq(2)").hover(
				/*li:eq(0)는 첫번째위치한 li를 의미*/	
				//()안에 명령을 위치시킬때는 function(){}을 배치한다..
					function(){
							$("ul.top1>li:eq(2) ul").css("opacity","0");
							$("ul.top1>li:eq(2) ul").css({top:"35px"});
							$("ul.top1>li:eq(2) ul").animate({top:'55px',opacity:1},500);
						},
						function(){
							$("ul.top1>li:eq(2) ul").animate({top:'35px'});
						}
					
				);
			$("ul.top1>li:eq(3)").hover(
				/*li:eq(0)는 첫번째위치한 li를 의미*/	
				//()안에 명령을 위치시킬때는 function(){}을 배치한다..
					function(){
							$("ul.top1>li:eq(3) ul").css("opacity","0");
							$("ul.top1>li:eq(3) ul").css({top:"35px"});
							$("ul.top1>li:eq(3) ul").animate({top:'55px',opacity:1},500);
						},
						function(){
							$("ul.top1>li:eq(3) ul").animate({top:'35px'});
						}
					
				);
				
			}
	);