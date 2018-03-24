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

/* КНОПКА ВВЕРХ */
var $btnUp = $(".btn-up")
$btnUp.on("click", function(){
	$("html,body").animate({scrollTop:0}, 200)
});

/* ВІДКРИТТЯ КАЛЕНДАРЯ ПРИ НАВЕДЕННІ*/

$( function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
      buttonText: "Оберіть дату"
    });
  } );