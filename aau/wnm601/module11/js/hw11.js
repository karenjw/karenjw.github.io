function showtab(index) {
	$(".content").siblings().hide();
	$(".content").eq(index).show();
}

$(function(){
	$(".tab").on("click", function(){
		var index = $(this).index();
		console.log(index);

		$(".content").eq(index).addClass("active")
			.siblings().removeClass("active");
			
		$(this).addClass("active")
			.siblings().removeClass("active");
	})
});

$(function(){
	$(".small-images-sf img").on("mouseenter",function(e){
		// console.log(e);
		// event data is always passed to an event listener

		var imagesrc = $(this).data("src");
		var imageheading = $(this).data("heading");
		var imagetitle = $(this).data("title");

		$(".big-image-sf")
			.find("img").attr({
				"src":"image/"+imagesrc,
				"title":imagetitle
			})
			.siblings("h2").html(imageheading);
	});
});

$(function(){
	$(".small-images-d img").on("mouseenter",function(e){
		// console.log(e);
		// event data is always passed to an event listener

		var imagesrc = $(this).data("src");
		var imageheading = $(this).data("heading");
		var imagetitle = $(this).data("title");

		$(".big-image-d")
			.find("img").attr({
				"src":"image/"+imagesrc,
				"title":imagetitle
			})
			.siblings("h2").html(imageheading);
	});
});