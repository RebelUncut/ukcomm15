$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	function scrollDown() {
		$('html, body').stop().animate({
	        'scrollTop': $("#stream").offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    }); 
	}

	window.onload = scrollDown;
});