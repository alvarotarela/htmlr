/* Formulario JS */
window.onload = function(){
	var actual = 0;
	var memory = 0;
	var resultado = 0;
	
	$('span').on('click', function(){
		memory = $.parseHTML($(this).html());
		$('#display').html(memory);
		if(memory[0].data=='C'){
			memory = 0;
			resultado
			$('#display').html("0");
		}
	});

};