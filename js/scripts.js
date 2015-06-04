$(document).ready(function() {
	$('#nav').scrollToFixed();
	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});
	// $.smoothScroll();
});