// JavaScript Document
$(document).ready(
	function(){
		$("div#top ul.top1>li ul").css("opacity","0");
		$("div#top ul.top1>li").hover(
			function(){
				$("div#top ul.top1>li ul").animate({"top":"30px","opacity":"1"},500);
			},
			function(){
				$("div#top ul.top1>li ul").css({"top":"40px","opacity":"0"});
			}
		);
	}
);