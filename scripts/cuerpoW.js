// Definición de la clase CuerpoW
function CuerpoW(conCab) {
   if (typeof(conCabI)==='undefined') conCabI = true;
   //  Objetos html
   this.cuerpo = document.getElementById("cuerpo");
   
   // Controladores de estado
   this.conCab = conCabI; // FIXME:Cambio por compatibilidad safari

}

// Funcion para crear una clase css dinamica que 
// recoloque el cuerpo si es necesario
CuerpoW.prototype.crearCTrans = function (conTran) {
   var cabecera;
   var valor;
   var elementoBuscado;
   var padre;
   var estilo;
   
   if (typeof(conTran)==='undefined') conTran = true;

   if (this.conCab) {
      
      if (cabeceraF.cabExtMostrada) {
         valor = cabeceraF.cabecera.offsetHeight + 5;
      } else {
         valor = 25;
      }
   } else {
      valor = 0;
   }
   
   if (valor != this.cuerpo.offsetTop) {
   
   //console.log(this.cuerpo.offsetTop);
   
   elemento = document.getElementById("estiloCuerpo");
   if (elemento) {
      padre = elemento.parentNode;
      padre.removeChild(elemento);
   }
      
   estilo = document.createElement('style');
   estilo.id = "estiloCuerpo";
   estilo.type = 'text/css';
      
   if (conTran) {
      estilo.innerHTML = "#cuerpo.ctrans { transition: margin-top 2s;"
                        + "-webkit-transition: margin-top 2s;"
                        + " margin-top: " +  valor + "px; " 
                        + " border-style: solid; border-width: 2px; }";
      
   } else {
      estilo.innerHTML = "#cuerpo.ctrans { margin-top: " +  valor + "px; " 
                        + " border-style: solid; border-width: 2px; }";
   }
   this.cuerpo.appendChild(estilo);
   
   }
}

// Funcion para que se active la transicion
CuerpoW.prototype.recolocarCuerpo = function () {
   var texto = cuerpo.className;
   this.crearCTrans ();
   
   
   if (!texto.match(/ctrans/)){
      texto += " ctrans";
   }
   
   cuerpo.className = texto;
}