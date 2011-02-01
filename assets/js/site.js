$(document).ready(function() {
	
	$.preloadCssImages();
	
	// google analytics
	//var pageTracker = _gat._getTracker("UA-2575846-1");
	pageTracker._initData();
	pageTracker._trackPageview();

	$('a[rel="external"]').click( function() {
        window.open($(this).attr('href') );
        return false;
    });

	$('.header .nav').superfish({ 
		delay: 1000,
		animation: {opacity:'show',height:'show'},
		speed: 500,
		autoArrows: false
	});
	
	if($('body').is('.home')) {
		$('.flash').flash(
			{ src: '/images/title.swf', width: 760, height: 450, wmode: 'transparent' },
			{ update: false }
		);
	}
	if($('body').is('.p-events')) {
		$(".fancy a").fancybox();
	}
	if($('body').is('.p-contact')) {
		$("#contact").validate();
	}
});