// JavaScript Document
$(document).ready(
		function(){
				
				//$(".top1>li").mouseOut(
//					function(){
//						$(".top1>li.m1 ul").stop();
//						}
//					);

				$(".top1>li.m1").hover(
				
					function(){
						$(".top1>li.m1 ul").hide().slideDown(500);
						},
				   function(){
						$(".top1>li.m1 ul").slideUp();
						}	
				);
				
				$(".top1>li.m2").hover(
				
					function(){
						$(".top1>li.m2 ul").hide().slideDown(500);
						},
					function(){
						$(".top1>li.m2 ul").slideUp();
						}
						
				);
				
				$(".top1>li.m3").hover(
				
					function(){
						$(".top1>li.m3 ul").hide().slideDown(500);
						},
					function(){
						$(".top1>li.m3 ul").slideUp();
						}
						
				);
				
				$(".top1>li.m4").hover(
				
					function(){
						$(".top1>li.m4 ul").hide().slideDown(500);
						},
					function(){
						$(".top1>li.m4 ul").slideUp();
						}
						
				);
				
			}
	);