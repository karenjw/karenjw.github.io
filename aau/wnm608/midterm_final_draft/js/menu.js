
/* Source: http://responsivenavigation.net/examples/simple-toggle/index.html */
$(document).ready(function() {
	$('#menu-toggle').click(function (e) {
	    $('#menu').toggleClass('open');
	    e.preventDefault();
    });
});
