head.ready(function() {

	$.preloadCssImages();
	
	$('a[rel="external"]').click( function() {
        window.open($(this).attr('href') );
        return false;
    });

	$('.menu > ul').superfish({ 
		delay: 1000,
		animation: {opacity:'show',height:'show'},
		speed: 300,
		autoArrows: false
	});
	
	if($('body').is('.home')) {
		$('.nivoSlider').nivoSlider({
			effect:'fade',
			animSpeed:1000,
			pauseTime:10000,
			keyboardNav:true,
			captionOpacity:0.8
		});
	}

	if($('body').is('.contact')) {
		$("#contact").validate();
	}
	
	if($('body').is('.gallery')) {
		$(".photos a").fancybox();
	}
	
	window.jQuery || document.write('<script src="/assets/js/jquery-1.6.1.min.js">\x3C/script>')
});

head.js("//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js","/min/f=/assets/js/modernizr-1.6.min.js,/assets/js/respond.min.js,/assets/js/jquery.preload-5.js,/assets/js/hoverIntent.js,/assets/js/superfish.js,/assets/js/nivo.js,/assets/js/jquery.fancybox.js&20110519","//ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.pack.js");