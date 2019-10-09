//funciones Javascript CreativaT

function abrir() {
    document.getElementById("cuadroGrande").style.display="block";
}
function cerrar() {
    document.getElementById("cuadroGrande").style.display="none";
}
function cerrar2() {
    document.getElementById("cuadroGrande").style.display="none";
}
//--------lightbox----------------

function fotosSrc(src) {//sacamos la información de this.src y la traemos a través del parametro src. 
    var foto='<img src="'+src+'">';
    document.getElementById("contenido").innerHTML=foto;
    document.getElementById("cuadroGrande").style.display="block";
}
