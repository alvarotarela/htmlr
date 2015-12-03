/* DOM jQuery */
$(document).ready(function(){
	console.log("Pagina cargada!");

	// var nuevoP = $("<p>Hola mundo<p>");
	// nuevoP.attr('name','miP');
	// $('body').append(nuevoP);

	$('body').append($("<p>Hola mundo</p>").attr({
		'name': 'miP',
		'id': 'p'
	}));

	$('<input>').attr({
		'type': 'button',
		'value': 'boton',
		'name':'boton'
	}).insertBefore('p[name=primerP');

	$('p[name=miP').css('color','orange').html('Nuevo texto');

	//$('body > p:first').remove();

	//Cambiar P por H1
	var antiguoP = $('p[name=miP').detach();
	$('body').append($("<h1>").append(antiguoP));


});