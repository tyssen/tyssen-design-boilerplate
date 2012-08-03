$LAB
	.script("/assets/js/modernizr-2.5.0.min.js")
	.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js").wait()
	.script("/assets/js/jquery.preload-5.js")
	// .script("/assets/js/hoverIntent.js")
	// .script("/assets/js/superfish.js")
	.wait(function(){

		$.preloadCssImages();

		// $('.sf-menu').superfish({ 
		// 	delay: 1000,
		// 	animation: {opacity:'show',height:'show'},
		// 	speed: 300,
		// 	autoArrows: false
		// });

		// Open links in new windows/tabs
		
		$('a[rel="external"]').click( function() {
			window.open($(this).attr('href') );
			return false;
		});

		// Scroll to internal anchors

		$('[href="#content"]').click(function() {
			$('html, body').animate({
				scrollTop: ($($(this).attr("href")).offset().top - 20) + "px"
			}, {
				duration: 1000,
				easing: "swing"
			});
			return false;
		});

		// Show menu link for screens smaller than 600px

		// if(Modernizr.mq('only screen and (max-width: 599px)')) {
		// 	$('.header header').append('<a href="#nav" id="show-menu">Menu <span>&#x25BC;</span></a>');
		// }

	})
	// Home
	.script(function(){
		if ($('body').hasClass('home')) {
			return "http://cloud.github.com/downloads/malsup/cycle/jquery.cycle.all.latest.js";
		}
	})
	.wait(function(){
		$('.slides').cycle({
			fx:      'fade',
			speed:   2000,
			timeout: 8000,
			// pager:      '.pager', 
			// pagerEvent: 'mouseover', 
			pauseOnPagerHover: true
		});
	})
	// Study pages
	.script(function(){
		if ($('body').hasClass('study')) {
			return "/assets/js/jquery.fancybox.pack.js";
		}
	})
	.wait(function(){
		$("article ul a").fancybox({
			width 		: '90%',
			fitToView	: true,
			autoSize	: true,
			closeClick	: false,
			openEffect	: 'fade',
			closeEffect	: 'fade',
			type		: 'ajax'
		});
	})

	// .script("/assets/new/js/helper.js")
;