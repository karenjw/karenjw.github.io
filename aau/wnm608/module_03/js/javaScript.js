// big-small-images
$(function () {
	$(".small-images img").on("mouseenter",function (e) {
		var imagesrc = $(this).data("src");

	$(".big-image")
		.find("img").attr({
			"src":"images/"+imagesrc,
		})
	})
})

// tabs-list & content
function showtab (index) {
	$(".content").siblings().hide();
	$(".content").eq(index).show();
}

$(function(){
	$(".tab").on("click", function(){
		var i = $(this).index();
		console.log(i);

		$(".content").eq(i).addClass("active")
			.siblings().removeClass("active");

		$(this).addClass("active")
			.siblings().removeClass("active");
	})
})