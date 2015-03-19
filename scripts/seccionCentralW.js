// Definición de la clase SeccionCentralW
function SeccionCentralW (IdNum, tituloI, urlI) {
   if (typeof(tituloI)==='undefined') tituloI = "Titulo num: " + IdNum;
   
   // Atributos internos
   this.indexNum = IdNum - 1;
   this.idHTML = "seccionC" + IdNum;
   this.titulo = tituloI;

   // Objetos html
   this.seccionC = document.getElementById(this.idHTML);
   this.seccionCTitulo = "<label id='" 
                        + this.idHTML + "_titulo" + "'>"
                        + this.titulo
                        + "</label>";
   this.seccionC.innerHTML = this.seccionCTitulo;
   
   // Creando el cuerpo de la seccion
   if (typeof(urlI)==='undefined') {
      this.cuerpoVacio = true;
   } else {
      this.cuerpoVacio = false;
      this.cuerpoIFrame = document.createElement("IFRAME");
      this.cuerpoIFrame.id = this.idHTML + "_cuerpo";
      this.cuerpoIFrame.setAttribute("src", urlI); 
      
      
   }
   this.cuerpoVisible = true;
   
   
   // Creando el estilo css inicial
   this.estilo = document.createElement('style');
   this.estilo.id = "estilo_" + this.idHTML;
   this.estilo.type = 'text/css';
   this.estilo.innerHTML = "#" + this.idHTML + " {"
                            + "position:relative;"
                            + "width: 95%;"
                            + "width:-webkit-calc(100% - 30px);"
                            + "width:-moz-calc(100% - 30px);"
                            + "width: calc(100% - 30px);"
                            + "height: 30%;"
                            + "top: " + (IdNum * 15) + "px;"
                            + "margin-left: auto;"
                            + "margin-right: auto;"
                            + "z-index: 0;"
                            + "border-style: solid;"
                            + "border-width: 3px; "
                            + "box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);"
                            + "}";
                            
   this.seccionC.appendChild(this.estilo);
   
   // Creando el estilo del título de la sección
   this.estiloTitulo = document.createElement('style');
   this.estiloTitulo.id = "estilo_" + this.idHTML + "_titulo";
   this.estiloTitulo.type = 'text/css';
   this.estiloTitulo.innerHTML = "#" + this.idHTML + "_titulo" + " {"
                            + "position:relative;"
                            + "width: 200px;"
                            + "height: 20px;"
                            + "top: -10px;"
                            + "z-index: 10;"
                            + "background-color: #FFF;"
                            + "margin-left: auto;"
                            + "margin-right: auto;"
                            + "border-style: solid;"
                            + "border-width: 2px;"
                            + "box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);"
                            + "font-weight: bold;"
                            + "font-size: 130%;"
                            + "text-align:center;"
                            + "text-decoration: underline;"
                            + "}";
                            
    // Creando el estilo del cuerpo de la sección
    this.estiloCuerpo = document.createElement('style');
    this.estiloCuerpo.id = "estilo_" + this.idHTML + "_cuerpo";
    this.estiloCuerpo.type = 'text/css';
    this.estiloCuerpo.innerHTML = "#" + this.idHTML + "_cuerpo" + " {"
                            + "position:relative;"
                            + "width: 99%;"
                            + "height: 90%;"
                            + "height:-webkit-calc(100% - 10px);"
                            + "height:-moz-calc(100% - 10px);"
                            + "height: calc(100% - 10px);"
                            + "top: -20px;"
                            + "z-index: 1;"
                            //+ "background-color: #FFF;"
                            + "margin-left: auto;"
                            + "margin-right: auto;"
                            + "display:block;"
                            + "margin:auto;"
                            + "overflow:auto;"
                            //+ "border-style: solid;"
                            //+ "border-width: 2px;"
                            //+ "box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);"
                            //+ "font-weight: bold;"
                            //+ "font-size: 130%;"
                            //+ "text-align:center;"
                            //+ "text-decoration: underline;"
                            + "}";
    
    this.seccionC.appendChild(this.estilo);
    this.seccionC.appendChild(this.estiloTitulo);
    this.seccionC.appendChild(this.estiloCuerpo);
    
    if(!(this.cuerpoVacio)) this.seccionC.appendChild(this.cuerpoIFrame);
    
    //console.log(this.seccionC.innerHTML);

}


