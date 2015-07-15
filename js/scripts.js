$(document).ready(function() {
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
	$(document).on('click', 'button', function(e) {
		var id = $(location).attr('href');
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
	// parallax
	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});
});