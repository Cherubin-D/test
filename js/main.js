$(document).ready(function(){

	$("a").on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		console.log(page);
		$('html, body').animate({
			scrollTop: $(page).offset().top
			}, 1000); // Go
			return false;
	});

	$("#contact").on('click', function() {
		$("footer").slideToggle();
	});

	$("#minia1").hover(function() {
		$('#minia-txt').fadeToggle();
	});

	$("#minia2").hover(function() {
		$('#minia2-txt').fadeToggle();
	});

	$("#minia3").hover(function() {
		$('#minia3-txt').fadeToggle();
	});

	$("#minia4").hover(function() {
		$('#minia4-txt').fadeToggle();
	});

	$("#minia5").hover(function() {
		$('#minia5-txt').fadeToggle();
	});

	$("#minia6").hover(function() {
		$('#minia6-txt').fadeToggle();
	});

});