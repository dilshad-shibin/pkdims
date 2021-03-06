(function($){
    "use strict";

    //Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			//animateOut: 'slideOutUp',
    		//animateIn: 'fadeDown',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}

	// Testimonials Carousel
	if ($('.testimonials-carousel').length) {
		$('.testimonials-carousel').owlCarousel({
			loop:true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeUp',
			margin:0,
			nav:true,
			smartSpeed: 300,
			autoplay: true,
			navText: [ '<span class="flaticon-back-4"></span>', '<span class="flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});
	}
	

})(window.jQuery);