// Funcion para crear una clase css dinamica que oculte
// el cuerpo de la seccion
SeccionCentralW.prototype.crearHTrans = function() {
   var elementoBuscado = document.getElementById("estilo_" + this.idHTML + "_cuerpoH");
   var padre, estilo;
   var objTitulo = document.getElementById(this.idHTML + "_titulo");
   var valorT =  objTitulo.offsetTop;
   var valorH =  objTitulo.offsetHeight - 5;
   var valorW =  objTitulo.offsetWeight;
   
   
   if (elementoBuscado) {
      padre = elementoBuscado.parentNode;
      padre.removeChild(elementoBuscado);
   }
   
   estilo = document.createElement('style');
   estilo.id = "estilo_" + this.idHTML + "_cuerpoH";
   estilo.type = 'text/css';
   estilo.innerHTML = "#" + this.idHTML + "_cuerpo.htrans { "
                            + " overflow:hidden;"
                            + " transition: top 1.5s, height 1.5s, width 1.5s;"
                            + " -webkit-transition: top 1.5s, height 1.5s, width 1.5s;"
                            + " top: -35px;"
                            + " height: " + valorH + "px;"
                            + " width: 195px;"//+ " width: " + valorW + "px"
                            //+ " overflow:hidden;"
                            //+ " left: auto;"
                            //+ " right: auto;"
                            //+ " align: right;"
                            + " }";
   this.seccionC.appendChild(estilo);
   
   var elementoBuscado2 = document.getElementById("estilo_" + this.idHTML + "H");
   
   if (elementoBuscado2) {
      padre = elementoBuscado2.parentNode;
      padre.removeChild(elementoBuscado2);
   }
   
   var estilo2 = document.createElement('style');
   estilo2.id = "estilo_" + this.idHTML + "H";
   estilo2.type = 'text/css';
   estilo2.innerHTML = "#" + this.idHTML + ".htrans { transition: height 1.5s, width 1.5s;"
                            + "-webkit-transition: height 1.5s, width 1.5s;"
                            //+ " top: -10px;"
                            + " height: " + (valorH - 5) + "px;"
                            + " width: 195px;"//+ " width: " + valorW + "px"
                            //+ " overflow:hidden;"
                            //+ " left: auto;"
                            //+ " right: auto;"
                            //+ " align: right;"
                            + " }";
   this.seccionC.appendChild(estilo2);
}

