	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if(isMobile.any()){}
	
if(location.hash){
		var hsh=location.hash.replace('#','');
	if($('.popup-'+hsh).length>0){
		popupOpen(hsh);
	}else if($('div.'+hsh).length>0){
		$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
	} 
}
$('.wrapper').addClass('loaded');

	var act="click";
if(isMobile.iOS()){
	var act="touchstart";
}




//Механізм закриття і відкриття бургеру не головного
$('.autor__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.autor-menu').toggleClass('active');



	// if($(this).hasClass('active')){
	// 	$('body').data('scroll',$(window).scrollTop());
	// }
	// 	$('body').toggleClass('lock');
	// if(!$(this).hasClass('active')){
	// 	$('body,html').scrollTop(parseInt($('body').data('scroll')));
	// }
});


//===========================HERADER===============================================================
// Закриття верхньої менюшки  при клацанні поза її межами
document.addEventListener('click', function(event){ //Клік на сторінці
	const autorMenu = document.querySelector('.autor-menu'); //Знаходимо самий клас мменю
	const autorIcon = document.querySelector('.autor__icon'); //Знаходимо самий клас іконки

	if(event.target.closest('.autor-menu') || event.target.closest('.autor__icon')){ //перевірка якщо при натисканні об'єкт має клас autor-menu або був натиснутий на сам бургер то буде з'являться меню

	}else{	// якщо клік відбудеться поза меню то воно закриється
		autorMenu.classList.remove('active');//видаляються класи active
		autorIcon.classList.remove('active');//видаляються класи active
	}
});

// Закриття головної менюшки  при клацанні поза її межами
document.addEventListener('click', function(event){ //Клік на сторінці
	const mainMenu = document.querySelector('.header-bottom__menu'); //Знаходимо самий клас мменю
	const MainIcon = document.querySelector('.header-bottom__icon'); //Знаходимо самий клас іконки

	if(event.target.closest('.header-bottom__menu') || event.target.closest('.header-bottom__icon')){ //перевірка якщо при натисканні об'єкт має клас autor-menu або був натиснутий на сам бургер то буде з'являться меню

	}else{	// якщо клік відбудеться поза меню то воно закриється
		mainMenu.classList.remove('active');//видаляються класи active
		MainIcon.classList.remove('active');//видаляються класи active
	}
});

//механізм закриття бургеру головного меню
$('.header-bottom__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header-bottom__menu').toggleClass('active');
});
//==========================================================================================

//===========================FOOTER===============================================================

const footer = document.querySelectorAll('.column-footer__title');

footer.forEach(function(item){
	item.addEventListener('click', function(){
		this.nextElementSibling.classList.toggle('is-active');
	})
})


//==========================================================================================

//====================FILTER======================================================================

// //========================================================================================================================
// document.addEventListener('click', function(event){ //Клік на сторінці
// 	const description = document.querySelector('.description__btn1'); //Знаходимо самий клас мменю
// 	const review = document.querySelector('.description__btn2'); //Знаходимо самий клас іконки
// 	const firstTab = document.querySelector('.body-tabs__descripton');
// 	const secondTab = document.querySelector('.body-tabs__reviews');
// 	description.classList.remove('tab-btn-active');//видаляються класи active
// 	review.classList.remove('tab-btn-active');//видаляються класи active

// });