$(document).ready(function(){

	console.log('Cargao!');

	$('.input-val').on('keyup',function(){
		var c = $('#clave').val();
		var v = $('#valor').val();
		if (c.length!==0 && v.length!==0){
			$('#guardar').removeAttr('disabled');
		}else{
			$('#guardar').attr('disabled','disabled');
		}
	});
	$('#claveBuscar').on('keyup',function(){
		var c = $('#claveBuscar').val();
		if (c.length!==0){
			$('#buscar').removeAttr('disabled');
		}else{
			$('#buscar').attr('disabled','disabled');
		}
	});
	

	$('#guardar').on('click',function(){
		var c = $('#clave').val();
		var v = $('#valor').val();
		sessionStorage.setItem(c,v);
		localStorage.setItem(c,v);

	});
	
	$('#buscar').on('click',function(){
		var c = $('#claveBuscar').val();
		var v = sessionStorage.getItem(c);
		$('#valorBuscar').val(v);
	});

	$('#borrar').on('click',function(){
		var c = $('#claveBorrar').val();
		sessionStorage.removeItem(c);
	});

	$('#buscarTodas').on('click',function(){
		var mihtml = '';
		for (i=0; i<sessionStorage.length; i++){
			key = sessionStorage.key(i);
			value = sessionStorage[key];

			mihtml += '<p>Clave: <b>'+key+'</b> Valor: <b>' + value+ '</b></p>';
			$('#result').html(mihtml);
		}
	});

});