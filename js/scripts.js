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
	$(".fancybox").fancybox();
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
		$('#jj').show("slow");
		$('#is').hide("slow");
		$('#ean').hide("slow");
	});
	$('#clickis').click(function() {
		$('#is').show("slow");
		$('#jj').hide("slow");
		$('#ean').hide("slow");
	});
	$('#clickean').click(function() {
		$('#ean').show("slow");
		$('#is').hide("slow");
		$('#jj').hide("slow");
	});
	// plugin for sticky header
	$('#nav').scrollToFixed();

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