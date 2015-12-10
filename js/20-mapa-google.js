$(document).ready(function(){

	var geoId = null;

	$('#cargarMapa').on('click',function(){
		var tuneo_pos = {
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge:60000
		};
		geoId = navigator.geolocation.watchPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
			var posicionGoogle = new google.maps.LatLng(lat,lon);
			var opcionesGoogleMaps = {
				center: posicionGoogle,
				zoom: 15,
				mapType: google.maps.MapTypeId.ROADMAP
			};
			var lugarmapa = document.getElementById('lugarMapa');
			var mapa = new google.maps.Map(lugarmapa,opcionesGoogleMaps);
			var marker = new google.maps.Marker({
				position: posicionGoogle,
				map: mapa,
				title: "Estas aqui",
				animation: google.maps.Animation.BOUNCE
			});
			marker.addListener('click', function() {
			    mapa.setZoom(8);
			    mapa.setCenter(marker.getPosition());
			  });


		},function(elerror){
			alert('ERR (' + elerror.code + ") " + elerror.message);
		},tuneo_pos);
	});

});