/* AJAX */
$(document).ready(function(){
	$('input#boton').on('click', function(){
		//$('div#stage').load('13-ajax-data.html');
		$.getJSON('13-ajax-data.json',function(jason){
			$('div#stage').hide();
			$('div#stage').html('<p>Nombre: '+ jason.name + '</p>');
			$('div#stage').append('<p>Edad: '+ jason.age + '</p>');
			$('div#stage').slideDown('slow', function(){
				console.log('Fin animacion');
			});
		});
	});
});