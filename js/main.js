jQuery(document).ready(function( $ ) {

  
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

// $('.page-scroll').click(function(e){
//   e.preventDefault();
//   var target = $($(this).attr('href'));
//   if(target.length){
//     var scrollTo = target.offset().top -50;
//     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//   }
// });

 // Closes responsive menu when a scroll trigger link is clicked
  // $('.page-scroll').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });



   // stickey menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });
  

  
   // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


 /* ----------------------------------------------------------- */
  /*  2. active menu
  /* ----------------------------------------------------------- */

 
  // Clients carousel (uses the Owl Carousel library)
  // $(".activity-carousel").owlCarousel({
  //   autoplay: false,
  //   nav: true,
  //   dots: false,
  //   loop: true,
  //   navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
  //   responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 4 }
  //   }
  // });

  // news carousel (uses the Owl Carousel library)
  $(".about-carousel").owlCarousel({
   autoplay: true,
    nav: false,
    dots: false,
    loop: true,
    // navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });

// news carousel (uses the Owl Carousel library)
  $(".courses-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: false,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 3 }
    }
  });


 // news carousel (uses the Owl Carousel library)
  $(".upcoming-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: false,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });

  $(".activities-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: false,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 2 }
    }
  });

  // news carousel (uses the Owl Carousel library)
  $(".placement-carousel").owlCarousel({
   autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 4 }
    }
  });

  // news carousel (uses the Owl Carousel library)
  $(".message-carousel").owlCarousel({
   autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
   autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    //navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });


   // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 2 }, 768: { items: 3 }, 900: { items: 6 }
    }
  });
  
   // timeline carousel (uses the Owl Carousel library)
  $(".hightlights-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: true,
    loop: true,
    navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 3 }
    }
  });
});


  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  

(function() {
      $('.image-link').magnificPopup({
          type: 'image',
            gallery:{
              enabled:true,
          }
      });
    }());

  
  // -------------------------------------------------------------
    //  portfolio filter
    // -------------------------------------------------------------
  $(document).ready(function(){
    var winDow = $(window);   
    var $container = $('.portfolio-filter');    
    $container.isotope({
      itemSelector : '.portfolio',
      layoutMode : 'masonry',
      // disable resizing
      resizable: false,
      // set columnWidth to a percentage of container width
      masonry: {
          columnWidth: $container.width() / 12
      },
    });

    // update columnWidth on window resize
    $(window).resize(function(){
      $container.isotope({
          // set columnWidth to a percentage of container width
          masonry: {
          columnWidth: $container.width() / 12

          }
      });
    });

    $('.portfoli-menu a').click(function(){
        var selector = $(this).attr('data-filter');

        $container.isotope({

        filter: selector,
        animationOptions: {
            duration: 750,
          easing: 'linear',
          queue: false,
        }
       });
       return false;
    });

    var $optionSets = $('.portfoli-menu'),

    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);

        // don't proceed if already selected
        if ( $this.hasClass('active') ) {
        return false;
        }
        var $optionSet = $this.parents('.portfoli-menu');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
      key = $optionSet.attr('data-option-key'),
      value = $this.attr('data-filter');

        // parse 'false' as false boolean

        value = value === 'false' ? false : value;

        options[ key ] = value;

        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // otherwise, apply new options
        $container.isotope( options );
      }   

        return false;
    });
  });
  



$(function(){
    var $page = jQuery.url.attr("file");
    $('ul.nav-menu li a').each(function(){
      var $href = $(this).attr('href');
      if ( ($href == $page) || ($href == '') ) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

   // $(function(){
   //      $page = jQuery.url.attr("file");
   //      $('ul.nav-menu li a').each(function(){
   //          var $href = $(this).attr('href');
   //          if ( ($href == $page) || ($href == '') ) {
   //              $(this).addClass('menuactive');
   //          } else {
   //              $(this).removeClass('menuactive');
   //          }
   //      });
   //  });