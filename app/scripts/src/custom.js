var $win = $(window);
var winH = $win.height();

$(document).ready(function(){	
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