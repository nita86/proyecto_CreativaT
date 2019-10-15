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

//------------TALLERES 19/20 slideshow--------------------
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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
