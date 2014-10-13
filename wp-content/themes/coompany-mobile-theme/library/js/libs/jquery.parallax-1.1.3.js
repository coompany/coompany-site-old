/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight, index) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

                /**
                 *  ACTUNG!! :D
                 *  THIS WAS MODIFIED!!
                  */

                /* getting viewport width */
                var responsive_viewport = $(window).width();

                /* if is below 481px */
                if (responsive_viewport < 481) {
                    $this.css('backgroundPosition', xpos + " " + (Math.round((firstTop - pos) * speedFactor)+((index*40)+160)) + "px");
                } /* end smallest screen */

                /* if is larger than 481px */
                if (responsive_viewport > 481) {
                    $this.css('backgroundPosition', xpos + " " + (Math.round((firstTop - pos) * speedFactor)+((index*40)+60)) + "px");
                } /* end larger than 481px */

                /* if is above or equal to 768px */
                if (responsive_viewport >= 768) {
                    $this.css('backgroundPosition', xpos + " " + (Math.round((firstTop - pos) * speedFactor)+((index*40)+140)) + "px");

                    /* load gravatars */
                    $('.comment img[data-gravatar]').each(function(){
                        $(this).attr('src',$(this).attr('data-gravatar'));
                    });

                }

                /* off the bat large screen actions */
                if (responsive_viewport > 1030) {

                }
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
