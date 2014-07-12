/**
 * Created by Andrea Jemmett - acidghost on 21/12/13.
 * Company: Coompany .srls - http://www.coompany.eu/
 */

jQuery(document).ready(function($) {

    $('html').niceScroll();

    if($('.feature').length > 0) {

        var setParallaxOverflowContainer = function() {

            var containerWidth = parseInt($('body > .container .feature').css('width'));
            var innerWidth = window.innerWidth;

            var innerHeight = window.innerHeight;
            var navbarHeight = parseInt($('body > .container .navbar').css('height'));

            $('.feature .feature-bg').each(function() {
                var $this = $(this);
                $this.css('width', innerWidth+'px');
                var marginLeft = -.5*(innerWidth-containerWidth);
                $this.css('margin-left', marginLeft+'px');

                //$this.css('height', (innerHeight-navbarHeight)+'px');
                $this.css('height', (innerHeight)+'px');
            });

        };

        $(window).load(setParallaxOverflowContainer);
        $(window).resize(setParallaxOverflowContainer);

        var parallaxSpeed = 0.2;
        $('.feature .feature-bg').each(function() {
            var $this = $(this);
            $this.parallax('50%', parallaxSpeed);
        });

    }

    var extWidth = $('.quilia-extension').parent('li').css('width');
    $('.quilia-extension').css('min-width', parseInt(extWidth)+3+'px');
    $('.quilia-extension').parent('li').css('max-width', parseInt(extWidth)+'px');
});
