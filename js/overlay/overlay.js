(function($) {
 "use strict";
 
   $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 720);
          return false;
        }
      }
    });
  });
 
	$('.menu a').click(function(){
	 $('#toggle').click();
	});
 

  
})(jQuery);