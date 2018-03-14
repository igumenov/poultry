$(document).ready(function(){
	$(".top_slider").owlCarousel({
		items: 1,
		nav: true,
		navText: [,],
		loop: true,
	});
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene, {
		limitY : 0,
		originX : 0,
	});
	$('.block_for_clients .right .block .line2 .row .item .name').matchHeight();
	$('.news_block .items .item').matchHeight();
	$('.contacts_block .cols .col').matchHeight();

    $(".partners_block .slides").owlCarousel({
        items: 3,
        nav:true,
        loop: true,
		navText: [,],
		dots: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 2,
				center: true,
				nav:false,
				dots: false,

			},
			// breakpoint from 480 up
			480 : {
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				center: true,
				nav:false,
			},
			// breakpoint from 990 up
			990 : {
				items: 3,
			},
			// breakpoint from 1025 up
			1025 : {
				items: 3,
			}
		}
    });
    $(".partners_block_logos .slides").owlCarousel({
        items: 5,
        nav:false,
        loop: true,
		navText: [,],
		dots: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 4,
				center: true,
				nav:false,
				dots: false,
			},
			// breakpoint from 480 up
			480 : {

			},
			// breakpoint from 768 up
			768 : {
				items: 3,
				nav:false,

			},
			// breakpoint from 990 up
			990 : {
				items: 4,
				margin: 20,
			},
			// breakpoint from 1025 up
			1025 : {
				items: 5,
			}
		}
	});

	$('.block_for_clients .right .block .special').on('scrollSpy:enter', function() {
		$(this).addClass('anime');
	});
	$('.block_for_clients .right .block .special').on('scrollSpy:exit', function() {
		$(this).removeClass('anime');
	});
	$('.block_for_clients .right .block .special').scrollSpy();




	$('.subscriber').on('scrollSpy:enter', function() {
		$('.subscriber .block').addClass('anime');
		$('.subscriber .block .item2 .utka').addClass('anime');
	});
	$('.subscriber').on('scrollSpy:exit', function() {
		$('.subscriber .block').removeClass('anime');
		$('.subscriber .block .item2 .utka').removeClass('anime');
	});
	$('.subscriber').scrollSpy();

	$('.mmenu').click(function(){
		event.preventDefault();
		$('#mmenu').fadeIn();
	});
	$('#mmenu .close').click(function(){
		event.preventDefault();
		$('#mmenu').fadeOut();
	});

	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 30;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		$('#mmenu').fadeOut();
	});
});