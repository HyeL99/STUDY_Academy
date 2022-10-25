// JavaScript Document
$(document).ready(
		function(){
				$(".con1-1").hover(
					function(){
						$(".con1-1 img").attr("src","images/con1-1o.jpg").hide().fadeIn(400); //마크업의 속성을 변경하라
					},
					function(){
						$(".con1-1 img").attr("src","images/con1-1.jpg"); //마크업의 속성을 변경하라
					}
					
				);
		}
);