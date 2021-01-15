// slider
$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/slider/chevron-left-solid.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/slider/chevron-right-solid.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				},
			},
		],
	});
	// tabs
	$('ul.catalog__tabs').on(
		'click',
		'li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.container')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active');
		}
	);
	//goods cards
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content')
					.eq(i)
					.toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	//validate forms
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: 'Пожалуйста, введите свое имя',
				phone: 'Пожалуйста, введите свой номер телефона',
				email: {
					required: 'Пожалуйста, введите свой адрес email',
					email: 'Неправильно введен адрес email',
				},
			},
		});
	}
	validateForms('#consultation-form');
	validateForms('#order form');
	validateForms('#consultation form');
	//masked input
	$('input[name=phone]').mask('+7 (999) 999-99-99');
	

});
