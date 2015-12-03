/* MENU jQuery */
$(document).ready(function(){
	$('.menu > ul > li').addClass("invisible");
	$('ul').on({
		'mouseover' : function(){
			$($(this).children('li')).slideDown(500);
			$(this).children('p').addClass("on");
			//$($(this).children('li')).removeClass("invisible").addClass("visible");
		},
		'mouseleave' : function(){
			$($(this).children('li')).slideUp();
			$(this).children('p').addClass("off");
			//$($(this).children('li')).removeClass("visible").addClass("invisible");
		}
	});

});