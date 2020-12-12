
/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------*/
(function ($) {
	"use strict";

   
$( document ).ready(function() {
   
	$('.slide-active').owlCarousel({
	autoplay:true,
    loop:true,
    nav:true,
	navText:[ '<i class="fa fa-angle-left">','<i/><i class="fa fa-angle-right"><i/>'],
	animateIn:'fadeIn',
  mouseDrag:false,
  touchDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.featured-active').owlCarousel({
  autoplay:true,
    loop:true,
    nav:true,
  navText:[ '<i class="fa fa-angle-left">','<i/><i class="fa fa-angle-right"><i/>'],
  animateIn:'fadeIn',

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


  $('.clinet-slider-active').owlCarousel({
	autoplay:true,
    loop:true,
	margin:20,
    nav:false,
	navText:[ '<i class="fa fa-angle-left">','<i/><i class="fa fa-angle-right"><i/>'],
	animateIn:'fadeIn',
  mouseDrag:false,
  touchDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


});

 // new WOW().init();
 

 /*-----------------smooth scrol--------------
 --------------------------------------------------*/
  $('.page-scroll').on('click', function(event) {
  var $anchor = $(this),
          headerH = '96';
      $('html , body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
       }, 1200, 'easeInOutExpo');

      event.preventDefault();
         
		 });
	

 /*-----------------MixitUp--------------
 --------------------------------------------------*/	
	
	 // var mixer = mixitup('.storeGallery');
	// var mixer = mixitup(containerEl);
}(jQuery));	