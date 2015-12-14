$(document).ready(function(){

	console.log('Ok!');
	
	$('#full').on('click',function(){
		var video = $('#video');
		if (video[0].requestFullScreen){
			video[0].requestFullScreen();
		}
		if (video[0].webkitRequestFullScreen){
			video[0].webkitRequestFullScreen();
		}
		if (video[0].mozRequestFullScreen){
			video[0].mozRequestFullScreen();
		}
	});

});