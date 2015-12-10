/* Formulario JS */
window.onload = function(){
	var inputPass = document.getElementById('pass');
	var numeros = "0123456789";
	var minus = "qwertyuiopñlkjhgfdsazxcvbnm";
	var mayus = "QWERTYUIOPÑLKJHGFDSAZXCVBNM";
	siNum = false;
	siMay = false;
	inputPass.onblur = function(){
		var pass = inputPass.value;
		console.log("PASS: " + pass);

		if ( pass.search("[A-Z]") >=0 ){
			siMay = true;
		}
		for(var i=0 ; i<=pass.length ; i++ ){
			if( siNum === false && numeros.indexOf(pass[i]) >= 0){
				siNum = true;
				break;
			}
		}
		if ( siNum !== true || siMay !== true ){
			alert("Falta una mayuscula o numero");
			setTimeout(function(){
				inputPass.focus();
				inputPass.value = "";
			},1);
		}
	};
	var enviar = document.getElementById("e");
	var miform = document.getElementById("myform");
	/*miform.onsubmit = function(){
		setTimeout(function(){
			enviar.setAttribute("disabled","disabled");
			enviar.setAttribute("value","enviando");
		},5000);
	};
	*/
	$('#e').on('click', function(){
		$('#formulario-edit').hide();
		$('#formulario-ok').show();
	});
};