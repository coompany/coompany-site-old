/**
 * Created by Andrea Jemmett - acidghost on 21/12/13.
 * Company: Coompany .srls - http://www.coompany.eu/
 */

// CheckViewport.js
/*
 Version 1.3.2
 The MIT License (MIT)

 Copyright (c) 2014 Dirk Groenen

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 */

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd) && !options.repeat){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };
})(jQuery);
jQuery(document).ready(function() {
    var viewportCheckerOptions = {
        classToAdd: 'visibleop animated',
        offset: 100,
        callbackFunction: function(e) {
            var classes = e.attr('class').split(' ');
            classes.forEach(function(cl) {
                if(cl.indexOf('anim-') != -1) {
                    e.addClass(cl.split('anim-')[1]);
                }
            });
        }
    };

    jQuery('.wow').addClass("hiddenop").viewportChecker(viewportCheckerOptions);
});

//new WOW().init();

jQuery(document).ready(function($) {

    $('body').niceScroll();

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
                    deskVideo.css('left', (dFrameWidth/5.3)+'px');
                    deskVideo.css('top', (dFrameWidth/24)+'px');

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

    //  Load videos
    function loadVideo(tag) {
        var video = $(tag).get(0);
        if(!video)
            return;
        video.load();
        video.play();
    }
    //loadVideo('#mobile-video');
    //loadVideo('#desktop-video');
});
