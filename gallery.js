$(document).ready( function() {
	$('.element').hover(
		function() {
			$(this).addclass('active');
		},
		function() {
			$(this).removeClass('active');
		}
	);
});
