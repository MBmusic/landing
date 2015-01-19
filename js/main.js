$(document).ready(function() {
	$(".scroll-form").click(function() {
		$("html, body").animate({
			scrollTop: $(".landing-bg1-c3").offset().top - 120
		}, 600)
	});
});