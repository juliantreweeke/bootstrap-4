
$( document ).ready(function() {


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  // Cache the Window object
	var $window = $(window);

	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

	$('section[data-type="background"]').each(function(){
    // disable parallax if on mobile browser...
    // will attempt to fix this later
    if ($(window).width() <= 900){
      return;
    }

		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

		}); // end window scroll
	});

});
