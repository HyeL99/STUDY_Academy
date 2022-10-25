/*문서가 준비되면 실행해라*/
/*선택자.메서드();*/
$(document).ready(
		function(){
			$("ul.top1>li ul").hide();
			/*
			$("ul.top1>li:eq(0)").hover(
				function(){
						$("ul.top1>li:eq(0) ul").css("opacity",0);
						$("ul.top1>li:eq(0) ul").css({top:"35px"});
						$("ul.top1>li:eq(0) ul").show().animate({top:'55px',opacity:1},500);
				},
				function(){
					$("ul.top1>li:eq(0) ul").animate({top:'35px',opacity:0});
				}
			);
			*/
			$("ul.top1>li").hover(
				function(){
					/*
					$(this).children("ul").css("opacity",0);
					$(this).children("ul").css({top:"35px"});
					$(this).children("ul").show().animate({top:'55px',opacity:1},500);
					*/
					$(this).children("ul").css("opacity",0).css({top:"35px"}).show().animate({top:'55px',opacity:1},500);
				},
				function(){
					$(this).children("ul").animate({top:'35px',opacity:0});
				}
			);
			/*	
			$("ul.top1>li:eq(1)").hover(

				//()안에 명령을 위치시킬때는 function(){}을 배치한다..
					function(){
							$("ul.top1>li:eq(1) ul").css("opacity","0");
							$("ul.top1>li:eq(1) ul").css({top:"35px"});
							$("ul.top1>li:eq(1) ul").show().animate({top:'55px',opacity:1},500);
						},
						function(){
							$("ul.top1>li:eq(1) ul").animate({top:'35px',opacity:0},400);
						}
					
				);
			$("ul.top1>li:eq(2)").hover(

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
			*/
				
		}
	);