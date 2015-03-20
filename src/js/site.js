$LAB
	.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js").wait()
	// .script("/assets/js/hoverIntent.js")
	// .script("/assets/js/superfish.js")
	.wait(function(){

		(function($) {
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

		// $(function() {
		// 	$('section[id]').attr('tabindex', '0');
		// 	$('a[href*=#]:not([href=#])').click(function() {
		// 		var $linkElem = $(this);
		// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		// 			var target = $(this.hash);
		// 			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		// 			if (target.length) {
		// 				$('html,body').animate({
		// 					scrollTop: target.offset().top
		// 				}, 1000, function() {
		// 					target.focus();
		// 					window.location.hash = $linkElem.attr('href').substring(1);
		// 				 	// window.location.hash = $(this).attr('href').substring(1, $(this).attr('href').length);
		// 				});
		// 				return false;
		// 			}
		// 		}
		// 	});
		// });

		// Show menu link for screens smaller than 600px

		if(Modernizr.mq('only screen and (max-width: 599px)')) {
	 		$('.header header').append('<a href="#nav" id="show-menu">Menu <span>&#x25BC;</span></a>');
		}


		// Turn off hover effects when scrolling

		var body = document.body, timer;

		window.addEventListener('scroll', function() {
			clearTimeout(timer);
			if(!body.classList.contains('disable-hover')) {
				body.classList.add('disable-hover')
			}

			timer = setTimeout(function(){
				body.classList.remove('disable-hover')
			},500);
		}, false);

		// JS validation for non HTML5 browsers

		if (!Modernizr.input.required) {
			// JavaScript form validation
		}

	})

	// Print out current image source

	(function() {
	  var currentSrc, oldSrc, imgEl;
	  var showPicSrc = function() {
	    oldSrc     = currentSrc;
	    imgEl      = document.getElementById('picimg');
	    currentSrc = imgEl.currentSrc || imgEl.src;

	    if (typeof oldSrc === 'undefined' || oldSrc !== currentSrc) {
	      document.getElementById('logger').innerHTML = currentSrc;
	    }
	  };

	  // You may wish to debounce resize if you have performance concerns
	  window.addEventListener('resize', showPicSrc);
	  window.addEventListener('load', showPicSrc);
	})(window);
	  // You may wish to debounce resize if you have performance concerns
	  window.addEventListener('resize', showPicSrc);
	  window.addEventListener('load', showPicSrc);
	})(window);
;