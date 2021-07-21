window.addEventListener('DOMContentLoaded', function() {

//HEADER:
//BURGER-MENU
document.querySelector('.header__burger-menu').addEventListener('click', function() {
    // обращаемся к документу и запускаем обработчик события 'клик' и запускаем функцию
		document.querySelector('.header__menu').classList.add('is-active') 
		document.querySelector('.header__btn-hide').classList.add('is-active') 
});

//EXIT-BURGER
document.querySelector('.header__btn-hide').addEventListener('click', function() {
    	document.querySelector('.header__menu.is-active').classList.remove('is-active') 
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
const drop = document.querySelectorAll('.scrollbar');
const btnAfter = document.querySelectorAll('.header__nav-bottom-btn');

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove('visible')})
	e.currentTarget.closest('.header__bottom-nav-item').querySelector('.scrollbar').classList.toggle('visible');
	
	btnAfter.forEach(el => {el.classList.remove('reverse')})
	e.currentTarget.closest('.header__bottom-nav-item').querySelector('.header__nav-bottom-btn').classList.toggle('reverse');
  });
});

document.addEventListener('click', (e) => {
  //console.log(e.target)
  if (!e.target.classList.contains('scrollbar') && !e.target.classList.contains('btn-active')) {
	drop.forEach(el => {el.classList.remove('visible')})
	btnAfter.forEach(el => {el.classList.remove('reverse')})
  }

});


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
    var heroSwiper = new Swiper('.hero__slider', {
        slidesPerView: 1,
	    spaceBetween: 10,

	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	effect: 'fade'
    });
	
