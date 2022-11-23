// JavaScript Document
$(document).ready(function(){

				 $("li:first a").click(
						function(){
							$(this).addClass("click"); 
							$("li:first+li a").removeClass("click")
							$("li:last a").removeClass("click")
							}
					);
				$("li:first+li a").click(
						function(){
							$(this).addClass("click"); 
							$("li:first a").removeClass("click")
							$("li:last a").removeClass("click")
							}
					);
				$("li:last a").click(
						function(){
							$(this).addClass("click");
							$("li:first a").removeClass("click")
							$("li:first+li a").removeClass("click")
							}
					);
			  }

			);
		