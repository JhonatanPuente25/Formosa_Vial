//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#808080"; colorText="#000000"; colorSele="#F40B4B";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien. Haz logrado identificar los componentes del Espacio Público presentes en esta actividad. Sigue así."; messageTime="Ups se acabo el tiempo. Te invito a revisar los componentes del Espació Público en la sección: Contenido 1"; messageError="Esta soución no es correcta. Vuelve a intentarlo. Tú puedes."; messageAttempts="Ups se acabaron los intentos. Te invito a revisar los componentes del Espació Público en la sección: Contenido 1"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0"];
var posX=[-13,114,336,154,289]; var posY=[169,122,64,18,262];
var coorx=["NjY=", "MjY0", "MzI1", "Mjky", "Mjky"]; var coory=["MTI4", "MTE2", "OTI=", "NTY=", "Mjkw"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", ""]; var al2=["", "", "", "", ""]; var al3=["", "", "", "", ""]; var al4=["", "", "", "", ""]; answers=["PEATÓN", "SEMÁFORO PEATONAL", "SENDA PEATONAL", "SEÑAL DE TRANSITO", "BICISENDA"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UEdB"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
