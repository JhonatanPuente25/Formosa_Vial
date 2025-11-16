let isListen=false;let speech=new SpeechSynthesisUtterance();var paginasActivas = [];
$(document).ready(function(){
   $.fn.booklet.defaults = {
      name:" “LAS CALLES NOS UNEN: SEGURIDAD VIAL EN LA SOCIEDAD”",
      width:1200,height:600,speed:1000,direction:"LTR",
      startingPage:1,easing:"easeInOutQuad",easeIn:"easeInQuad",easeOut:"easeOutQuad",
      closedFrontTitle:"Beginning",closedFrontChapter:"Beginning of Book",closedBackTitle:"End",closedBackChapter:"End of Book",
      covers:true,
      closed:true,
      autoCenter:true,
      pagePadding:10,pageBorder:0,
	    pageNumbers:true,
	    manual:true,
      hovers:true,hoverWidth:50,hoverSpeed:500,hoverThreshold:0.25,overlays:true,tabs:false,tabWidth:60,tabHeight:20,
      nextControlText:"Next",previousControlText:"Previous",
      nextControlTitle:"Next",previousControlTitle:"Previous",
      arrows:true,
      arrowsHide:false,
      cursor:"pointer",hash:false,hashTitleText:" - Page ",
keyboard:true,
      next:null, prev:null, auto:false, delay:5000, pause:null, play:null, menu:null,pageSelector:false,chapterSelector:false,
shadows:true,shadowTopFwdWidth:166,shadowTopBackWidth:166,shadowBtmWidth:50,before:function(){},after:function(){}
      }
 $("#mybook").booklet();$(".b-prev").attr("tabindex","0");$(".b-next").attr("tabindex","0");
$("#mybook").booklet({change: function(event, data) {paginasActivas = [data.index,data.index+1];}});paginasActivas = [0,1];
$("#listenBut").on("click keydown", function(e) {if (e.type === "click" || (e.type === "keydown" && e.which != 9)) {if (!isListen) {initRead();} else {stopRead();}}});
$("#gtpageBut").on("click keydown", function(e) {if (e.type === "click" || (e.type === "keydown" && e.which !== 9)) {var page=parseInt($("#numberPage").val(), 10);bookgotopage(page);}});
$("#s_0").on("click", function(e) {e.preventDefault();bookgotopage(1);});
$("#s_0").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(1);});
$("#s_1").on("click", function(e) {e.preventDefault();bookgotopage(2);});
$("#s_1").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(2);});
$("#s_2").on("click", function(e) {e.preventDefault();bookgotopage(3);});
$("#s_2").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(3);});
$("#s_3").on("click", function(e) {e.preventDefault();bookgotopage(4);});
$("#s_3").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(4);});
$("#s_4").on("click", function(e) {e.preventDefault();bookgotopage(5);});
$("#s_4").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(5);});
$("#s_5").on("click", function(e) {e.preventDefault();bookgotopage(6);});
$("#s_5").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(6);});
$("#s_6").on("click", function(e) {e.preventDefault();bookgotopage(7);});
$("#s_6").on("keydown", function(e) {if (e.which===9 || e.which>=37 && e.which <= 40) {return;};e.preventDefault();bookgotopage(7);});
const fullscreenButton = document.getElementById("fullscreenToggle");const scaleButton = document.getElementById("scaleToggle");const article = document.getElementById("mainContent");let isScaled = false;
fullscreenButton.addEventListener("click", () => {if (!document.fullscreenElement) {document.documentElement.requestFullscreen();} else {document.exitFullscreen();}});
    scaleButton.addEventListener("click", () => {isScaled = !isScaled;if (isScaled) {applyScale();} else {article.style.transform = "scale(1)";}});
window.addEventListener("resize", () => {if (isScaled) {applyScale();}});
function applyScale() {const scaleX = window.innerWidth / article.scrollWidth;const scaleY = (window.innerHeight - document.getElementById("bottomBar").offsetHeight) / article.scrollHeight;const scale = Math.min(scaleX, scaleY);article.style.transform = `scale(${scale})`;}
applyScale();isScaled=true;
});
function bookgotopage(page){var bookletIndex=page+1;if (page>= 1 && page<=8) {$("#mybook").booklet("gotopage", bookletIndex);}}
function initRead() {var textoParaLeer = obtenerTextoSeleccionado();if (!textoParaLeer) {paginasActivas.forEach(function(numeroDePagina) {$("#mybook .b-page-" + numeroDePagina).each(function() {$(this).find("*").not("#bottomBar, #bottomBar *").each(function() {textoParaLeer += $(this).clone().children().remove().end().text();});});});}
if (!textoParaLeer.trim()) {textoParaLeer="error";};if (speechSynthesis.speaking) {speechSynthesis.cancel();};speech.text = textoParaLeer.trim();speech.lang = document.documentElement.lang || "es-ES";speechSynthesis.speak(speech);isListen=true;}
function obtenerTextoSeleccionado() {var texto="";if (window.getSelection) {texto=window.getSelection().toString();} else if (document.selection && document.selection.type != "Control") {texto = document.selection.createRange().text;};return texto;}
function stopRead() {speechSynthesis.cancel();isListen=false;}
speech.onend = function() {isListen = false;};
function playIt(sound){var sounds=document.getElementsByTagName("audio");for(i=0; i<sounds.length; i++) sounds[i].pause();var file=document.getElementById(sound);file.load();file.play();}
