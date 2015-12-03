/* Ejercicios jQuery */
$(document).ready(function(){
	$('input#boton1').on('mousedown',function(){
		$('#enlace1').css('color','darkgrey');
	});
	/*$('input#boton1').on('mouseup',function(){
		$('#enlace1').css('color','darkorange');
	});*/
	$('input#boton1').on('click mouseup',function(){
		$('#enlace1').css('color','red');
	});
	$('input#boton1').on('dblclick',function(){
		$('#enlace1').css('color','yellow');
	});
	$('a#enlace1').on({
		'mouseover' : function(){
			$(this).css({
				'color' : $(this).css('color'),
				'font-size' : '26px'
			});
		},
		'mouseleave' : function(){
			$(this).css({
				'color' : $(this).css('color'),
				'font-size' : '16px'
			});
		}
	});
	$('body').on('keydown',function(){
		$('#buscar').focus();
	});

});