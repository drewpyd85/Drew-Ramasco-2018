$(document).ready(function(){
    
    var $win = $(window);
    var winH = $win.height();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > winH) {
				$('#nav-container').fadeIn();
			} else {
				$('#nav-container').fadeOut();
			}
		});
	});
});