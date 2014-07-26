/**
 * Created by Andrea Jemmett - acidghost on 21/12/13.
 * Company: Coompany .srls - http://www.coompany.eu/
 */

jQuery(document).ready(function($) {

    $('html').niceScroll();

    $('#menu-shadow').width($('.quilia-container').width()-20);

    if($('.feature').length > 0) {

        var setParallaxOverflowContainer = function() {

            var containerWidth = parseInt($('body > .container .feature').css('width'));
            var innerWidth = window.innerWidth;

            var innerHeight = window.innerHeight;
            var navbarHeight = parseInt($('body > .container .navbar').css('height'));

            var i = 0;
            $('.feature .feature-bg').each(function() {
                var $this = $(this);
                $this.css('width', innerWidth+'px');
                var marginLeft = -.5*(innerWidth-containerWidth);
                $this.css('margin-left', marginLeft+'px');
                //$this.css('margin-top', (i*100)+'px');

                //$this.css('height', (innerHeight-navbarHeight)+'px');
                $this.css('height', (innerHeight)+'px');
                //$this.css('height', )
                if(innerHeight > innerWidth) {
                    $this.css('height', innerWidth/1.8);
                }
                i++;
            });

        };

        $(window).load(setParallaxOverflowContainer);
        $(window).resize(setParallaxOverflowContainer);

        var parallaxSpeed = 0.1;
        $('.feature .feature-bg').each(function() {
            var $this = $(this);
            $this.parallax('100%', parallaxSpeed, true);
        });

    }

    var extWidth = $('.quilia-extension').parent('li').css('width');
    $('.quilia-extension').css('min-width', parseInt(extWidth)+3+'px');
    $('.quilia-extension').parent('li').css('max-width', parseInt(extWidth)+'px');

    //  Responsiveness
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $(function() {
        var pause = 100;
        // will only process code within delay(function() { ... }) every 100ms.

        $(window).resize(function() {
            delay(function() {
                var width = $(window).width();
                var deskVideo = $('#desktop-video');
                var dFrameWidth = deskVideo.siblings('img').width();
                var mobileVideo = $('.feature-114 video');
                var mFrameWidth = mobileVideo.parent('.media-content').width();
                if( width >= 480 && width <= 767 ) {
                    deskVideo.css('width', (dFrameWidth-44)+'px');
                    deskVideo.css('left', (dFrameWidth/5)+'px');
                    deskVideo.css('top', (dFrameWidth/22)+'px');

                    mobileVideo.css('left', ((mFrameWidth/2)-16)+'px');
                } else if( width <= 479 ) {
                    deskVideo.css('width', (dFrameWidth-34)+'px');
                    deskVideo.css('left', (dFrameWidth/4.6)+'px');
                    deskVideo.css('top', (dFrameWidth/20)+'px');

                    mobileVideo.css('left', ((mFrameWidth/2)-16)+'px');
                } else {
                    deskVideo.css('width', '');
                    deskVideo.css('left', '');
                    deskVideo.css('top', '');
                    mobileVideo.css('left', '');
                }
            }, pause );
        });

        $(window).resize();
    });
});
