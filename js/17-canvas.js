/* Formulario JS */
$(document).ready(function(){
	var lienzo1 = document.getElementById('lienzo1');
	var miLienzo1 = lienzo1.getContext('2d');

	miLienzo1.fillRect(1,1,80,80);
	miLienzo1.strokeRect(100,1,80,80);
	//miLienzo1.clearRect(40,1,80,40);

	var lienzo2 = $('#lienzo2');
	var miLienzo2 = lienzo2[0].getContext('2d');

	var gradLineal = miLienzo2.createLinearGradient(1,20,25,50);
	gradLineal.addColorStop(1,"DarkOrange");
	gradLineal.addColorStop(0.5,"Red");
	miLienzo2.fillStyle = gradLineal;
	miLienzo2.fillRect(1,1,80,80);

	var gradRad = miLienzo2.createRadialGradient(140,40,30,140,40,60);
	gradRad.addColorStop(1,"DarkOrange");
	gradRad.addColorStop(0.3,"blue");
	miLienzo2.fillStyle = gradRad;
	miLienzo2.fillRect(100,1,80,80);


	miLienzo2.fillStyle = "Yellow";
	miLienzo2.beginPath();
	miLienzo2.moveTo(150,150);
	miLienzo2.lineTo(150,200);
	miLienzo2.lineTo(200,200);
	miLienzo2.lineTo(200,150);
	miLienzo2.closePath();
	miLienzo2.fill();

	miLienzo2.fillStyle = "Red";
	miLienzo2.beginPath();
	miLienzo2.moveTo(100,150);
	miLienzo2.lineTo(100,200);
	miLienzo2.lineTo(150,200);
	miLienzo2.closePath();
	miLienzo2.fill();

	miLienzo2.fillStyle = "Blue";
	miLienzo2.beginPath();
	miLienzo2.moveTo(250,150);
	miLienzo2.arc(225,175,25,0,360);
	miLienzo2.closePath();
	miLienzo2.fill();


	var lienzo3 = $('#lienzo3');
	var miLienzo3 = lienzo3[0].getContext('2d');

	miLienzo3.beginPath();
	miLienzo3.moveTo(25,100);
	miLienzo3.lineTo(75,100);
	miLienzo3.strokeStyle = "orange";
	miLienzo3.lineWidth = 20;
	miLienzo3.lineCap = "Round";
	miLienzo3.closePath();
	miLienzo3.stroke();

	miLienzo3.font = "15px Verdana";
	miLienzo3.textAlign = "start";
	miLienzo3.textBaseLine = "button";
	miLienzo3.fillText("mi texto", 25,105);


	var lienzo4 = $('#lienzo4');
	var miLienzo4 = lienzo4[0].getContext('2d');

	miLienzo4.beginPath();
	miLienzo4.moveTo(100,100);
	miLienzo4.lineTo(100,250);
	miLienzo4.moveTo(150,100);
	miLienzo4.lineTo(150,250);
	miLienzo4.moveTo(50,150);
	miLienzo4.lineTo(200,150);
	miLienzo4.moveTo(50,200);
	miLienzo4.lineTo(200,200);
	miLienzo4.stroke();
	miLienzo4.closePath();

	miLienzo4.beginPath();
	miLienzo4.arc(125,125,20,0,360);
	miLienzo4.fillStyle = '#FFFFFF';
    miLienzo4.fill();
    miLienzo4.lineWidth = 2;
    miLienzo4.strokeStyle = "black";
    miLienzo4.stroke();


    var lienzo5= $('#lienzo5');
	var miLienzo5 = lienzo5[0].getContext('2d');

	miLienzo5.fillStyle = 'brown';
	miLienzo5.lineWidth = 2;
	tamanoCaja = 50;
	for (i = 1; i<=8; i=i+2){
		for (j=1;j<=8; j=j+2){
			miLienzo5.fillRect(tamanoCaja*i,tamanoCaja*j,tamanoCaja,tamanoCaja);
		}
	}
	for (i = 2; i<=8; i=i+2){
		for (j=2;j<=8; j=j+2){
			miLienzo5.fillRect(tamanoCaja*i,tamanoCaja*j,tamanoCaja,tamanoCaja);
		}
	}
	

	for (i = 1; i<=8; i++){
		miLienzo5.fillText((9-i), tamanoCaja/2,tamanoCaja/2+tamanoCaja*i);
	}
	letras = ['A','B','C','D','E','F','G','H'];
	for (i = 1; i<=8; i++){
		miLienzo5.fillText(letras[i-1], tamanoCaja/2+tamanoCaja*i, tamanoCaja*9+tamanoCaja/2);
	}

	miLienzo5.strokeRect(tamanoCaja,tamanoCaja,tamanoCaja*8,tamanoCaja*8);

});
