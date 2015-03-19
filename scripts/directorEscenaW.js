// Cargar en la web los archivos cabeceraW.js y cuerpoW.js
document.write("<script type='text/javascript' src='scripts/cabeceraW.js'></script>");
document.write("<script type='text/javascript' src='scripts/cuerpoW.js'></script>");
document.write("<script type='text/javascript' src='scripts/seccionCentralW.js'></script>");

// Objetos globales encargados de controlar la cabecera y el cuerpo de la web
var cabeceraF;
var cuerpoF;
var seccionCF1;
var seccionCF2;
var seccionCF3;

var seccionCF = [];

// Construir los objetos globales y añadirle las escuchas básicas de eventos
function crearEscena () {
   var objTituloTmp;
   cabeceraF = new CabeceraW();
   cuerpoF = new CuerpoW();
   //seccionCF1 = new SeccionCentralW (1, "Asignaturas", "./html/asignaturas.html");
   //seccionCF2 = new SeccionCentralW (2, "Personales", "./html/personales.html");
   //seccionCF3 = new SeccionCentralW (3, "Tutoriales", "./html/tutoriales.html");
   
   seccionCF[0] = new SeccionCentralW (1, "Asignaturas", "./html/asignaturas.html");
   seccionCF[1] = new SeccionCentralW (2, "Personales", "./html/personales.html");
   seccionCF[2] = new SeccionCentralW (3, "Tutoriales", "./html/tutoriales.html");
   
      
   cabeceraF.cabecera.addEventListener("click", function() {
      cabeceraF.transicion();
      cuerpoF.recolocarCuerpo ();
   });
   
   //seccionCF[0].crearEvTitulo ();
   
   objTituloTmp = seccionCF[0].getTituloHtml();
   
   objTituloTmp.addEventListener("click", function() {
      seccionCF[0].transicion ();
   });
   
   objTituloTmp = seccionCF[1].getTituloHtml();
   
   objTituloTmp.addEventListener("click", function() {
      seccionCF[1].transicion ();
   });
   
   objTituloTmp = seccionCF[2].getTituloHtml();
   
   objTituloTmp.addEventListener("click", function() {
      seccionCF[2].transicion ();
   });

}

// Se ejecuta esta funcion cuando se termine de cargar la web
window.onload = function () {
   crearEscena ();
   seccionCF[1].transicion ();
   seccionCF[2].transicion ();
   cuerpoF.recolocarCuerpo ();
}

// Se ejecuta esta funcion cuando se redimensione la ventana
window.onresize = function () {
   cabeceraF.redimensionar ();
   cuerpoF.crearCTrans (false);
}