//GALLERY
//Gallery-Swiper	
	var gallerySwiper = new Swiper('.gallery__slider', {

		slidesPerView: 1,
		// slidesPerColumn: 1,
		//spaceBetween: 50,
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
//Modal
const modal = new GraphModal();




	//EVENTS
	//EVENTS-SWIPER
	if (document.documentElement.clientWidth < 768) {
		var eventSwiper = new Swiper('.events__slider', {
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
	let eventNews = function () {
		let eventCard = document.querySelectorAll('.event-card'),
			eventBtn = document.querySelector('.events__btn');

		eventBtn.addEventListener('click', function () {
			eventCard.forEach(item => {
				item.style.display = 'flex';
				eventBtn.style.display = 'none';
			})
		});
	};
	eventNews();
	
	//PUBLICATIONS
	//Publication-check
 const publicationBtn = document.querySelector('.check-header');
 const publicationFormLabel = document.querySelectorAll('.check-label');
 const publicationFormInput = document.querySelectorAll('.check');
 const publicationBtnArrow = document.querySelector('.check-header-arrow');

 const showActiveCheckbox = function()  {
   publicationFormInput.forEach(el => {
	 if (el.checked) {
		el.parentNode.classList.add('is-active')
	 }
   })
 }

 publicationBtn.addEventListener('click', () => {
	 publicationBtnArrow.classList.toggle('arrow-active');
	 publicationFormLabel.forEach(el => {
	   el.classList.toggle('is-active')
	   showActiveCheckbox();
	 })
   })
 
  for (let i = 0; i < publicationFormInput.length; i++) {
	 const el = publicationFormInput[i];
	 el.addEventListener('change', () => {
	   el.parentNode.classList.toggle('is-active');
	   showActiveCheckbox();
	 })
   }
   showActiveCheckbox();




	//PUBLICATIONS-SWIPER
	if (document.documentElement.clientWidth > 767) {
	var publicationSwiper = new Swiper('.publications__slider', {

		slidesPerView: 2,
		spaceBetween: 34,
		slidesPerGroup: 1,
			
		breakpoints: {
			
			1020: {
			 	slidesPerView: 2,
			 	spaceBetween: 47,
			 },
			 1300: {
				slidesPerView: 'auto',
				spaceBetween: 47,
			 },
			1500: {
				slidesPerView: 3,
				spaceBetween: 50,
				slidesPerGroup: 1,
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
var projectsSwiper = new Swiper('.project__slider', {

	slidesPerView: 1,
	spaceBetween: 50,
		
	breakpoints: {
		680: {
			slidesPerView: 2,
	 		spaceBetween: 34,
	 	},
		980: {
			slidesPerView: 2,
	 		spaceBetween: 50,
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


//ACCORDION
 $( function() {
   $( ".catalog__accordion" ).accordion({
	 collapsible: true,
	 heightStyle: "content",
   });
 });

//TAB BORDER and COUNTRY
 let countryBtns =  document.querySelectorAll('.catalog__tab-btn');

 countryBtns.forEach(function(tabsBtn) {  
   tabsBtn.addEventListener('click', function(event) {
	 countryBtns.forEach(function(border){ 
	   border.classList.remove('tab-active'); 
	 });
	 this.classList.add('tab-active'); 

	 const path = event.currentTarget.dataset.path;
	 document.querySelectorAll('.catalog__country').forEach(function(catalogTabs){
	   catalogTabs.classList.remove('tab-active');
	 });
	 document.querySelector(`[data-target="${path}"]`).classList.add('tab-active');
	 
	 document.querySelectorAll('.catalog__card').forEach(function(biography){ 
	   biography.classList.remove('tab-active');
	 });
	 document.querySelector(`[data-target="${path}"]`).classList.add('tab-active');

	 let elem = document.querySelector('.catalog__country.tab-active');
	 elem.firstElementChild.classList.add('tab-active'); 

	 let artBtns = document.querySelectorAll('.accordion__period-link').forEach(function(artBtn) { 
	   artBtn.classList.remove('tab-active'); 
	 })
	 let defaultButton = elem.querySelector('.first-btn');
	 defaultButton.classList.add('tab-active'); 
	 // console.log(defaultButton);

	 $('.catalog__accordion').accordion( "refresh" ); // обновление, перезапуск плагина для пересчета аккордеона
   });
 });
 
 //TAB AVTOR
 let artBtns = document.querySelectorAll('.accordion__period-link');
   
   artBtns.forEach(function(tabsBtn) { 
	 tabsBtn.addEventListener('click', function(event) { 
	   artBtns.forEach(function(border){ 
	   border.classList.remove('tab-active'); 
	 });
	 this.classList.add('tab-active'); 
	 
	 const path = event.currentTarget.dataset.path;
	 document.querySelectorAll('.catalog__card').forEach(function(catalogTabs){
	   catalogTabs.classList.remove('tab-active');
	 });
	 document.querySelector(`[data-target="${path}"]`).classList.add('tab-active');
   });
 });


//TOOLTIP
tippy('#tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки',
	theme: 'lilac',
});
  tippy('#tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
	theme: 'lilac',
});
  tippy('#tooltip3', {
    content: 'В стремлении повысить качество',
	theme: 'lilac',
});
  


 
 //SCROLL <980px
 if (document.documentElement.clientWidth <= 980) {
   artBtns.forEach(function(tabs) {
	 tabs.addEventListener('click', ()=>{
	   let activeCatalog = document.querySelector('.catalog__card.tab-active');
	   activeCatalog.scrollIntoView({
		 block: "start",
		 behavior: "smooth"
	   });
	 });
   });
 };

	
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
		myMap.controls.add('zoomControl', {right:0, top:15});
		
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
	
	document.querySelector('.fedback-btn').addEventListener('click', function(el) {
		const elementClasses = document.querySelectorAll('.fedback-form-element');
		elementClasses.forEach(el => {
			el.classList.add('is-active');
		});
	});
	

//SCROLL PAGE

$(document).ready(function() {
	var margin = 0; // переменная для контроля докрутки
	$(".hero__content-btn").click(function() { // тут пишите условия, для всех ссылок или для конкретных
	   $("html, body").animate({
		  scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
	   }, {
		  duration: 2000,
		  easing: "swing"
	   });
	   return false;
	});
  });






});
