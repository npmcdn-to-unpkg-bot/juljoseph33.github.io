$(document).ready(function() {
	$('#clickjj').click(function() {
		$('#jj').show();
		$('#is').hide();
		$('#ean').hide();
	});
	$('#clickis').click(function() {
		$('#is').show();
		$('#jj').hide();
		$('#ean').hide();
	});
	$('#clickean').click(function() {
		$('#ean').show();
		$('#is').hide();
		$('#jj').hide();
	});
	$('#nav').scrollToFixed();
	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});
	// $.smoothScroll();
});