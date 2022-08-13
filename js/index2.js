//Segundo punto

var incio = document.getElementById("inicio");
var detener = document.getElementById("detener");
var reiniciar = document.getElementById("reiniciar");

var seg = 0;
var min = 0;
var hrs = 0;
var cen = 0;




function iniciar() {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("detener").disabled = false;
	document.getElementById("reiniciar").disabled = false;
}
function detenerr() {
	clearInterval(control);
	document.getElementById("detener").disabled = true;
	document.getElementById("inicio").disabled = false;
}
function reiniciarr() {
	clearInterval(control);
	seg = 0;
	min = 0;
	hrs = 0;
    cen = 0;
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
    Centesimas.innerHTML =":00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("detener").disabled = true;
	document.getElementById("reiniciar").disabled = true;
}

function cronometro () {
	
		
    if (cen < 99) {
		cen++;
		if (cen < 10) { cen = "0"+cen }
		Centesimas.innerHTML = ":"+cen;
	}
	if (cen == 99) {
		cen = -1;
	}
	if (cen == 0) {
        seg ++;
		if (seg < 10) { seg = "0"+seg }
		Segundos.innerHTML = ":"+seg;
	
	if (seg == 59) {
		seg = -1;
	}
	if ( (seg == 0) ) {
		min++;
		if (min < 10) { min = "0"+min }
		Minutos.innerHTML = ":"+min;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if (( cen == 0)&&(seg == 0)&&(min == 0) ) {
		hrs ++;
		if (hrs < 10) { hrs = "0"+hrs }
		Horas.innerHTML = hrs;
	}
}}