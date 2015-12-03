/* primer JS */
window.onload = function(){
	var boton = document.getElementsByTagName("input");
	var mip = document.getElementsByTagName("p");
	boton[0].onclick = function(){
		var p = document.createElement("p");
		var texto = document.createTextNode("hola mundo !");
		p.appendChild(texto);
		p.setAttribute("style","color: blue;");
		if (mip[0]){
			mip[0].parentNode.removeChild(mip[0]);
		}
		boton[0].parentNode.appendChild(p);
	};
}