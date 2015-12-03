var miParrafo = document.createElement("p");
miParrafo.setAttribute("name","mip");
var contenido = document.createTextNode("hola mundo");
miParrafo.appendChild(contenido);
document.body.appendChild(miParrafo);
miParrafo.innerText = "Hola!!";

/*Añadir boton*/
var padreMiParrafo = miParrafo.parentNode;
var boton = document.createElement("input");
boton.setAttribute("type","button");
boton.setAttribute("name","boton");
boton.setAttribute("value","boton");
padreMiParrafo.insertBefore(boton, miParrafo);

var parrafoNuevo = document.createElement("p");
parrafoNuevo.setAttribute("name","nuevoP");
parrafoNuevo.setAttribute("style","color: darkorange");
var nuevoTexto = document.createTextNode("Nuevo texto");
parrafoNuevo.appendChild(nuevoTexto);
padreMiParrafo.replaceChild(parrafoNuevo,miParrafo);

/* Borrar parrafo */
var parrafos = document.getElementsByTagName("p");
parrafos[0].parentNode.removeChild(parrafos[0]);

/* Añdir */
var queEs = parrafoNuevo.innerHTML;
parrafoNuevo.innerHTML = '<h1>' + queEs + '</h1>';
var miParrafoMod = document.getElementsByName("nuevoP")[0];
if ( miParrafoMod.hasAttribute("style") ){
	var vActual = miParrafoMod.getAttribute("style");
	var vInc = "; background: black;";
	var vFinal = vActual + vInc;
	miParrafoMod.setAttribute("style", vFinal);
}






