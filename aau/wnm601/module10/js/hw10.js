function showtab(index) {
	$(".content").siblings().hide();
	$(".content").eq(index).show();
	$(".tab").siblings().css('background-color', 'grey');
	$(".tab").eq(index).css('background-color', 'red');
}

$(function(){
	showtab(0);

	$(".tab").on("click", function(){
		var index = $(this).index();
		console.log(index);

		showtab(index);
	})
});