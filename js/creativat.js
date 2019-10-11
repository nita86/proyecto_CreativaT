//funciones Javascript CreativaT

//---------slide_down-----------
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

//--------lightbox----------------
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
