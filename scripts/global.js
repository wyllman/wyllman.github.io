
window.onload = function () {
   recolocarCuerpo ();
}

window.onresize = function () {
   recolocarCuerpo ();
}

function recolocarCuerpo () {
   var cabecera = document.getElementById("cabecera");
   var cuerpo = document.getElementById("cuerpo");
   
   cuerpo.style.marginTop = cabecera.offsetHeight + "px";
}