
window.onload = function () {
   recolocarCuerpo ();
   var listaResaltar = document.getElementsByTagName("LABEL");
   var listaTam = listaResaltar.length;
   for (var i = 0; i < listaTam; ++i) {
      listaResaltar[i].addEventListener("mouseover", resaltarTexto);
      listaResaltar[i].addEventListener("mouseout", normalizarTexto);
      listaResaltar[i].addEventListener("click", clickTexto);
   }
}

window.onresize = function () {
   recolocarCuerpo ();
}

function recolocarCuerpo () {
   var cabecera = document.getElementById("cabecera");
   var cuerpo = document.getElementById("cuerpo");
   
   cuerpo.style.marginTop = cabecera.offsetHeight + "px";
}

function resaltarTexto () {
   this.className = "resaltado";
}

function normalizarTexto () {
   this.className = "";
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