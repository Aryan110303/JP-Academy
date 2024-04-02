;(function($) {
    "use strict";
	
  
    
	
    //*  Main slider js 
    function home_main_slider(){
        if ( $('.slider_inner').length ){
            $('.slider_inner').camera({
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,  
                minHeight: '500px',
            }); 
        }
    }
    
   home_main_slider();
    
   
    
    
    /*Function Calls*/ 
    // searchFrom ();
    // new WOW().init();
	
    // testimonialsCarosel ();
    // portfolio_isotope ();
    // counterUp ();  
    // partnersCarosel ();
    // ourSkrill ();
    // counterUp2 ();
    // mainNavbar ();
    // preloader ();
    
})(jQuery);