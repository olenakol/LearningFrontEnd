/* НАВІГАЦІЙНЕ МЕНЮ (ВИЇЗД АКАРДЕОНУ)*/
$(document).ready(function(){
  $('.sub').hover(
	function(){
		if ($('> a',this).attr('class') != 'active'){
			$('.sub ul').slideUp();
			$('a',this).next().slideToggle();
			$('.mini-menu > ul > li > a').removeClass('active');
			$('> a',this).addClass('active');
		}
	},
	function(){
			$('.sub ul').slideUp();
			$('.mini-menu > ul > li > a').removeClass('active');
	});
    $('.sub ul > li > a').click(function(){
       $('.sub ul > li > a').removeClass('active');
       $(this).addClass('active');
    });
});


/* АКАРДЕОН ВИПЛИВАЮЧОГО МЕНЮ*/

function openSlideMenu(){
			document.getElementById('side-menu').style.width = '250px';
			document.getElementById('main').style.marginLeft = '250px';
		}
		
function closeSlideMenu(){
			document.getElementById('side-menu').style.width = '0';
			document.getElementById('main').style.marginLeft = '0';
		}

! function(i) {
      var o, n;
      i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
          o.hasClass("active_block") ? (o.removeClass("active_block"),
            n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
            o.siblings(".active_block").removeClass("active_block").children(
              ".info").stop(!0, !0).slideUp())
      })
    }(jQuery);
/* ВІДКРИТТЯ КАЛЕНДАРЯ ПРИ НАВЕДЕННІ*/

$( function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
      buttonText: "Оберіть дату"
    });
  } );

/* КНОПКА ВВЕРХ */
var $btnUp = $(".btn-up")
$btnUp.on("click", function(){
	$("html,body").animate({scrollTop:0}, 200)
});


/* СЛАЙДЕР */


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/* САМОСПРАЦЮВАННЯ СЛАЙДЕРА 

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 7000); 
	
}
*/