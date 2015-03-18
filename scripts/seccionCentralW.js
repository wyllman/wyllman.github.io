// Definición de la clase SeccionCentralW
function SeccionCentralW (IdNum, tituloI, urlI) {
   if (typeof(tituloI)==='undefined') tituloI = "Titulo num: " + IdNum;
   
   // Atributos internos
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

