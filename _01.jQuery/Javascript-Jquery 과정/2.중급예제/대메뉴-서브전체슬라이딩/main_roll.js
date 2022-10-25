var intervalVisual;
var rollDuration = 5000;
var visualNum = 0;
var maxVisual;
var maxVisual = 2;

jQuery(window).load(function(){
	intervalVisual = setInterval('visualRolling()', rollDuration);

	jQuery('.controller').find('.btns').find('a').eq(1).click(function(){
		clearInterval(intervalVisual);
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 700, "easeOutQuart");
		jQuery(".productBt").eq(visualNum).stop().css('display', 'none');
		visualNum++;
		if(visualNum > maxVisual) visualNum = 0;
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 0, "easeOutQuart");
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"0"}, 700, "easeOutQuart");
		jQuery(".productBt").eq(visualNum).stop().css('display', 'block');
		intervalVisual = setInterval('visualRolling()', rollDuration);
	});

	jQuery('.controller').find('.btns').find('a').eq(0).click(function(){
		clearInterval(intervalVisual);
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 700, "easeOutQuart");
		jQuery(".productBt").eq(visualNum).stop().css('display', 'none');
		visualNum--;
		if(visualNum < 0) visualNum = maxVisual;
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 0, "easeOutQuart");
		jQuery(".visualBg").eq(visualNum).stop().animate({left:"0"}, 700, "easeOutQuart");
		jQuery(".productBt").eq(visualNum).stop().css('display', 'block');
		intervalVisual = setInterval('visualRolling()', rollDuration);
	});

	if(jQuery(window).height()>768){
		//jQuery(".controller").stop().animate({paddingTop: "237px", paddingBottom: "46px"},  700, "easeOutQuart");
		jQuery(".controller").css("padding-top", "237px");
		jQuery(".controller").css("padding-bottom", "46px");
	}else{
		//jQuery(".controller").stop().animate({paddingTop: "0", paddingBottom: "150px"}, 700, "easeOutQuart");
		jQuery(".controller").css("padding-top", "0");
		jQuery(".controller").css("padding-bottom", "150px");
	}

	jQuery(window).resize(function(){
		if(jQuery(window).height()>768){
			jQuery(".controller").stop().animate({paddingTop: "237px", paddingBottom: "46px"},  700, "easeOutQuart");
		}else{
			jQuery(".controller").stop().animate({paddingTop: "0", paddingBottom: "150px"}, 700, "easeOutQuart");
		}
	});
});

function visualRolling(){
	jQuery(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 1700, "easeOutQuart");
	jQuery(".productBt").eq(visualNum).stop(true, true).fadeOut(0);
	visualNum++;
	if(visualNum > maxVisual) visualNum = 0;
	//console.log(visualNum)
	jQuery(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 0, "easeOutQuart");	
	jQuery(".visualBg").eq(visualNum).stop().animate({left:"0%"}, 1700, "easeOutQuart");
	jQuery(".productBt").eq(visualNum).stop(true, true).fadeIn(0);
}