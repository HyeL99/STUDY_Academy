$(document).ready(function(){
	$("button").click(function(){   // #toglle 를 클릭하면 
	$("p").toggle(2000);              // p 태그가 2초 동안 사라짐 (처음에 p 가 보이는 상황이므로 
	});                               // 한 번 더  #toglle 를 클릭하면 p 태그가 2초 동안 나타남 -> 이 작업이 반복 됨
});



