// JavaScript Document
$(document).ready(
	function() {
		var n=0;
		var move=$("li").outerWidth()+4;
		console.log(move);
		$("a[href='#1']").click(
			function(){
				n++; // ++ 증감연산자 값을 1씩 증가시켜라
				$("ul").animate({"margin-left":move*n},500);
				//alert(a+=5)
		}
			);
		$("a[href='#2']").click(
			function(){
				n-- ; // ++ 증감연산자 값을 1씩 감소시켜라
				$("ul").animate({"margin-left":move*n},500);
			}
		);
		
	}
);