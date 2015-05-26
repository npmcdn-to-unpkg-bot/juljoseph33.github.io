$(document).ready(function() {
	$('#nav').scrollToFixed();
	$(window).stellar({
		hideDistantElements: true,
		verticalScrolling: true,
		scrollProperty: 'position'
	});

	// $('.workpic').mouseenter(function() {
	// 	$(this).find('p').slideDown(300);
	// 	$(this).css('opacity', 0.2);
	// });
	// $('.workpic').mouseleave(function() {
	// 	$(this).find('p').slideUp(300);
	// 	$(this).css('opacity', 1);
	// });
});