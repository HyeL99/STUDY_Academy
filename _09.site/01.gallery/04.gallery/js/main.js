$(function(){
    $('.thumb').isotope({
        //option
        itemSelector:'.thumb_item',
        stagger: 50,    // 1 = 1ms
        transitionDuration: '0.2s',
        hiddenStyle: {
            opacity: 0,
        },
        visibleStyle: {
            opacity: 1,
        }
    });
    $('.thumb').isotope({ filter: '.all' });

    // 갤러리 - magnefic popup 플러그인 이용
    $('.test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery: {
            enabled:true,
        }
    });
    $('.youtube').magnificPopup({
        type: 'iframe',
        // other options
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
            
                    src: '//https://youtu.be/baa4fqPKF3A' // URL that will be set as a source for iframe.
                },
            },
            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    });



    const $btn = $('.nav ul li a'); //버튼 역할하는 nav a를 변수로

    $btn.click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
    });
    $('.btnAll').click(function(){
        $('.thumb').isotope({ filter: '.all' });
    })
    $('.btnWeb').click(function(){
        $('.thumb').isotope({ filter: '.web' });
    });
    $('.btnMobile').click(function(){
        $('.thumb').isotope({ filter: '.mobile' });
    });
    $('.btnMotion').click(function(){
        $('.thumb').isotope({ filter: '.motion' });
    });
    $('.btnAward').click(function(){
        $('.thumb').isotope({ filter: '.award' });
    });
})