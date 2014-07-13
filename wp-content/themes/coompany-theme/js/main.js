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
});
