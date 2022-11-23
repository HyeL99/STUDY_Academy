$(document).ready(function(){    
    $('#quickR, #quickL').animate({top:100},500);    /* 페이지 로드되자 마자 퀵 메뉴의 높이 값 조절 */   
    $('#quickR, #quickL').floatBanner();    
});



(function($){

    $.fn.floatBanner = function(options) {
        options = $.extend({}, $.fn.floatBanner.defaults , options);
        
        return this.each(function() {
            var aPosition = $(this).position();
            var node = this;
            
            $(window).scroll(function() {       
                var _top = $(document).scrollTop();
                _top = (aPosition.top < _top) ? _top : aPosition.top;

                setTimeout(function () {
                   $(node).stop().animate({top: _top+100}, options.animate);   /* 페이지 로드된 후 스크롤 후의 높이 값 */
                }, options.delay);
            });
        });
    };

    $.fn.floatBanner.defaults = { 
        'animate'  : 300,
        'delay'    : 100
    };

})(jQuery);
    
    

