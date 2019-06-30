$(document).ready(function(){
	$('.guest-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 1124,
			settings: {
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				centerMode: false,
				slidesToShow: 1
			}
		}
		]
	});

	$('.partner-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1
	})

	$('.header-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1

	})


	$('.vidio-row').slick({
  		adaptiveHeight: true,
		slidesToShow: 3,
  		slidesToScroll: 1,	
  		autoplaySpeed: 3000,
  		responsive: [
		{
			breakpoint: 1025,
			settings: {
				centerMode: false,
				slidesToShow: 2,
		  		slidesToScroll: 1,
			}
		},	
		
		
		]

	});

	$('.seminar-list').slick({
		autoplay: true,
		vertical:true,
		verticalSwiping:true,
		infinite: false,
		slidesToShow: 3,
  		slidesToScroll: 2,
		autoplaySpeed: 2000,	
  		responsive: [
		{
			breakpoint: 1124,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical:false,

			}
		}
		
		]

	});
});


