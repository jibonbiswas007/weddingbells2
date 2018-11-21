(function($) {
    "use strict";
    //mean menu js

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '991'
    });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '0', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });

    //slider active
    
    $('#slider').nivoSlider({
    	manualAdvance: true,
    	prevText: '<i class="fas fa-angle-left"></i>',
    	nextText: '<i class="fas fa-angle-right"></i>',
    	controlNav: false,
    	pauseOnHover: false,
    });

    // testimonial active

    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed:300,
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
    });

    $('#clock').countdown('2019/01/01', function(event) {
      $(this).html(event.strftime('<div class="row"><div class="col-sm-3"><div class="single-countdown text-center"><div class="countdown-wrapper"><i class="far fa-heart"></i><span class="countdown">%D</span></div><span class="countdown-text">Days</span></div></div><div class="col-sm-3"><div class="single-countdown text-center"><div class="countdown-wrapper"><i class="far fa-heart"></i><span class="countdown">%H</span></div><span class="countdown-text">Hours</span></div></div><div class="col-sm-3"><div class="single-countdown text-center"><div class="countdown-wrapper"><i class="far fa-heart"></i><span class="countdown">%M</span></div><span class="countdown-text">Minutes</span></div></div><div class="col-sm-3"><div class="single-countdown text-center"><div class="countdown-wrapper"><i class="far fa-heart"></i><span class="countdown">%S</span></div><span class="countdown-text">Secounds</span></div></div></div>'));
    });

    // isotop active

    var $grid = $('.gallery').isotope({
      itemSelector: '.gal-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.gal-item'
      }
    });

    // filter items on button click
    $('.filter-menu ul').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // filter items on button click
    $('.filter-menu ul').on( 'click', 'li', function() {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
    });

    //prettyPhoto js

    $("a[rel^='prettyPhoto[pp_gal]']").prettyPhoto();
    
}(jQuery));