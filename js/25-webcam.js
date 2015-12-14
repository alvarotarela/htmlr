$(document).ready(function(){

	function hasGetUserMedia(){
		return (navigator.getUserMedia || navigator.webkitGetUserMedia ||  
				navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	if (hasGetUserMedia()){
		console.log (navigator.getUserMedia || navigator.webkitGetUserMedia ||  
				navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}
	else {
		alert("Navegdor no puede accder a la camara");
	}

	window.datosVideo = {
		flujo: null, 
		url: null
	};

	$('#inicio').on('click',function(){
		if (navigator.webkitGetUserMedia){
			navigator.webkitGetUserMedia({
				video: true,
				audio: true
			},function(flujoCamara){
				datosVideo.flujo = flujoCamara;
				datosVideo.url = window.URL.createObjectURL(flujoCamara);
				$('#camara').attr("scr",datosVideo.url);
			},function(err){
				alert('Error de acceso a dispositivo: ' + err.message);
			});
		}else{
			alert('Click > No hay cam');
		}
	});
	$('#fin').on('click',function(){
		if (navigator.webkitGetUserMedia){
			if (datosVideo.flujo !== null){
				datosVideo.flujo.stop();
				window.URL.revokeObjectURL(datosVideo.url);
				$('#camara').attr("scr",null);
			}
		}
	});
	$('#foto').on('click',function(){
		var camara = $('#camara');
		var foto = $('#canvas');

		var ctx = foto[0].getContext('2d');
		ctx.drawImage(camara[0],0,0,camara.width(),camara.height());
	});


});