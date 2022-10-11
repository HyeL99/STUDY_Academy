// JavaScript Document

$(document).ready(
	function(){
		//$("ul.top1 li:first-child").css("background","red");
		//$("ul.top1>li:first-child").hover(
//			function(){
//				$("ul.top1>li:first-child ul").fadeIn(500);
//			},
//			function(){
//				$("ul.top1>li:first-child ul").hide(1);
//			}
//		);
//		
//		$("ul.top1>li:nth-child(2)").hover(
//			function(){
//				$("ul.top1>li:nth-child(2) ul").fadeIn(500);
//			},
//			function(){
//				$("ul.top1>li:nth-child(2) ul").hide(1);
//			}
//		);
//		
//		$("ul.top1>li:nth-child(3)").hover(
//			function(){
//				$("ul.top1>li:nth-child(3) ul").fadeIn(500);
//			},
//			function(){
//				$("ul.top1>li:nth-child(3) ul").hide(1);
//			}
//		);
//		
//		$("ul.top1>li:nth-child(4)").hover(
//			function(){
//				$("ul.top1>li:nth-child(4) ul").fadeIn(500);
//			},
//			function(){
//				$("ul.top1>li:nth-child(4) ul").hide(1);
//			}
//		);


	$("ul.top1>li:first-child").hover(
			function(){
				$("ul.top1>li:first-child ul").animate({left:"-25px"},500);
				$("ul.top1>li:first-child ul").fadeIn(500);
				
			},
			function(){
				$("ul.top1>li:first-child ul").animate({left:"-30px"},1);
				$("ul.top1>li:first-child ul").hide(1);
				
			}
		);
		
		$("ul.top1>li:nth-child(2)").hover(
			function(){
				$("ul.top1>li:nth-child(2) ul").fadeIn(500);
			},
			function(){
				$("ul.top1>li:nth-child(2) ul").hide(1);
			}
		);
		
		$("ul.top1>li:nth-child(3)").hover(
			function(){
				$("ul.top1>li:nth-child(3) ul").fadeIn(500);
			},
			function(){
				$("ul.top1>li:nth-child(3) ul").hide(1);
			}
		);
		
		$("ul.top1>li:nth-child(4)").hover(
			function(){
				$("ul.top1>li:nth-child(4) ul").fadeIn(500);
			},
			function(){
				$("ul.top1>li:nth-child(4) ul").hide(1);
			}
		);
	}
);
