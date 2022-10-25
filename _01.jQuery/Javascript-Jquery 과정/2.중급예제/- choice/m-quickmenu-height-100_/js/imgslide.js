// JavaScript Document
$(document).ready(
		function() {
		var a=0;
		$("a[href='#1']").click(
		    function(){
				$("ul").animate({"margin-left":"+=50"},500);
				//alert(a+=5)
				}
			);
		$("a[href='#2']").click(
		    function(){
				$("ul").animate({"margin-left":"-=50"},500);
				}
			);
			
		}
	);