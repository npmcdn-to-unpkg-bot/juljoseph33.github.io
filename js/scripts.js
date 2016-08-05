$(document).ready(function() {
	var minuspixels = "";
	var addpixels = "";
	$(".show_hide").click(function () {
		var num = $(this).attr('id');
		$('.'+num).toggle();
		if ($('.'+num).is(':visible')) {
			$('#'+num).text(' Read Less');
			var selector = '#'+$(this).parent('p').parent().attr('id') + ' p';
			var pixels = getExtra(selector).toString();
			var addpixels = '+='+pixels+'px';
			minuspixels = '-='+pixels+'px';
			$(this).parent().parent().css('margin-bottom', addpixels);
		}
		else {
			$('#'+num).text(' ...Read More');
			$(this).parent().parent().css('margin-bottom', minuspixels);
		}
	});
	// $(".fancybox").fancybox();
	// smooth scrolling
	$(document).on('click', 'a[href^="#"]', function(e) {
		var id = $(this).attr('href');
		var $id = $(id);
		if ($id.length === 0) {
		    return;
		}
		e.preventDefault();
		var pos = $(id).offset().top;
		$('body, html').animate({scrollTop: pos});
	});
	// animate and toggle job functions
	$('#clickjj').click(function() {
		$('#jj2:visible').hide("slow");
		$('#is:visible').hide("slow");
		$('#ean:visible').hide("slow");
		$('#jj').show("slow");
	});
	$('#clickjj2').click(function() {
		$('#jj:visible').hide("slow");
		$('#is:visible').hide("slow");
		$('#ean:visible').hide("slow");
		$('#jj2').show("slow");
	});
	$('#clickis').click(function() {
		$('#jj2:visible').hide("slow");
		$('#jj:visible').hide("slow");
		$('#ean:visible').hide("slow");
		$('#is').show("slow");
	});
	$('#clickean').click(function() {
		$('#jj2:visible').hide("slow");
		$('#is:visible').hide("slow");
		$('#jj:visible').hide("slow");
		$('#ean').show("slow");
	});
	// plugin for sticky header
	$('#nav').scrollToFixed();

	var $container = $('.portfolio'); 
    $container.isotope({ 
        filter: '*', 
        animationOptions: { 
            duration: 800, 
            easing: 'quadratic', 
            queue: false, 
        } 
    }); 
    
    $('nav.primary ul a').click(function(){ 
        var selector = $(this).attr('data-filter'); 
        $(window).load(function() {
	        $container.isotope({ 
	            filter: selector, 
	            animationOptions: { 
	                duration: 800, 
	                easing: 'quadratic', 
	                queue: false, 
	            } 
	        }); 
        });
      return false; 
    }); 
    
    var $optionSets = $('nav.primary ul'), 
       $optionLinks = $optionSets.find('a'); 
   
       $optionLinks.click(function(){ 
          var $this = $(this); 
      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
          return false; 
      } 
	   var $optionSet = $this.parents('nav.primary ul'); 
	   $optionSet.find('.selected').removeClass('selected'); 
	   $this.addClass('selected');  
	});

	// FINAL LINES OF FUNCTION
	// parallax
	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});


});
function getExtra(selector) {
    var height = $(selector).height();
    var font_size = $(selector).css('font-size');
    var scale = 1.15;
    var before_height = Math.floor(parseInt(font_size) * scale * 3);
    var rows = height - before_height;
    return Math.round(rows);
}