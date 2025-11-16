//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var embed2='Dispositivo que regula la circulación. Promueve el respeto y la convivencia.';
var embed4='Es un dispositivo de tránsito que ayuda a los peatones a cruzar la calle de forma segura y les orienta cuando es seguro hacerlo.';
var embed6='Ciudadano que se desplaza a pie y tiene prioridad en el cruce.';
var embed7='Ciudadano que se desplaza a pie y tiene prioridad en el cruce.';
var embed8='Informa, advierte o reglamenta la conducta en el espacio público.';
var embed9='Informa, advierte o reglamenta la conducta en el espacio público.';
var embed10='Carril de uso exclusivo o compartido para bicicletas, generalmente ubicado en la vereda, un parque o una plaza.';
var embed11='Persona que utiliza bicicleta. Debe respetar las normas y circular por la derecha';
var embed12='Espacio destinado al cruce seguro de peatones';
var embed13='Espacio destinado al cruce seguro de peatones';
var embed19='Un árbol urbano es aquel espécimen o colección de ellos creciendo dentro de una localidad urbana o suburbana.';
var embed22='Espacios comunes como plazas para realizar actividades recreativas.';
var embed23='Persona que está al mando de un vehículo. Esta persona debe estar habilitada y capacitada para conducir.';
var embed1='Dispositivo que regula la circulación. Promueve el respeto y la convivencia.';
var embed3='Es un dispositivo de tránsito que ayuda a los peatones a cruzar la calle de forma segura y les orienta cuando es seguro hacerlo.';
var embed5='Ciudadano que se desplaza a pie y tiene prioridad en el cruce.';
var incre=0; timerMove=0;var hideTimer;var scaleFactor=1;$(document).ready(function () {
$("#ardoraEnu").click(function(){ document.getElementById("audioEnu").play();isPlayEnu=true;});
$("#area_2").on("click touchstart", function (e) {embedPopUp(embed2,"Semáforo",800,600);});
$("#area_2").keydown(function(e){if (e.which!=9){$("#area_2").click();}});
$("#area_4").on("click touchstart", function (e) {embedPopUp(embed4,"Semáforo peatonal",800,600);});
$("#area_4").keydown(function(e){if (e.which!=9){$("#area_4").click();}});
$("#area_6").on("click touchstart", function (e) {embedPopUp(embed6,"Peatón",800,600);});
$("#area_6").keydown(function(e){if (e.which!=9){$("#area_6").click();}});
$("#area_7").on("click touchstart", function (e) {embedPopUp(embed7,"Peatón",800,600);});
$("#area_7").keydown(function(e){if (e.which!=9){$("#area_7").click();}});
$("#area_8").on("click touchstart", function (e) {embedPopUp(embed8,"Señal de tránsito",800,600);});
$("#area_8").keydown(function(e){if (e.which!=9){$("#area_8").click();}});
$("#area_9").on("click touchstart", function (e) {embedPopUp(embed9,"Señal de tránsito",800,600);});
$("#area_9").keydown(function(e){if (e.which!=9){$("#area_9").click();}});
$("#area_10").on("click touchstart", function (e) {embedPopUp(embed10,"Bicisenda",800,600);});
$("#area_10").keydown(function(e){if (e.which!=9){$("#area_10").click();}});
$("#area_11").on("click touchstart", function (e) {embedPopUp(embed11,"Ciclista",800,600);});
$("#area_11").keydown(function(e){if (e.which!=9){$("#area_11").click();}});
$("#area_12").on("click touchstart", function (e) {embedPopUp(embed12,"Senda peatonal",800,600);});
$("#area_12").keydown(function(e){if (e.which!=9){$("#area_12").click();}});
$("#area_13").on("click touchstart", function (e) {embedPopUp(embed13,"Senda peatonal",800,600);});
$("#area_13").keydown(function(e){if (e.which!=9){$("#area_13").click();}});
$("#area_19").on("click touchstart", function (e) {embedPopUp(embed19,"Arbolado urbano ",800,600);});
$("#area_19").keydown(function(e){if (e.which!=9){$("#area_19").click();}});
$("#area_22").on("click touchstart", function (e) {embedPopUp(embed22,"Espacio verde",800,600);});
$("#area_22").keydown(function(e){if (e.which!=9){$("#area_22").click();}});
$("#area_23").on("click touchstart", function (e) {embedPopUp(embed23,"Conductor ",800,600);});
$("#area_23").keydown(function(e){if (e.which!=9){$("#area_23").click();}});
$("#area_1").on("click touchstart", function (e) {embedPopUp(embed1,"Semáforo",800,600);});
$("#area_1").keydown(function(e){if (e.which!=9){$("#area_1").click();}});
$("#area_3").on("click touchstart", function (e) {embedPopUp(embed3,"Semáforo peatonal",800,600);});
$("#area_3").keydown(function(e){if (e.which!=9){$("#area_3").click();}});
$("#area_5").on("click touchstart", function (e) {embedPopUp(embed5,"Peatón",800,600);});
$("#area_5").keydown(function(e){if (e.which!=9){$("#area_5").click();}});
jQuery.event.special.touchstart = {setup: function( _, ns, handle ) {this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault")});}};
jQuery.event.special.touchmove = {setup: function( _, ns, handle ) {this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault")});}};
do_responsivePC();
});
function embedPopUp(embedURL,eti,imaW,imaH){popup=window.open("text/html","video","height="+(imaH+40).toString()+",width="+(imaW+20).toString()+",toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
with (popup.document){writeln("<html><head><title>"+eti+"<\/title><style>body{margin:0px;}<\/style>");writeln("<\/head><body style='padding:10px;'>");
writeln("<p>"+eti+"</p><br>"+embedURL+"<\/body><\/html>");close();}popup.focus();}
function playIt(sound){$("audio").each(function(){this.pause();}); var file = document.getElementById(sound);file.load();file.play();}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
function showTooltip($tooltip,position) { $(".tooltip.active").removeClass("active").addClass("out");clearTimeout(hideTimer);$tooltip.css({top: position.top - $tooltip.outerHeight() - 13,left: position.left - ($tooltip.width() / 2)}).addClass("active").removeClass("out");}
function hideTooltip($tooltip) {hideTimer = setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);}
function do_responsivePC(){const baseWidth=1000;const baseHeight=700;const windowWidth = $(window).width();const windowHeight = $(window).height();scaleFactor = Math.min(windowWidth / baseWidth, windowHeight / baseHeight);
$("#ardoraMain").css({"transform-origin": "top left","transform": "scale(" + scaleFactor + ")","position": "absolute","top": "50%","left": "50%","margin-left": -(baseWidth * scaleFactor / 2) + "px","margin-top": -(baseHeight * scaleFactor / 2) + "px"});paintpoints();}
