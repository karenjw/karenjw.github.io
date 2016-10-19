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

// buttons 

function addedToCart() {
	$(".buttonAdd").removeClass("buttonAddHoverable");
	$(".buttonAdd").html("<span>Added to Cart!</span>");

	setTimeout(function(){
		restoreAddedToCart();
	}, 2000);
}

function restoreAddedToCart() {
	$(".buttonAdd").html("<span>Add</span>");
	$(".buttonAdd").addClass("buttonAddHoverable");
}

function setClass(buttonId, cls) {
	var button = $("#"+buttonId);
	button.addClass(cls);

	setTimeout(function(){
		button.removeClass(cls);
	}, 2000);
}
