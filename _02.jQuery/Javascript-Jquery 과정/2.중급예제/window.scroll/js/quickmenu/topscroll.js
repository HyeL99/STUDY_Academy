/*퀵메뉴 스크립트*/
var viewstart; // 위쪽 여백 (메뉴가 위에서 ''픽셀 떨어진 곳에 보여집니다) 
var viewscroll = 200; // 스크롤시 브라우저 위쪽과 떨어지는 거리
var viewbottom = 80; // 스크롤시 마지막 바닥값
var quickbase = 500; // 스크롤 시작위치
var activatespeed = 10; 
var scrollspeed = 20; 

var quicktimer;
var quick_obj;

function refresh_quick(){
	var quickstartpoint;
	var quickendpoint;
	bottomlimit = document.documentElement.scrollHeight - viewbottom; 
	quickstartpoint = parseInt(quick_obj.style.top, 10);
	quickendpoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + viewscroll;
	if (quickendpoint < viewstart){
		quickendpoint = viewstart;
	}
	if (quickendpoint > bottomlimit){
		quickendpoint = bottomlimit;
	}
	if (quickstartpoint != quickendpoint){
		stmnScrollAmount = Math.ceil( Math.abs( quickendpoint - quickstartpoint ) / 15 );
		quick_obj.style.top = parseInt(quick_obj.style.top, 10) + ( ( quickendpoint < quickstartpoint ) ? -stmnScrollAmount : stmnScrollAmount ) + 'px';
	}
	quicktimer = setTimeout("refresh_quick();", activatespeed);
}
function initializequick(obj,left,starttop){
	quick_obj = document.getElementById(obj);
	viewstart = starttop;
	quick_obj.style.position = 'absolute';
	quick_obj.style.left = left + 'px';
	quick_obj.style.top = document.body.scrollTop + quickbase + 'px';
	refresh_quick();
}
function ScrollTop(){
	self.window.scroll(0,0);
}
