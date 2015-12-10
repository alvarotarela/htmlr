$(document).ready(function(){
	//console.log('Cargada');
	var geoID = null;
	$('#obtener').on('click',function(){
		var tuneo_pos = {
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge:600
		};
			geoId = navigator.geolocation.watchPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
			var pos = document.getElementById('ubicacion');
			var datos = "Latitud: " + lat + '<br>';
			datos += "Longitud: " + lon + '<br>'; 
			datos += "Exactitud: " + lapos.coords.accuracy + '<br>';
			pos.innerHTML = datos;
		},function(elerror){
			alert('Codigo error: ' + elerror.code + " Mensaje: " + elerror.message);
		},tuneo_pos);
	});

	$('#parar').on('click',function(){
		navigator.geolocation.clearWatch(geoId);
		location.reload();
	});
});