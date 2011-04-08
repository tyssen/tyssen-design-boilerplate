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
	}

	if($('body').is('.p-contact')) {
		$("#contact").validate();
	}
	
	!window.jQuery && document.write(unescape('%3Cscript src="/assets/js/jquery-1.4.2.min.js"%3E%3C/script%3E'))
});

head.js("/assets/js/modernizr-1.6.min.js","http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js","/assets/js/jquery.preload-5.js","/assets/js/superfish.js");