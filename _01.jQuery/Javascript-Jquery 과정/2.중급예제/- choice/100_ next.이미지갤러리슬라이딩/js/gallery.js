// JavaScript Document
$(document).ready(
	function() {
		$(".sm li").click(function(){
			pimg=$(this).index()+1;
			$(".sm,h2").fadeOut(0);
			$(".popup").remove();
			// 팝업이미지 보여짐
			$(".all").append("<div class='popup'></div>");
			$(".popup").append("<div class='wrapImg'></div>");
			$(this).children("img").clone().appendTo(".wrapImg");
			$(".wrapImg").removeClass("reverse2");

			//팝업이미지 제목
			altText=$(this).children().attr("alt");
			$(".wrapImg").append("<h3 class='img_subject'>"+altText+"</h3>");

			
			// 카운트 표시
			total=$(".sm li").length;
			$(".count").remove();
			$(".wrapImg").append("<span class='count'><strong>"+pimg+"</strong> / "+total+"</span>");

			//컨트롤 버튼 prev, next 배치
			$(".wrapImg").append("<span class='control'><a href='' class='prev'>이전</a><a href='' class='next'>이후</a></span>");

			$(".control a").click(function(){
				if($(this).hasClass("next")){
					if(pimg<3){
						pimg++;
						$(".wrapImg img").attr("src","img/w"+pimg+".jpg");
						$(".count").remove();
						$(".wrapImg").append("<span class='count'><strong>"+pimg+"</strong> / "+total+"</span>");
						if(pimg==3){
							$(".next").addClass("disable");
						}else{
							$(".prev").removeClass("disable");
						}
					}
				}else{
					if(pimg>1){
						pimg--;
						$(".wrapImg img").attr("src","img/w"+pimg+".jpg");
						$(".count").remove();
						$(".wrapImg").append("<span class='count'><strong>"+pimg+"</strong> / "+total+"</span>");
						$(".next").removeClass("disable");
						if(pimg==1){
							$(".prev").addClass("disable");
						}else{
							$(".next").removeClass("disable");
						}

					}
					
				}

				
				return false;
			});

			//첫번째,마지막 섬네일 클릭시 이전,이후버튼 비활성화처리
			if(pimg==3){
				$(".next").addClass("disable");
			}
			if(pimg==1){
				$(".prev").addClass("disable");
			}

			// 닫기버튼
			$(".wrapImg").append("<a class='popupClose'>닫기</a>");
			$(".popupClose").click(function(){
				$(".wrapImg").addClass("reverse2");
				$(".popup").fadeOut();
				$(".sm,h2").fadeIn(100);

			});

			$(".wrapImg").hide().fadeIn();

			
			
		});
	}
);