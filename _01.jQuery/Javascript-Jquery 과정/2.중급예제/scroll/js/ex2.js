$(document).ready(function(){
$(".thumbs em").hide();
$(".thumbs a").click(function(){
		$("#caption").remove();
		var path = $(this).attr("href");
		$("#largeImg > img").attr({ src: path });
		var msg = $(this).next("em").text();  /* next(em) 다음 형제 노드 중 em 노드만 선택*/
	
	$("#largeImg").append("<div id='caption'></div>");
	$("#largeImg #caption").text(msg);
	//console.log($("#largeImg #caption").css("height"));
	var posy=$("#largeImg #caption").height()+25; /* 자목의 높이는 순수 콘텐츠의 높이 이므로 여기에 캡션과 라지 이미지의
	 마진, 패딩, 보더등이 적용 된 값을 적용해 줘야 함. 지금은 캡션의 패딩이 위, 아래 10px에 라지 이미지의 패딩 아래가 5 */
	$("#largeImg #caption").animate({top:"-="+posy+"px"},300)  /* 캡션의 top 위치를 현재 위치에서 캡션의 높이에 25를 더한
	값까지 0.3초만에 자연스럽게 올림.*/
	return false;
});
});
