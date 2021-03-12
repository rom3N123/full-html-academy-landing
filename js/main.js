$(function () {
	$('.reviews__slider-inner').slick({
		responsive: [{
			breakpoint: 1280,
			settings: {
				arrows: false,
				dots: true
			}
		}]
	});

	$('.header__burger').on('click', (event) => {
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
});