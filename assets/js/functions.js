$(document).ready(function() {

	$(".mobile-nav-icon").click(function() {
	$(".main-nav-toggle").toggleClass("on");
	$(".main-nav-ul").slideToggle();
	$(this).children().toggleClass( 'fa-navicon').toggleClass( 'fa-close');
	return false;
});

$(".owl-carousel").owlCarousel({
	loop : true,
	responsive : {
		0 : {
			items : 1,
			nav : true
		}
	},
	navText : ""

});
$(".carousel").owlCarousel({
	loop : true,
	stagePadding: 20,
	responsive : {
		0 : {
			items : 1,
			nav : true
		}
	},
	navText : ""

});



});
