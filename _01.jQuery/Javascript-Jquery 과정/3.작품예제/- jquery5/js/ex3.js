$(document).ready(function(){
var showImg, nextImg;
function fadeInOut(){
	showImg = $(".fadeShow img:eq(0)");
	nextImg = $(".fadeShow img:eq(1)")
	nextImg.addClass("active");
	nextImg.css("opacity","0")
		.animate({opacity:1},1000, function(){
			$(".fadeShow").append(showImg);
			showImg.removeClass("active");
		});
}
var timer=setInterval("fadeInOut()",3000);
});
