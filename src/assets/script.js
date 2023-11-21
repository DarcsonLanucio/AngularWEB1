import * as bootstrap from "primeng/carousel";

const carrossel = document.querySelector('#carrossel');
const bootsCarrossel = new bootstrap.Carousel(carrossel,{
  interval:false
})

var carrosseltamanho=$('.carousel-inner')[0].scrollWidth;
var cardwidth = $('.carousel-item').width();
var scrollPosition = 0;

$('.carousel-control-next').on('click', function (){
  console.log("prox")
  if (scrollPosition<(carrosseltamanho-(cardwidth*5))) {

    scrollPosition = scrollPosition + cardwidth;
    $('.carousel-inner').animate({
      scrollleft: scrollPosition
    }, 600);
  }
});
$('.carousel-control-prev').on('click', function (){
  if (scrollPosition>0) {
    console.log("prev")
    scrollPosition = scrollPosition - cardwidth;
    $('.carousel-inner').animate({
      scrollleft: scrollPosition
    }, 600);
  }
});
