//funciones Javascript CreativaT

//---------ENCABEZADO slide_down-----------
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("slide_down").style.top = "0";
  } else {
    document.getElementById("slide_down").style.top = "-100px";
  }
}

//------------TALLERES 19/20 slideshow----------------
var fotosIndex = 1;
muestraSlide(fotosIndex);
function plusSlides(n) {
  muestraSlide(fotosIndex += n);
}
function currentSlide(n) {
  muestraSlide(fotosIndex = n);
}
function muestraSlide(n) {
  var i;
  var fotos = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > fotos.length) {fotosIndex = 1}//cuando llega a la ultima foto, vuelve a la primera   
  if (n < 1) {fotosIndex = fotos.length}//cuando está en la primera foto, el índice es la cantidad total de fotos
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";//oculta las fotos
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//cambia el estilo css de la clase active a ninguna
  }
  fotos[fotosIndex-1].style.display="block";
  dots[fotosIndex-1].className += " active";
}

//--------TALLERES 18/19 lightbox----------------
function abrir() {
    document.getElementById("cuadroGrande").style.display="block";
}
function cerrar() {
    document.getElementById("cuadroGrande").style.display="none";
}
function cerrar2() {
    document.getElementById("cuadroGrande").style.display="none";
}


function fotosSrc(src) {//sacamos la información de this.src y la traemos a través del parametro src. 
    var foto='<img src="'+src+'">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}

//--------TALLERES 18/19 portfolio-----------------
//fuente https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open5
function fieltro() {
    var contenidoFieltro = window.open("", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=500,height=500"); 
    var mostrarFieltro = document.getElementById("fieltro").innerHTML;
    contenidoFieltro.document.write(mostrarFieltro);
}
function tinte() {
  var contenidoTinte = window.open("", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=500,height=500"); 
  var mostrarTinte = document.getElementById("tinte").innerHTML;
  contenidoTinte.document.write(mostrarTinte);
}
function libre() {
  var contenidoLibre = window.open("", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=500,height=500"); 
  var mostrarLibre = document.getElementById("libre").innerHTML;
  contenidoLibre.document.write(mostrarLibre);
}
function dulceros() {
  var contenidoDulceros = window.open("", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=500,height=500"); 
  var mostrarDulceros = document.getElementById("dulceros").innerHTML;
  contenidoDulceros.document.write(mostrarDulceros);
}

