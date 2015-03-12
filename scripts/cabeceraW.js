//var axxx = require ('cuerpoW');

// Definición de la clase CabeceraW
function CabeceraW() {
   // Objetos html
   this.cabecera = document.getElementById("cabecera");
   this.cabeceraMini = document.getElementById("cabeceraMini");
   
   // Controladores de estado para las cabeceras
   this.cabExtMostrada = true;
   this.cabMiniMostrada = false;

}


// Funcion para crear una clase css dinamica que oculte
// la cabecera extendida
CabeceraW.prototype.crearHTrans = function(conTran) {
   var elementoBuscado = document.getElementById("estiloCabeceraW");
   var padre, estilo;
   var valor = - (this.cabecera.offsetHeight - 20) ;
   
   if (typeof(conTran)==='undefined') conTran = true;
   
   if (elementoBuscado) {
      padre = elementoBuscado.parentNode;
      padre.removeChild(elementoBuscado);
   }
   
   estilo = document.createElement('style');
   estilo.id = "estiloCabeceraW";
   estilo.type = 'text/css';
   if (conTran) {
      estilo.innerHTML = "#cabecera.htrans { transition: top 1.5s;"
                            + "-webkit-transition: top 1.5s;"
                            + " top: " +  valor + "px }";
   } else {
      estilo.innerHTML = "#cabecera.htrans { top: " +  valor + "px }";
   }
   this.cabecera.appendChild(estilo);
}

// Función de la clase CabeceraW para mostrar la versión
// extendida de la cabecera.
CabeceraW.prototype.mostrarExpandida = function() {
   var textoClase = this.cabecera.className;
   
   if (textoClase.match(/htrans/)) {
      textoClase = textoClase.replace(/(\,\s)?htrans/, "");
   }
   
   if (!(textoClase.match(/htransR/))){
      textoClase += " htransR";
   }
   
   this.cabecera.className = textoClase;
   this.cabExtMostrada = true;
}

// Función de la clase CabeceraW para ocultar la versión
// extendida de la cabecera.
CabeceraW.prototype.ocultarExpandida = function() {
   var textoClase = this.cabecera.className;
   
   this.crearHTrans();
   
   if (textoClase.match(/htransR/)){
      textoClase = textoClase.replace(/(\,\s)?htransR/, "");
   }
   
   if (!(textoClase.match(/htrans/))){
      textoClase += " htrans";
   }
   
   this.cabecera.className = textoClase;
   this.cabExtMostrada = false;
}


// Función de la clase CabeceraW para mostrar la versión
// mini de la cabecera.
CabeceraW.prototype.mostrarMini = function() {
   var textoClase = this.cabeceraMini.className;
   
   if (textoClase.match(/cmtrans/)){
      textoClase = textoClase.replace(/(\,\s)?cmtrans/, "");
   }
    
   if (!(textoClase.match(/cmtransR/))){
      textoClase += " cmtransR";
   }
   
   this.cabeceraMini.className = textoClase;
   this.cabMiniMostrada = true;
}

// Función de la clase CabeceraW para ocultar la versión
// mini de la cabecera.
CabeceraW.prototype.ocultarMini = function() {
   var textoClase = this.cabeceraMini.className;
   
    if (textoClase.match(/cmtransR/)){
      textoClase = textoClase.replace(/(\,\s)?cmtransR/, "");
   }
    
   if (!(textoClase.match(/cmtrans/))){
      textoClase += " cmtrans";
   }
   
   this.cabeceraMini.className = textoClase;
   this.cabMiniMostrada = false;
}

// Función de la clase CabeceraW para recolocar la cabecera
// en caso de redimensión de la ventana 
CabeceraW.prototype.redimensionar = function() {
   if (!(this.cabExtMostrada)) {
      var valor = (cabecera.offsetHeight - 20) + cabecera.offsetTop;
      if (valor != 0 ) {
         this.crearHTrans(false);
      } 
   }
}

// Función usada para el evento click en la versión extendida
// de la cabecera
CabeceraW.prototype.transicion = function() {
   if (this.cabExtMostrada) {
      this.ocultarExpandida();
   } else {
      this.mostrarExpandida();
   }
   
   if (this.cabMiniMostrada) {
      this.ocultarMini();
   } else {
      this.mostrarMini();
   }
}

var cabeceraF;
var cuerpoF;

function crearCabeceraW () {
   cabeceraF = new CabeceraW();
   cuerpoF = new CuerpoW();
   
   cabeceraF.cabecera.addEventListener("click", function() {
      cabeceraF.transicion();
      cuerpoF.recolocarCuerpo ();
   });
}


window.onload = function () {
   crearCabeceraW ();
   cuerpoF.recolocarCuerpo ();
}

window.onresize = function () {
   cabeceraF.redimensionar ();
   cuerpoF.crearCTrans (false);
}






