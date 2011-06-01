(function($) {
    /**
     * Spoofs placeholders in browsers that don't support them. (eg Firefox 3)
     * Copyright 2011 Dan Bentley
     * Licensed under the Apache License 2.0
     * Author: Dan Bentley [github.com/danbentley]
     */

    // Return if native support is available.
    if ("placeholder" in document.createElement("input")) return;

    function setupPlaceholder(input) {
        var placeholderText = input.attr('placeholder');
        if (input.val() === '') input.val(placeholderText);
        input.bind('focus blur', function(e) {
            if (e.type === 'focus' && input.val() === placeholderText) input.val(''); 
            if (e.type === 'blur' && input.val() === '') input.val(placeholderText); 
        });
    }

    function clearPlaceholdersBeforeSubmit(form) {
        form.find(':input[placeholder]').each(function() {
            var el = $(this);
            if (el.val() === el.attr('placeholder')) el.val('');
        });
    }
 
    $(':input[placeholder]').each(function(index) {
        setupPlaceholder($(this));
    });
   
    $('form').submit(function(e) {
        clearPlaceholdersBeforeSubmit($(this));
    });
})(jQuery);

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