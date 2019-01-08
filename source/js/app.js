$(document).ready(function(){
    
	var sandwich = function () {
		$(document).on('click', '.catalog-nav__header', function () {
			var sandwich = $(this).find('.sandwich'),
			catalog = $(this).parent();
			sandwich.toggleClass('sandwich--active');
			catalog.toggleClass('catalog-nav--active');
		});
		if($(window).width() < 768){
			$(document).on('click', '.sandwich', function () {
				$(this).toggleClass('sandwich--active');
				$('body').toggleClass('fixed');
				$('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
			});
		}
	};

	var catalogNavHover = function () {
		$('.catalog-nav__item').hover(
			function () {
				var catalogBody = $(this).closest('.catalog-nav__body');
				catalogBody.css('width', 825);
			},
			function () {
				var catalogBody = $(this).closest('.catalog-nav__body');
				catalogBody.css('width', 'auto');
			}
		);
	};

	var popularCategoriesSlider = function () {
		if($(window).width() < 768){
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1
			});	
	} 
};

var productPrevSlider = function () {
	var sliderCount = $('.product-slider__count'),
		prodSlider = $('.js-product-slider');

		prodSlider.on('init afterChange', function (e, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			sliderCount.text('Страница ' + i + ' из ' + slick.slideCount);
		});

	prodSlider.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.slider-nav--prev',
		nextArrow: '.slider-nav--next',
		infinite: false,
		responsive: [
			{
				breakpoint: 1239,
				settings: {
					slidesToShow: 3, 
					arrow: false,
					dots: true
				}
			}
		]
	});
};

	var locationChoose = function () {

		$(document).on('click', '.location-question__btn', function () {
			var answer = $(this).data('location');
			$(this).closest('.location-question').hide();
			if (answer === 'no') {
				$(this).closest('.location__body').addClass('is-location-choose');
			}
		});
		$(document).on('click', '.location-choose__item, .location-choose__close', function () {
			$(this).closest('.location__body').removeClass('is-location-choose');
		});
		$(document).on('click', '.location__header', function () {
			$(this).siblings('.location__body').addClass('is-location-choose');
		});
	};

	var popupLink = function () {
		$('.js-popup-link').magnificPopup({
			showCloseBtn: false
		});
		$(document).on('click', '.popup__close',function () {
			$.magnificPopup.close();
		});
	};

	var formValidate = function () {
		$('form').each(function () {
			$(this).on('submit', function () {
				$(this).validate({
					rules: {
						name: 'required',
						phone: 'required',
						"req-textarea": 'required',
						password: 'required'
					},
					messages: {
						name: 'Введите корректное имя',
						phone: 'Введите корректный номер',
						password: 'Введите корректный пароль',
						"req-textarea": 'Заполните поле'
					},
					errorPlacement: function (error, element) {
						element.attr("placeholder", error[0].outerText);
					}
				});
				if ($(this).valid()) {
					var wrap = $(this)[0].closest('.hide-on-success');
					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide(); 
					}
				}
				return false;
			});
		});
	};

	var reviewLine = function () {
		$(document).on('click', '.review-line__number', function () {
			var left = $(this).parent().position().left;
			$(this).parent().siblings().removeClass('review-line__item--active');
			$(this).parent().addClass('review-line__item--active');
			$('.review-line').css('width', left - 1);
		});
	};

	var contactsPopup = function () {
		$(document).on('click', '.contacts-popup__toggle', function () {
			$(this).parent().addClass('contacts-popup--active');
		});
		var popup = document.getElementsByClassName('contacts-popup');
		$(document).on('click', '.contacts-popup__close', function () {
			$(popup).removeClass('contacts-popup--active');
		});
	};

	// if($('div').is('.contacts-popup__map')) {
	// 	ymaps.ready(function () {
	// 		var myMapOffice = new ymaps.Map('contacts-popup-office', {
	// 			center: [51.484209, -0.175801],
	// 			zoom: 15
	// 		}, {
	// 				searchControlProvider: 'yandex#search'
	// 			}),

	// 			myPlacemark1 = new ymaps.Placemark(myMapOffice.getCenter(), {
	// 			}, {
	// 					iconLayout: 'default#image',
	// 					// Своё изображение иконки метки.
	// 					iconImageHref: 'assets/img/map-dot.png',
	// 					// Размеры метки.
	// 					iconImageSize: [32, 32]
	// 				});

	// 		myMapOffice.geoObjects
	// 			.add(myPlacemark1);
	// 		myMapOffice.behaviors.disable('scrollZoom');
	// 		myMapOffice.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('foolscreenControl').remove('geolocationControl').remove('rulerControl');
			
	// 		var myMapStock = new ymaps.Map('contacts-popup-stock', {
	// 			center: [52.480475, -1.896182],
	// 			zoom: 15
	// 		}, {
	// 				searchControlProvider: 'yandex#search'
	// 			}),

	// 			myPlacemark2 = new ymaps.Placemark(myMapStock.getCenter(), {
	// 			}, {
	// 					iconLayout: 'default#image',
	// 					// Своё изображение иконки метки.
	// 					iconImageHref: 'assets/img/map-dot.png',
	// 					// Размеры метки.
	// 					iconImageSize: [32, 32]
	// 				});

	// 		myMapStock.geoObjects
	// 			.add(myPlacemark2);
	// 		myMapStock.behaviors.disable('scrollZoom');
	// 		myMapStock.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('foolscreenControl').remove('geolocationControl').remove('rulerControl');

	// 	});
	// }

	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	catalogNavHover();
	locationChoose();
	popupLink();
	formValidate();
	reviewLine();
	contactsPopup();
	});
	
var popularCategoriesSlider = function () {
	var sliderElement = $('.js-categories-prev');
	if ($(window).width() <  768 && !(sliderElement.hasClass('slick-initialized'))) {
		sliderElement.slick({
			slidesToShow: 2,
			slidesToScroll: 1
		});
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick');
	}
};

$(window).on('resize', function () {
	popularCategoriesSlider();
});

