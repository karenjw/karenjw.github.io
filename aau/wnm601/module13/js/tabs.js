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
	$(".small-images-y img").on("mouseenter",function(e){

		var imagesrc = $(this).data("src");
		var imageheading = $(this).data("heading");
		var imagetitle = $(this).data("title");

		$(".big-image-y")
			.find("img").attr({
				"src":"images/"+imagesrc,
				"title":imagetitle
			})
			.siblings("h2").html(imageheading);
	});
});

$(function(){
	$(".small-images-s img").on("mouseenter",function(e){

		var imagesrc = $(this).data("src");
		var imageheading = $(this).data("heading");
		var imagetitle = $(this).data("title");

		$(".big-image-s")
			.find("img").attr({
				"src":"images/"+imagesrc,
				"title":imagetitle
			})
			.siblings("h2").html(imageheading);
	});
});
