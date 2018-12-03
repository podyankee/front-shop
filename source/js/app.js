$(document).ready(function(){
    
	var sandwich = function () {
		$(document).on('click', '.sandwich', function () {
			$(this).toggleClass('sandwich--active');

		});
	};

	var popularCategoriesSlider = function () {
		if($(window).width() < 768){
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1
			});	
	} 
};

		sandwich();
	popularCategoriesSlider();

	});
	
var popularCategoriesSlider = function () {
	var sliderElement = $('.js-categories-prev');
	if ($(window).width() < 768 && !(sliderElement.hasClass('slick-initialised'))) {
		sliderElement.slick({
			slidesToShow: 2,
			slidesToScroll: 1
		});
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialised')) {
		sliderElement.slick('unslick');
	}
};

$(window).on('resize', function () {
	popularCategoriesSlider();
});