// Funcion para crear una clase css dinamica que oculte
// el cuerpo de la seccion
SeccionCentralW.prototype.crearSTrans = function() {
   var elementoBuscado = document.getElementById("estilo_" + this.idHTML + "_cuerpoS");
   var padre, estilo;
   //var objTitulo = document.getElementById(this.idHTML + "_titulo");
   //var valorT =  objTitulo.offsetTop;
   //var valorH =  objTitulo.offsetHeight - 5;
   //var valorW =  objTitulo.offsetWeight;
   
   
   if (elementoBuscado) {
      padre = elementoBuscado.parentNode;
      padre.removeChild(elementoBuscado);
   }
   
   estilo = document.createElement('style');
   estilo.id = "estilo_" + this.idHTML + "_cuerpoS";
   estilo.type = 'text/css';
   estilo.innerHTML = "#" + this.idHTML + "_cuerpo.strans { "
                            //+ " overflow:hidden;"
                            + " transition: top 1.5s, height 1.5s, width 1.5s;"
                            + " -webkit-transition: top 1.5s, height 1.5s, width 1.5s;"
                            //+ " top: -35px;"
                            //+ " height: " + valorH + "px;"
                            //+ " width: 195px;"//+ " width: " + valorW + "px"
                            //+ " overflow:hidden;"
                            //+ " left: auto;"
                            //+ " right: auto;"
                            //+ " align: right;"
                            + " }";
                            
   this.seccionC.appendChild(estilo);
   
   var elementoBuscado2 = document.getElementById("estilo_" + this.idHTML + "S");
   
   if (elementoBuscado2) {
      padre = elementoBuscado2.parentNode;
      padre.removeChild(elementoBuscado2);
   }
   
   var estilo2 = document.createElement('style');
   estilo2.id = "estilo_" + this.idHTML + "S";
   estilo2.type = 'text/css';
   estilo2.innerHTML = "#" + this.idHTML + ".strans { transition: height 1.5s, width 1.5s;"
                            + "-webkit-transition: height 1.5s, width 1.5s;"
                            //+ " top: -10px;"
                            //+ " height: " + (valorH - 5) + "px;"
                            //+ " width: 195px;"//+ " width: " + valorW + "px"
                            //+ " overflow:hidden;"
                            //+ " left: auto;"
                            //+ " right: auto;"
                            //+ " align: right;"
                            + " }";
                            
   this.seccionC.appendChild(estilo2);
}




// Función de la clase SeccionCentralW para ocultar el cuerpo
// de la seccion
SeccionCentralW.prototype.ocultarCuerpo = function() {
   var textoClase = this.cuerpoIFrame.className;
   var textoClase2 = this.seccionC.className;
   
   this.crearHTrans();
   
   if (textoClase.match(/strans/)){
      textoClase = textoClase.replace(/(\,\s)?strans/, "");
   }
   
   if (!(textoClase.match(/htrans/))){
      textoClase += " htrans";
   }
   
   if (textoClase2.match(/strans/)){
      textoClase2 = textoClase2.replace(/(\,\s)?strans/, "");
   }
   
   if (!(textoClase2.match(/htrans/))){
      textoClase2 += " htrans";
   }
   
   this.cuerpoIFrame.className = textoClase;
   this.seccionC.className = textoClase2;
   this.cuerpoVisible = false;
}


// Función de la clase SeccionCentralW para mostrar el cuerpo
// de la seccion
SeccionCentralW.prototype.mostrarCuerpo = function() {
   var textoClase = this.cuerpoIFrame.className;
   var textoClase2 = this.seccionC.className;
   
   this.crearSTrans();
   
   if (textoClase.match(/htrans/)){
      textoClase = textoClase.replace(/(\,\s)?htrans/, "");
   }
   
   if (!(textoClase.match(/strans/))){
      textoClase += " strans";
   }
   
    if (textoClase2.match(/htrans/)){
      textoClase2 = textoClase2.replace(/(\,\s)?htrans/, "");
   }
   
   if (!(textoClase2.match(/strans/))){
      textoClase2 += " strans";
   }
   
   this.cuerpoIFrame.className = textoClase;
   this.seccionC.className = textoClase2;
   this.cuerpoVisible = true;
}


// Función usada para el evento click en del titulo
// que muestra y oculta el cuerpo de la seccion
SeccionCentralW.prototype.transicion = function() {
   if (this.cuerpoVisible) {
      this.ocultarCuerpo();
   } else {
      this.mostrarCuerpo();
   }
}

// Función para crear el evento del titulo al hacer click
SeccionCentralW.prototype.crearEvTitulo = function () {
   var objTitulo = document.getElementById(this.idHTML + "_titulo");
   

   objTitulo.addEventListener("click", function() {
      seccionCF [this.indexNum].transicion ();
   });
   
}

// Funcion que retorna el objeto titulo
SeccionCentralW.prototype.getTituloHtml = function () {
   var objTitulo = document.getElementById(this.idHTML + "_titulo");

   return objTitulo;
}

