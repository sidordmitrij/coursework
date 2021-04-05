window.addEventListener('DOMContentLoaded', function() {

//HEADER-BTN
//BURGER-MENU
document.querySelector('.header__burger-menu').addEventListener('click', function() {
    // обращаемся к документу и запускаем обработчик события 'клик' и запускаем функцию
		document.querySelector('.header__hide').classList.add('is-active') 
		document.querySelector('.header__btn-hide').classList.add('is-active') 
});

//EXIT-BURGER
document.querySelector('.header__btn-hide').addEventListener('click', function() {
    	document.querySelector('.header__hide.is-active').classList.remove('is-active') 
		document.querySelector('.header__btn-hide.is-active').classList.remove('is-active') 
});

//HEADER-SEARCH

if (document.documentElement.clientWidth <= 520) {
	document.querySelector('.header-search').addEventListener('click', function() {
		document.querySelector('.header__top').classList.add('is-active')
		document.querySelector('.header-search-text').classList.add('is-active')
		document.querySelector('.header__logo').classList.add('is-active') 
		document.querySelector('.header__burger-menu').classList.add('is-active')
		document.querySelector('.header__form-search').classList.add('is-active520')
		document.querySelector('.header__btn-hide').classList.add('is-active520')
	});
	document.querySelector('.header__btn-hide').addEventListener('click', function() {
		document.querySelector('.header__btn-hide.is-active520').classList.remove('is-active520') 
		document.querySelector('.header-search-text.is-active').classList.remove('is-active')
		document.querySelector('.header__top.is-active').classList.remove('is-active')
		document.querySelector('.header__logo.is-active').classList.remove('is-active') 
		document.querySelector('.header__burger-menu.is-active').classList.remove('is-active')
		document.querySelector('.header__form-search.is-active520').classList.remove('is-active520')
		document.querySelector('.header-search-text.is-active').classList.remove('is-active')
		
	});
} 
else if (document.documentElement.clientWidth <= 768) {
	document.querySelector('.header-search').addEventListener('click', function() {
		document.querySelector('.header-search-text').classList.add('is-active')
		document.querySelector('.header__logo').classList.add('is-active') 
		document.querySelector('.header__burger-menu').classList.add('is-active')
		document.querySelector('.header__form-search').classList.add('is-active')
		document.querySelector('.header__btn-hide').classList.add('is-active768')
	});
	document.querySelector('.header__btn-hide').addEventListener('click', function() {
		document.querySelector('.header__btn-hide.is-active768').classList.remove('is-active768') 
		document.querySelector('.header-search-text.is-active').classList.remove('is-active')
		document.querySelector('.header__logo.is-active').classList.remove('is-active') 
		document.querySelector('.header__burger-menu.is-active').classList.remove('is-active')
		document.querySelector('.header__form-search.is-active').classList.remove('is-active')
		document.querySelector('.header-search-text.is-active').classList.remove('is-active')
		
	});
} 
	else {
	document.querySelector('.header-search').addEventListener('click', function() {
    	document.querySelector('.header-search-text').classList.toggle('is-active') 
	});
	}


//SELECT-HEADER-BOTTOM
const button = document.querySelectorAll('.btn-active');
const drop = document.querySelectorAll('.scrollbar')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove(('visible'))})
    e.currentTarget.closest('li').querySelector('.scrollbar').classList.toggle('visible');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('.scrollbar') && !e.target.classList.contains('.btn-active')) {
    drop.forEach(el => {el.classList.remove(('.visible'))})
  }
});




// const btnActive = document.querySelectorAll('.btn-active');
// btnActive.forEach((btn)	=> {
// 			btn.addEventListener('click', function() {
// 				btn.parentNode.querySelector('.scrollbar').classList.toggle('visible') 
					
// 			});
// });



//SELECT-GALLERY
const selects = document.querySelectorAll('select');
selects.forEach((sel) => {
		let choices = new Choices(sel, {
				searchEnabled: false,
				shouldSort: false,
				itemSelectText: ''
			});
});

//Hero-Swiper
    var heroSwiper = new Swiper('.hero__swiper', {
        slidesPerView: 1,
	    spaceBetween: 10,

	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	effect: 'fade'
    });
	

