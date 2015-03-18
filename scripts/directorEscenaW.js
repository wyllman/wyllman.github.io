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

// Construir los objetos globales y añadirle las escuchas básicas de eventos
function crearEscena () {
   cabeceraF = new CabeceraW();
   cuerpoF = new CuerpoW();
   seccionCF1 = new SeccionCentralW (1, "Asignaturas", "./html/asignaturas.html");
   seccionCF2 = new SeccionCentralW (2, "Personales", "./html/personales.html");
   seccionCF3 = new SeccionCentralW (3, "Tutoriales", "./html/tutoriales.html");
      
   cabeceraF.cabecera.addEventListener("click", function() {
      cabeceraF.transicion();
      cuerpoF.recolocarCuerpo ();
   });

}

// Se ejecuta esta funcion cuando se termine de cargar la web
window.onload = function () {
   crearEscena ();
   cuerpoF.recolocarCuerpo ();
}

// Se ejecuta esta funcion cuando se redimensione la ventana
window.onresize = function () {
   cabeceraF.redimensionar ();
   cuerpoF.crearCTrans (false);
}