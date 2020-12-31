$(document).ready(function () {
	$('.carousel__inner').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prewArrow: (
			<button type='button' class='slick-prev'>
				<img src='../icons/slider/chevron-left-solid.png'></img>
			</button>
		),
		nextArrow: (
			<button type='button' class='slick-next'>
				<img src='../icons/slider/chevron-right-solid.png'></img>
			</button>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 	},
			// },
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 	},
			// },
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});
