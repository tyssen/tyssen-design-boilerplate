$LAB
	.script("//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js").wait()
	.script("js/jquery.preload-5.js")
	.wait(function(){

		$.preloadCssImages();

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
		
		$('a[rel="external"]').click( function() {
			window.open($(this).attr('href') );
			return false;
		});

		$("a[href^='#']").not("a[href]='#'").click(function() {
			$("#"+$(this).attr("href").slice(1)+"").focus();
		});

		$('.menu > ul').superfish({ 
			delay: 1000,
			animation: {opacity:'show',height:'show'},
			speed: 300,
			autoArrows: false
		});
	})
	.script(function(){
		if($('body').is('.contact')) {
			return "//ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.pack.js";
		}
		else {
			return null;
		}
	})
	.wait(function(){
		$("#contact").validate();
	})
	.script("js/helper.js");