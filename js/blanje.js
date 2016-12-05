$(document).ready(function () {
	$("#slide" + 1).show();
	$("#page" + 1).css("display", "flex");

	startSlider();
	objectFitImages();

	if ($(window).width() < 900) {
		resizeBackground();
	}
});


// Background image FIX FOR MOBILE BROWSER ADDRESS BAR JUMP

var screenHeight = $(window).height();
$(window).resize(function () {
	if ($(window).width() < 900) {
		resizeBackground();
	}
	initMap();
});

function resizeBackground() {
	$('#background').css('height', (screenHeight + 60) + 'px');
}


// Image slider

sliderStarted = false;
currentSlide = 1;
nextSlide = 2;
imageCount = $("#image-slider > img").length;

$("#prev-slide").on("click", slidePrev);
$("#next-slide").on("click", slideNext);

// stops image slider animations to queue up when you switch tabs
$(window).on("focus", function () {
	if (sliderStarted == false) {
		startSlider();
	}
});
$(window).on("blur", stopSlider);

function startSlider() {
	if (sliderStarted == false) {

		loop = setInterval(function () {
			if (nextSlide > imageCount) {
				nextSlide = 1;
				currentSlide = imageCount;
			}

			$("#slide" + currentSlide).hide("slide", { direction: "left" }, 600);
			$("#slide" + nextSlide).show("slide", { direction: "right" }, 600);

			currentSlide = nextSlide;
			nextSlide = nextSlide + 1;
		}, 4000)
		sliderStarted = true;
	}
}

function stopSlider() {
	window.clearInterval(loop);
	sliderStarted = false;
}

function slidePrev() {
	$("#prev-slide").off();
	stopSlider();
	newSlide = currentSlide;

	if (newSlide == 1) {
		currentSlide = imageCount;
	} else {
		currentSlide = newSlide - 1;
	}

	$("#slide" + newSlide).hide("slide", { direction: "right" }, 600);
	$("#slide" + currentSlide).show("slide", { direction: "left" }, 600, function () {
		$("#prev-slide").on("click", slidePrev);
	});

	nextSlide = currentSlide + 1;
	startSlider();
}

function slideNext() {
	$("#next-slide").off();
	stopSlider();
	newSlide = currentSlide;

	if (newSlide == imageCount) {
		currentSlide = 1;
	} else {
		currentSlide = newSlide + 1;
	}

	$("#slide" + newSlide).hide("slide", { direction: "left" }, 600);
	$("#slide" + currentSlide).show("slide", { direction: "right" }, 600, function () {
		$("#next-slide").on("click", slideNext);
	});

	nextSlide = currentSlide + 1;
	startSlider();
}

$("#image-slider > img").hover(
	function () {
		stopSlider();
	},
	function () {
		startSlider();
	}
);


// Dynamic navbar

navbarOffset = $("#navbar").offset().top;
isNavbarFixed = false;
isNavbarHovered = false;

$(window).scroll(function () {
	if ($(this).scrollTop() > navbarOffset) {
		$("#navbar").css({ "position": "fixed", "top": "0" });
		$("#menu").css("background-color", "rgba(80, 80, 80, 1)");
		$("#post-header").css("height", "180px");
		isNavbarFixed = true;
	} else {
		$("#navbar").css("position", "static");
		$("#menu").css("background-color", "rgba(23, 23, 23, 0.3)");
		$("#post-header").css("height", "120px");
		isNavbarFixed = false;
		$("#menu").css("opacity", "1");
	}
});

$("#menu").on("mouseenter", function () {
	$("#menu").css("opacity", "1");
	isNavbarHovered = true;
});

$("#menu").on("mouseleave", function () {
	isNavbarHovered = false;
});

$(window).on("click", function () {
	if (isNavbarFixed && !isNavbarHovered) {
		$("#menu").css("opacity", "0");
	}
});


// Mobile navbar

$("#mobile-navbar i").on("click", function () {
	showMobile();
});

function showMobile() {
	$("#mobile-menu").slideToggle(500);
	$("#mobile-menu li").css("background-color", "rgba(23, 23, 23, 0.3)")
}

$("#mobile-menu a").on("click", function () {
	$("#mobile-menu").slideUp(500);
});

$("#mobile-menu li").on("click", function () {
	$(this).css("background-color", "rgba(23, 23, 23, 0.6)")
});


// Smooth scroll

$("#go-pocetna").click(function (e) {
	e.preventDefault();
	var pocetna = $("#pocetna").offset().top;
	$("html, body").animate({ scrollTop: pocetna - 60 }, 300);
	return false;
});
$("#go-vijesti").click(function (e) {
	e.preventDefault();
	var vijesti = $("#vijesti").offset().top;
	$("html, body").animate({ scrollTop: vijesti - 60 }, 300);
	return false;
});
$("#go-galerija").click(function (e) {
	e.preventDefault();
	var galerija = $("#galerija").offset().top;
	$("html, body").animate({ scrollTop: galerija - 60 }, 300);
	return false;
});
$("#go-o-nama").click(function (e) {
	e.preventDefault();
	var oNama = $("#o-nama").offset().top;
	$("html, body").animate({ scrollTop: oNama - 60 }, 300);
	return false;
});
$("#go-kontakt").click(function (e) {
	e.preventDefault();
	var kontakt = $("#kontakt").offset().top;
	$("html, body").animate({ scrollTop: kontakt - 60 }, 300);
	return false;
});


// Mobile smooth scroll

