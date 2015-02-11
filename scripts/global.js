var OLD_NAV = false;


window.onload = function () {
   recolocarCuerpo ();
   var listaResaltar = document.getElementsByTagName("LABEL");
   var listaTam = listaResaltar.length;
   var cabecera = document.getElementById("cabecera");
   
   
   for (var i = 0; i < listaTam; ++i) {
      listaResaltar[i].addEventListener("click", clickTexto);
   }
   
   cabecera.addEventListener("click", subirCabecera);
   
   
   /* Listen for a transition! */
   var transitionEvent = whichTransitionEvent();
   if (transitionEvent) {

      cabecera.addEventListener(transitionEvent, function() {
          
         /* if (cabecera.className.match(/htransR/)){
             cabecera.className = cabecera.className.replace(/(\,\s)?htransR/, "");
          } else if (cabecera.className.match(/htrans/)){
             cabecera.className = cabecera.className.replace(/(\,\s)?htrans/, "");
          }*/
          
          
          //recolocarCuerpo ();
      });
   }
   /*crear una hoja de estilo propia -----
   
   var style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = '.cssClass { color: #F00; }';
   document.getElementsByTagName('head')[0].appendChild(style);

   document.getElementById('someElementId').className = 'cssClass';
   
   */

}

window.onresize = function () {
   recolocarCuerpo ();
   var cabecera = document.getElementById("cabecera");
   if (cabecera.className.match(/htransR/)){
      //cabecera.className = cabecera.className.replace(/(\,\s)?htransR/, "");
   } else if (cabecera.className.match(/htrans/)) {
      //cabecera.className = cabecera.className.replace(/(\,\s)?htrans/, "");
      var valor = (cabecera.offsetHeight - 20) + cabecera.offsetTop;
      if (valor < 0 || valor > 26 ) {
       valor = - (cabecera.offsetHeight - 20);
       //cabecera.style.top = valor + "px";
       
       
       var elemento = document.getElementById("estiloCabecera");
       if (!elemento){
          //console.log("El elemento selecionado no existe");
       } else {
          padre = elemento.parentNode;
          padre.removeChild(elemento);
       }
   
      var style = document.createElement('style');
      style.id = "estiloCabecera";
      style.type = 'text/css';
      style.innerHTML = "#cabecera.htrans { top: " +  valor + "px }";
      cabecera.appendChild(style);
    }
      
   }
}

function recolocarCuerpo () {
   var cabecera = document.getElementById("cabecera");
   var cuerpo = document.getElementById("cuerpo");
   
   var valor = cabecera.offsetHeight + 5;
   
   if (cabecera.className.match(/htrans/) && !cabecera.className.match(/htransR/)){
   
      valor = 25;
   }
   
   	var elemento = document.getElementById("estiloCuerpo");
    if (!elemento){
       //console.log("El elemento selecionado no existe");
    } else {
       padre = elemento.parentNode;
       padre.removeChild(elemento);
    }
   
   var style = document.createElement('style');
   style.id = "estiloCuerpo";
   style.type = 'text/css';
   style.innerHTML = ".ctrans { transition: margin-top 2s;"
                            + "-webkit-transition: margin-top 2s;"
                            + " margin-top: " +  valor + "px }";
                            
   cuerpo.appendChild(style);
   
   var texto = cuerpo.className;
   
   if (!texto.match(/ctrans/)){
      texto += " ctrans";
   }
   
   cuerpo.className = texto;
   
}

function clickTexto () {
   var texto = this.nextElementSibling.className;
   
   if (texto.match(/oculto/)){
      texto = texto.replace(/(\,\s)?oculto/, " ");
   } else {
      texto += " oculto";
   }
   
   this.nextElementSibling.className = texto;

}

function subirCabecera () {
  //console.log("funiciona?");
  
  var cabecera = document.getElementById("cabecera");
  var cabeceraMini = document.getElementById("cabeceraMini");
  var texto = cabecera.className;
  var texto2 = cabeceraMini.className;
  var valor = - (cabecera.offsetHeight - 20) ;//+ cabecera.offsetTop)
  
   	var elemento = document.getElementById("estiloCabecera");
    if (!elemento){
       //console.log("El elemento selecionado no existe");
    } else {
       padre = elemento.parentNode;
       padre.removeChild(elemento);
    }
   
   var style = document.createElement('style');
   style.id = "estiloCabecera";
   style.type = 'text/css';
   style.innerHTML = "#cabecera.htrans { transition: top 1.5s;"
                            + "-webkit-transition: top 1.5s;"
                            + " top: " +  valor + "px }";
   cabecera.appendChild(style);
   
   
   if (texto.match(/htransR/)){
      texto = texto.replace(/(\,\s)?htransR/, "");
   }
   
   
   if (texto.match(/htrans/)){
      texto = texto.replace(/(\,\s)?htrans/, "");
      texto += " htransR";
   } else {
      texto += " htrans";
   }
   
   if (texto2.match(/cmtransR/)){
      texto2 = texto2.replace(/(\,\s)?cmtransR/, "");
   }
   
   
   if (texto2.match(/cmtrans/)){
      texto2 = texto2.replace(/(\,\s)?cmtrans/, "");
      texto2 += " cmtransR";
   } else {
      texto2 += " cmtrans";
   }
   
   cabecera.className = texto;
   cabeceraMini.className = texto2;
   
   recolocarCuerpo ();
}



/* From Modernizr */
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'WebkitTransition':'webkitTransitionEnd',
      'MozTransition':'transitionend'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
