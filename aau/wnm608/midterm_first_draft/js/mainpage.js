function Carousel(element){
	// Instantiate Variables
	var carousel = this;

	carousel.el = $(element);
	carousel.deck =
		carousel.el.children(".carousel-deck");
	carousel.controls =
		carousel.el.children(".carousel-controls");
	carousel.controlLeft =
		carousel.controls.children(".carousel-moveleft");
	carousel.controlRight =
		carousel.controls.children(".carousel-moveright");
	carousel.slides =
		carousel.deck.children(".carousel-slide");

	carousel.slides.desc =
		carousel.slides.children(".slide-desc");
	carousel.slides.desc.hover(function() {
		console.log("Pausing interval");
		carousel.pauseInterval(true);
	}, function() {
		console.log("Resuming interval");
		carousel.setInterval();
	});

	carousel.currentSlide = 0;
	carousel.numberOfSlides = carousel.slides.length;

	// Create Function / Methods
	carousel.controlLeft.on("click",function(){
		carousel.pauseInterval(false);
		carousel.changePosition(false);
	});
	carousel.controlRight.on("click",function(){
		carousel.pauseInterval(false);
		carousel.changePosition(true);
	});

	carousel.hideNonactive = function(active) {
		var left = (active == 0) ? carousel.numberOfSlides - 1 : active - 1;
		var right = (active + 1) % carousel.numberOfSlides;

		carousel.slides.eq(active).addClass("active")
				.siblings().removeClass("active");

		carousel.slides.eq(right)
				.addClass("hide-right")
				.siblings().removeClass("hide-right");
	}

	carousel.changePosition = function(direction){
		console.log(direction);

		var oldSlideId = carousel.currentSlide;
		var newSlideId;
		if (direction) {
			newSlideId = (oldSlideId + 1) % carousel.numberOfSlides;
		} else {
			newSlideId = (oldSlideId == 0) ? carousel.numberOfSlides - 1 : oldSlideId - 1;
		}

		console.log(oldSlideId);
		console.log(newSlideId);

		carousel.hideNonactive(newSlideId);

		carousel.currentSlide = newSlideId;
	}

	carousel.pauseInterval = function(indefinite) {
		clearInterval(carousel.intervalId);
		clearTimeout(carousel.timeoutId);
		if (!indefinite) {
			carousel.timeoutId = setTimeout(function() {
				carousel.setInterval();
			}, 10000);
		}
	}

	carousel.setInterval = function() {
		clearTimeout(carousel.timeoutId);
		carousel.intervalId = setInterval(function(){
			carousel.changePosition(true);
		}, 2000);
	}

	// Run Code
	carousel.hideNonactive(0);
	console.log(carousel);

	carousel.setInterval();
}

// Document Ready
$(function(){
	$(".carousel").each(function(){
		new Carousel(this);
	})
})