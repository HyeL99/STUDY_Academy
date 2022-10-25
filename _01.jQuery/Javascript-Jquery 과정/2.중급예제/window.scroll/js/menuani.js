// JavaScript Document
$(document).ready(
	function(){
		$("div#menu>ul.menuul>li.m3>ul.pmenu").hide();
		$("div#menu ul.menuul li.m3 img").click(
			function(){
				//$("div#menu>ul.menuul>li.m3>ul.pmenu").animate({"right":"127px"},500);
				$("div#menu>ul.menuul>li.m3>ul.pmenu").show(100);
			}
		);
		$("div#menu>ul.menuul>li.m3>ul p").click(
			function(){
				//$("div#menu>ul.menuul>li.m3>ul.pmenu").animate({"right":"-127px"},500);
				$("div#menu>ul.menuul>li.m3>ul.pmenu").hide(100);
			}
		);
	}
);