//Gallery-Swiper	
	var gallerySwiper = new Swiper('.gallery__swiper', {

		slidesPerView: 1,
		// slidesPerColumn: 1,
		// spaceBetween: 34,
		slidesPerGroup: 1,
	
		breakpoints: {
			450: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				spaceBetween: 34,
				slidesPerGroup: 2,
			},
			680: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 34,
				slidesPerGroup: 2,
			},
			1601: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 50,
				slidesPerGroup: 3,
			},
		},
	
		navigation: {
			nextEl: '.gallery-next',
			prevEl: '.gallery-prev',
		},
	
		pagination: {
			el: '.gallery-pagination',
			clickable: true,
			type: 'fraction',
		},
	});


	//EVENTS
	//EVENTS-SWIPER
	if (document.documentElement.clientWidth < 768) {
		var eventSwiper = new Swiper('.events__swiper', {
			slidesPerView: 1,
			spaceBetween: 30,
			slidesPerGroup: 1,
			
			pagination: {
			  	el: '.events__pagination',
			  	clickable: true,
				//type: 'fraction',
			},
		  });
		  //swiper.update ()
		  //eventSwiper.update ()
		}
		

	//EVENTS-CARD
	const eventsBtn = document.querySelectorAll('.events__btn');
	eventsBtn.forEach((btn)	=> {
				btn.addEventListener('click', function() {
					btn.parentNode.querySelector('.card-invisible').classList.toggle('hide') 
				});
	});

		// const navbottomBtn = document.querySelectorAll('.header__nav-bottom-btn');
		// navbottomBtn.forEach((btn)	=> {
		// 			btn.addEventListener('click', function() {
		// 				 // обращаемся к документу и запускаем обработчик события 'клик' и запускаем функцию
		// 					btn.parentNode.querySelector('.scrollbar').classList.toggle('visible') 
		// 			});
		// });



	//PUBLICATIONS
	//Publication-check
	const checkHeader = document.querySelectorAll('.check-header');
	checkHeader.forEach((btn)	=> {
			btn.addEventListener('click', function() {
			 	btn.parentNode.querySelector('.publication-item').classList.toggle('is-active') 
					
			});
});


	//PUBLICATIONS-SWIPER
	if (document.documentElement.clientWidth > 767) {
	var publicationSwiper = new Swiper('.publications__swiper', {

		slidesPerView: 2,
		spaceBetween: 34,
		slidesPerGroup: 1,
	
		breakpoints: {
			750: {
				slidesPerView: 2,
				spaceBetween: 34,
				observer: true,
			},
			1500: {
				slidesPerView: 3,
				spaceBetween: 50,
				slidesPerGroup: 3,
			},
		},
	
		navigation: {
			nextEl: '.publication-next',
			prevEl: '.publication-prev',
		},
	
	
		pagination: {
			el: '.publication-pagination',
			clickable: true,
			type: 'fraction',
		},
	});
	}

//PROJECTS-SWIPER
var projectsSwiper = new Swiper('.project__swiper', {

	slidesPerView: 1,
	slidesPerGroup: 1,
	
	breakpoints: {
		880: {
			slidesPerView: 2,
	 		spaceBetween: 34,
	 		slidesPerGroup: 2,
	 	},
	 	1400: {
	 		slidesPerView: 3,
	 		spaceBetween: 50,
	 		slidesPerGroup: 3,
	 	},
	 },

	navigation: {
		nextEl: '.project-next',
		prevEl: '.project-prev',
	},

});	


//Accordion
$( function() {

	var icons = {
	  header: "ui-icon-circle-arrow-e",
	  activeHeader: "ui-icon-circle-arrow-s"
	};
  
	$( "#accordion" ).accordion({
	  active: 0, //при открытии страницы первая вкладка развернута
	  collapsible: true, //разрешает разворачивать вкладки
	  heightStyle: "content", //высота по содержимому
	  icons: icons
	});
  
	$( "#toggle" ).button().on( "click", function() {
	  if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
		$( "#accordion" ).accordion( "option", "icons", null );
	  } else {
		$( "#accordion" ).accordion( "option", "icons", icons );
	  }
	});
  
  });
	// Getter
	var collapsible = $( ".selector" ).accordion( "option", "collapsible" );
  
	// Setter
	$( ".selector" ).accordion( "option", "collapsible", true );
	$( ".selector" ).accordion({
	  collapsible: true
	});
 
 //MAPS
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        ymaps.ready(function () {
        	var myMap = new ymaps.Map('map', {
				center: [55.75846306898368,37.601079499999905],
				zoom: 16,
				controls: []
			},{
				searchControlProvider: 'yandex#search'
			});
		
		// Добавим на карту ползунок масштаба и линейку.
		myMap.controls.add('zoomControl');
		
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Blanchard',
                balloonContent: 'Место назначения'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/marker.png',
                // Размеры метки.
                iconImageSize: [20, 20],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                iconContent: '12'
    
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
}
 
	//FORM
	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7(999) 999-99-99");
	im.mask(selector);

	new JustValidate('.form-fedback', {
		rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 30
		},
		tel: {
			required: true,
			function: (name, value) => {
			const phone = selector.inputmask.unmaskedvalue()
			return Number(phone) && phone.length === 10
			}
		},
		},
	});
	
	document.querySelector('fedback-btn').addEventListener('click', function(el) {
		const elementClasses = document.querySelectorAll('.fedback-form-element');
		elementClasses.forEach(el => {
			el.classList.add('is-active');
		});
	});
	




});
