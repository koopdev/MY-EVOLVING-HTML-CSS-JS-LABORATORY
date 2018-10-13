$(function() {
	'use strict';
	$(window).on('load', function() {
		$('body').addClass('loaded');
	});
	if ($('body').attr('data-preloader') === '1') {
		var loaderData1 = "<div class='preloader'><div><span class='spinner'></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData1;
	} else if ($('body').attr('data-preloader') === '2') {
		var loaderData2 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData2;
	} else if ($('body').attr('data-preloader') === '3') {
		var loaderData3 = "<div class='preloader'><div><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData3;
	} else if ($('body').attr('data-preloader') === '4') {
		var loaderData4 = "<div class='preloader'><div><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData4;
	} else if ($('body').attr('data-preloader') === '5') {
		var loaderData5 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData5;
	} else if ($('body').attr('data-preloader') === '6') {
		var loaderData6 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData6;
	} else if ($('body').attr('data-preloader') === '7') {
		var loaderData7 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData7;
	} else if ($('body').attr('data-preloader') === '8') {
		var loaderData8 = "<div class='preloader'><div><span class='spinner-box'><span></span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData8;
	} else if ($('body').attr('data-preloader') === '9') {
		var loaderData9 =
			"<div class='preloader'><div><span></span><span></span><span></span><span></span><span></span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData9;
	} else if ($('body').attr('data-preloader') === '10') {
		var loaderData10 =
			"<div class='preloader'><div><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></div></div>";
		document.getElementById('preloader').innerHTML = loaderData10;
	}
	$('body').scrollspy({ target: '.nav', offset: 65 });
	var navbar = $('.navbar');
	$(window).on('scroll', function() {
		if ($(window).scrollTop() >= 30) {
			navbar.addClass('navbar-shrink');
		} else {
			navbar.removeClass('navbar-shrink');
		}
	});
	var nav = $('.nav');
	var toggleBtn = $('.toggle-btn');
	toggleBtn.on('click', function(e) {
		if (nav.hasClass('nav-show')) {
			nav.removeClass('nav-show');
		} else {
			nav.addClass('nav-show');
		}
		e.stopPropagation();
	});
	toggleBtn.on('click', function() {
		if (toggleBtn.hasClass('toggle-close')) {
			toggleBtn.removeClass('toggle-close');
		} else {
			toggleBtn.addClass('toggle-close');
		}
	});
	$(document).on('click', function() {
		if (nav.hasClass('nav-show')) {
			nav.removeClass('nav-show');
		}
		if (toggleBtn.hasClass('toggle-close')) {
			toggleBtn.removeClass('toggle-close');
		}
	});
	var htmlBody = $('html,body');
	var smoothLinks = $('.nav li a, .home-middle-content a, .scroll-down-button');
	smoothLinks.on('click', function(e) {
		htmlBody.animate({ scrollTop: $(this.hash).offset().top - 60 }, 800, 'easeInOutQuart');
		e.preventDefault();
	});
	var goTopButton = '.go-top-button';
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 700) {
			$(goTopButton).addClass('go-top-button-visible');
		} else {
			$(goTopButton).removeClass('go-top-button-visible');
		}
	});
	$(goTopButton).on('click', function() {
		htmlBody.animate({ scrollTop: 0 }, 800, 'easeInOutQuart');
		return false;
	});
	$(window).on('load', function() {
		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			startDelay: 100,
			typeSpeed: 100,
			backDelay: 400,
			backSpeed: 50,
			loop: true,
			loopCount: Infinity,
			});
	});
	$('#facts').appear(
		function() {
			var factsCounter = $('.facts-counter');
			factsCounter.each(function() {
				$(this)
					.prop('Counter', 0)
					.animate(
						{ Counter: $(this).text() },
						{
							duration: 3000,
							easing: 'swing',
							step: function(now) {
								$(this).text(Math.ceil(now));
							},
						},
					);
			});
		},
		{ accX: 0, accY: -10 },
	);
	$('#portfolio').imagesLoaded(function() {
		var $portfolioWrapper = $('.portfolioWrapper').isotope({
			itemSelector: '.portfolio-item',
			transitionDuration: 350,
		});
		var filterButton = $('.portfolio-filter ul li');
		filterButton.on('click', function() {
			var filterValue = $(this).attr('data-filter');
			$portfolioWrapper.isotope({ filter: filterValue });
			filterButton.removeClass('active');
			$(this).addClass('active');
		});
	});
	$('.portfolio-hover').magnificPopup({ type: 'inline', fixedContentPos: false, removalDelay: 200, preloader: false });
	var popupYoutube = $('.popup-youtube');
	var youtubeSrc = popupYoutube.attr('data-youtube-src');
	popupYoutube.magnificPopup({
		items: { src: youtubeSrc },
		type: 'iframe',
		fixedContentPos: false,
		removalDelay: 200,
		preloader: false,
		iframe: { patterns: { youtube: { index: 'youtube.com/', id: 'v=', src: youtubeSrc } }, srcAction: 'iframe_src' },
	});
	var popupVimeo = $('.popup-vimeo');
	var vimeoSrc = popupVimeo.attr('data-vimeo-src');
	popupVimeo.magnificPopup({
		items: { src: vimeoSrc },
		type: 'iframe',
		fixedContentPos: false,
		removalDelay: 200,
		preloader: false,
		iframe: { patterns: { vimeo: { index: 'vimeo.com/', id: '/', src: vimeoSrc } }, srcAction: 'iframe_src' },
	});
	$('#testimonialSlider').owlCarousel({
		items: 1,
		rewind: true,
		margin: 30,
		dots: true,
		dotsSpeed: 300,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 300,
	});
	$('#clientsSlider').owlCarousel({
		margin: 30,
		rewind: true,
		dots: false,
		dotsSpeed: 300,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 300,
		responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 } },
	});
	$('#contactform').on('submit', function(e) {
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		if (name === '') {
			$('#name').addClass('error-bg');
		}
		if (email === '') {
			$('#email').addClass('error-bg');
		}
		if (subject === '') {
			$('#subject').addClass('error-bg');
		}
		if (message === '') {
			$('#message').addClass('error-bg');
		} else {
			$.ajax({
				url: 'contact-form.php',
				data: $(this).serialize(),
				type: 'POST',
				success: function(data) {
					$('#success').addClass('show-result');
					$('#contactform').each(function() {
						this.reset();
					});
				},
				error: function(data) {
					$('#error').addClass('show-result');
				},
			});
			var forms = $('#contactform input, #contactform textarea');
			forms.removeClass('error-bg');
		}
		e.preventDefault();
	});
});
