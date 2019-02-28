$(document).ready(function(){

	$('.phone-mask').inputmask({ "mask": "(999) 999-9999" });

	var sandwich = function () {
		$(document).on('click', '.catalog-nav__header', function () {
			var sandwich = $(this).find('.sandwich'),
			catalog = $(this).parent();
			if($(window).width() < 768) {
				if ($('.mobile-nav__wrapper').hasClass('mobile-nav__wrapper--active')) {
					$('.mobile-nav__wrapper').removeClass('mobile-nav__wrapper--active');
					$('.sandwich').removeClass('sandwich--active');
					catalog.toggleClass('catalog-nav--active');
				}else {
					$('body').toggleClass('fixed');
					catalog.toggleClass('catalog-nav--active');
				}
			} else {
				sandwich.toggleClass('sandwich--active');
				catalog.toggleClass('catalog-nav--active');
			}

		});
		if($(window).width() < 768){
			$(document).on('click', '.sandwich', function () {
				if ($('.catalog-nav').hasClass('catalog-nav--active')) {
					$('.catalog-nav').removeClass('catalog-nav--active');
					$(this).toggleClass('sandwich--active');
					$('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
				} else {
					$(this).toggleClass('sandwich--active');
					$('body').toggleClass('fixed');
					$('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
				}

			});
		}
	};

	var catalogNavHover = function () {
		if($(window).width() > 767)
		{
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
		} else {
			$(document).on('click', '.catalog-nav__item', function () {
				$(this).addClass('catalog-nav__item--active');
				$(this).siblings().removeClass('catalog-nav__item--active');
			});
			$(document).on('click', '.catalog-subnav__header', function () {
				$('.catalog-subnav__block').removeClass('catalog-subnav__block--active');
				$(this).closest('.catalog-subnav__block').addClass('catalog-subnav__block--active');
			});
		}
	};

	var popularCategoriesSlider = function () {
		if($(window).width() < 768){
			$('.js-categories-prev').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '.categories-prev__btn-prev',
				nextArrow: '.categories-prev__btn-next',
				adaptiveHeight: true,
				infinite: false,
				dots: true
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
		prevArrow: '.products-prev-slider__nav-prev',
		nextArrow: '.products-prev-slider__nav-next',
		infinite: false,
		responsive: [
			{
				breakpoint: 1239,
				settings: {
					slidesToShow: 3,
					arrow: false,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrow: true,
					dots: false
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


var simpleBar = function () {
	if($(window).width() > 1239) {
		$.each($('.catalog-subnav'), function (i, v) { new SimpleBar(v); });
	}
};

	var fileUpload = function () {
	$(".file-upload input[type=file]").change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		$(this).closest('.file-upload').find('.file-upload__text').html(filename);
	});
};

var breadcrumbsNav = function () {
	$(document).on('click', '.breadcrumbs-nav__toggle', function () {
		$(this).parent().toggleClass('breadcrumbs__item--show-nav');
	});
};

var catalogMobileNav = function  () {
	$(document).on('click', '.catalog-mobile-nav__label', function () {
		$(this).parent().toggleClass('.catalog-nav__item--active');
		$(this).parent().siblings().removeClass('.catalog-nav__item--active');
	});
};
var counter = function  () {
	$(document).on('click', '.counter__btn--minus', function () {
		var number = +$(this).parent().find('.counter__current-text').text(), newNumber;
		if (number !== 0) {
			newNumber = number- 1;
		} else {
			return false;
		}
		$(this).parent().find('.counter__current-text').text(newNumber);
	});
	$(document).on('click', '.counter__btn--plus', function () {
		var number = +$(this).parent().find('.counter__current-text').text(), newNumber;
			newNumber = number + 1;
		$(this).parent().find('.counter__current-text').text(newNumber);
	});
};

	var filterItem = function  () {
		$(document).on('click', '.filter-item__header',function ()
		{
			$(this).parent().toggleClass('filter-item--active');
		});
	};

	var filterSlider = function  () {
		$(".filter-slider__line").each(function () {
			let slider = $(this)[0],
				sliderFrom = $(this).parent().find(".filter-slider__value--from")[0],
				sliderTo = $(this).parent().find(".filter-slider__value--to")[0],
				inputs = [sliderFrom, sliderTo],
				type = $(this).data('range-type');
			if (type === "price") {
				noUiSlider.create(slider, {
					start: [2500, 5900],
					connect: true,
					range: {
						min: 0,
						max: 10000
					},
					format: wNumb({
						decimals: 0,
						thousand: ' ',
					})
				});
			} else if (type === "mm") {
				noUiSlider.create(slider, {
					start: [0.5, 7],
					connect: true,
					range: {
						min: 0,
						max: 10
					},
					format: wNumb({
						decimals:2
					})
				});
			}
			slider.noUiSlider.on("update", function (values, handle) {
				inputs[handle].value = values[handle];
			});
			inputs.forEach(function (input, handle) {
				input.addEventListener('change', function () {
					slider.noUiSlider.setHandle(handle, this.value);
				});
			});
		});
		};

var sortToggle = function () {
	$(document).on('click', '.sort-action__header', function () {
		if ($(this).parent().hasClass('sort-action--active')){
			$(this).parent().removeClass('sort-action--active');
		} else {
			$('.sort-action').removeClass('sort-action--active');
			$(this).parent().addClass('sort-action--active');
		}
	});
};

var tagsToggle = function () {
	$(document).on('click', '.tags__toggle', function () {
		var el = $(this).parent();
		if (el.hasClass('tags--active')) {
			el.removeClass('tags--active');
			$(this).text('Все запросы');
		} else {
			el.addClass('tags--active');
			$(this).text('Скрыть');
		}
	});
};

var dropdown = function () {
	$(document).on('click', '.dropdown__toggle', function () {
		var dropdown = $(this).parent();
		dropdown.toggleClass('dropdown--show')
	});
	if($(window).width() > 768) {
		$('body').click(function (e) {
			if($(e.target).closest('.dropdown--show').length ===0) {
				$('.dropdown').removeClass('dropdown--show');
			}
		});
	}
};

var customSelect= function () {
$(document).on('click', '.select__header', function () {
	var sel = $(this).parent();
	if (sel.hasClass('select--active')) {
		sel.removeClass('select--active');
	} else {
		$('.select').removeClass('select--active');
		sel.addClass('select--active');
	}
});
	$(document).on('click', '.select__item', function () {
		var val = $(this).find('.select__value').text(),
		sel = $(this).closest('.select');
		console.log(sel);
		sel.removeClass('select--active');
		sel.find('.select__current').text(val);
	});
};



	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	catalogNavHover();
	locationChoose();
	popupLink();
	formValidate();
	reviewLine();
	contactsPopup();
	simpleBar();
	fileUpload();
	breadcrumbsNav();
	catalogMobileNav();
	counter();
	filterItem();
	filterSlider();
	sortToggle();
	tagsToggle();
	dropdown();
	customSelect();
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
$(window).on('load', function () {
	$('.sk-circle').fadeOut();
	$('.preloader__wrapper').delay(400).fadeOut("slow");
});

