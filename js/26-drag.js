$(document).ready(function(){

	var x = 0;
	var y = 0;

	$(document).on('touchstart',function(dedos){
		if (dedos.originalEvent.touches.length > 0) {
			var dedo = dedos.originalEvent.touches[0];
			x = dedo.clientX;
			y = dedo.clientY;
			console.log('Empiezo en: ' + x + ', '+ y );
		}
	});

	
	$('#botonmove').on('touchmove',function(dedos){
		var movX = "";
		var movY = "";
		if (dedos.originalEvent.changedTouches.length > 0) {
			var dedo = dedos.originalEvent.changedTouches[0];
			var nuevaX = dedo.clientX;
			var nuevaY = dedo.clientY;

			$('#botonmove').css('top',nuevaY);
			$('#botonmove').css('left',nuevaX);
			console.log('Movido a: ' + nuevaX + ', ' + nuevaY);
		}
	});
	

	$('#lienzo').on('touchmove',function(dedos){
		var lienzo = document.getElementById('lienzo');
		var miLienzo1= lienzo.getContext('2d');
		if (dedos.originalEvent.changedTouches.length > 0) {
			var dedo = dedos.originalEvent.changedTouches[0];
			var nuevaX = dedo.clientX;
			var nuevaY = dedo.clientY;
			console.log('POS: ' + nuevaX + ', ' + nuevaY);
			miLienzo1.fillStyle = "Blue";
			miLienzo1.beginPath();
			miLienzo1.moveTo(nuevaX,nuevaY);
			miLienzo1.arc(nuevaX,nuevaY,5,0,360);
			miLienzo1.closePath();
			miLienzo1.fill();
		}
	});





});