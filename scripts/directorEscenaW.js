// Cargar en la web los archivos cabeceraW.js y cuerpoW.js
document.write("<script type='text/javascript' src='scripts/cabeceraW.js'></script>");
document.write("<script type='text/javascript' src='scripts/cuerpoW.js'></script>");

// Objetos globales encargados de controlar la cabecera y el cuerpo de la web
var cabeceraF;
var cuerpoF;

// Construir los objetos globales y añadirle las escuchas básicas de eventos
function crearEscena () {
   cabeceraF = new CabeceraW();
   cuerpoF = new CuerpoW();
   
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