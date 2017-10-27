//This is file of custom scripts for the Omnifood website.
$(document).ready(function(){
      //uses waypoints plugin for displaying sticky menu
  $('.js--section-features').waypoint(function(direction){
    if (direction =='down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
  },
    {
      offset: '10%;'
    }); //end waypoints sticky nav display

  // Scroll on buttons******************** //

  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  }); //end scroll to plans function

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  }); //end scroll to features function
  // End scroll on buttons ************** //

  //Navigation scroll begin//
   // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
    // ******** Navigation scroll end *************

}); // end document.ready function //
