$(document).ready(function() {

	$(".mobile-nav-icon").click(function() {
	$(".main-nav-toggle").toggleClass("on");
	$(".main-nav-ul").slideToggle();
	$(this).children().toggleClass( 'fa-navicon').toggleClass( 'fa-close');
	return false;
});

});