$("#go-pocetna-mobile").click(function (e) {
	e.preventDefault();
	var pocetna = $("#pocetna").offset().top;
	$("html, body").animate({ scrollTop: pocetna - 40 }, 300);
	return false;
});
$("#go-vijesti-mobile").click(function (e) {
	e.preventDefault();
	var vijesti = $("#vijesti").offset().top;
	$("html, body").animate({ scrollTop: vijesti - 40 }, 300);
	return false;
});
$("#go-galerija-mobile").click(function (e) {
	e.preventDefault();
	var galerija = $("#galerija").offset().top;
	$("html, body").animate({ scrollTop: galerija - 40 }, 300);
	return false;
});
$("#go-o-nama-mobile").click(function (e) {
	e.preventDefault();
	var oNama = $("#o-nama").offset().top;
	$("html, body").animate({ scrollTop: oNama - 40 }, 300);
	return false;
});
$("#go-kontakt-mobile").click(function (e) {
	e.preventDefault();
	var kontakt = $("#kontakt").offset().top;
	$("html, body").animate({ scrollTop: kontakt - 40 }, 300);
	return false;
});


// Gallery pages

currentPage = 1;
pageCount = $(".container-gallery-images").length;

$("#prev-page").on("click", function () {
	prevPage();
});
$("#next-page").on("click", function () {
	nextPage();
});

function prevPage() {
	newPage = currentPage - 1;

	if (newPage >= 1) {
		$(".container-gallery-images").hide();
		$("#page" + newPage).css("display", "flex");

		currentPage = newPage;
		newPage = newPage - 1;
	}

	if (newPage > 0) {
		$("#prev-page h3").html("Stranica " + newPage);
		$("#prev-page h3").fadeIn(300);
	} else {
		$("#prev-page h3").fadeOut(300);
	}
	$("#next-page h3").fadeIn(300);
	$("#next-page h3").html("Stranica " + (currentPage + 1));
}

function nextPage() {
	newPage = currentPage + 1;

	if (newPage <= pageCount) {
		$(".container-gallery-images").hide();
		$("#page" + newPage).css("display", "flex");

		currentPage = newPage;
		newPage = newPage + 1;
	}

	if (newPage < (pageCount + 1)) {
		$("#next-page h3").html("Stranica " + newPage);
		$("#next-page h3").fadeIn(300);
	} else {
		$("#next-page h3").fadeOut(300);
	}
	$("#prev-page h3").fadeIn(300);
	$("#prev-page h3").html("Stranica " + (currentPage - 1));
}


// Gallery images

$(".container-image img").on("click", function () {
	getPictureId(this);
});

function getPictureId(picture) {
	pictureId = parseInt(picture.id);
	currentPicture = pictureId;
	pictureCount = $(".container-gallery-images img").length;

	$("#gallery-cover").fadeIn(500, function () {
		$(".container-image img").removeClass("image-cover").addClass("image-contain");
		objectFitImages();

		$("#" + pictureId).clone().appendTo("#high-res-pictures").show();
	});

	if (currentPicture > 1) {
		$("#prev-picture").fadeIn(300);
	} else {
		$("#prev-picture").fadeOut(300);
	}
	if (currentPicture < pictureCount) {
		$("#next-picture").fadeIn(300);
	} else {
		$("#next-picture").fadeOut(300);
	}
}


$("#prev-picture").on("click", function () {
	imagePrev();
});
$("#next-picture").on("click", function () {
	imageNext();
});
$("#exit-picture").on("click", function () {
	imageExit();
});
$(document).on("keyup", function (e) {
	if (e.keyCode == 27) {
		imageExit();
	}
});

function imagePrev() {
	$("#prev-picture").off();
	nextPicture = currentPicture - 1;

	if (currentPicture >= 1) {
		$("#high-res-pictures img").hide("slide", { direction: "right" }, 600);
		$("#" + nextPicture).clone().appendTo("#high-res-pictures").show("slide", { direction: "left" }, 600, function () {
			$("#prev-picture").on("click", imagePrev);
		});
		currentPicture = nextPicture;
		nextPicture = nextPicture - 1;
	}

	if (nextPicture > 0) {
		$("#prev-picture").fadeIn(300);
	} else {
		$("#prev-picture").fadeOut(300);
	}
	$("#next-picture").fadeIn(300);
}

function imageNext() {
	$("#next-picture").off();
	nextPicture = currentPicture + 1;

	if (currentPicture <= pictureCount) {
		$("#high-res-pictures img").hide("slide", { direction: "left" }, 600);
		$("#" + nextPicture).clone().appendTo("#high-res-pictures").show("slide", { direction: "right" }, 600, function () {
			$("#next-picture").on("click", imageNext);
		});
		currentPicture = nextPicture;
		nextPicture = nextPicture + 1;
	}

	if (nextPicture < (pictureCount + 1)) {
		$("#next-picture").fadeIn(300);
	} else {
		$("#next-picture").fadeOut(300);
	}
	$("#prev-picture").fadeIn(300);
}

function imageExit() {
	$(".container-image img").removeClass("image-contain").addClass("image-cover");
		objectFitImages();

	$("#high-res-pictures img").fadeOut(500, function () {
		$("#high-res-pictures img").remove();
	});
	$("#gallery-cover").fadeOut(500);
}


// Google maps

function initMap() {
	var blanje = { lat: 45.715531, lng: 18.083073 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: blanje
	});
	var marker = new google.maps.Marker({
		position: blanje,
		map: map
	});
	google.maps.event.trigger(map, "resize");
}