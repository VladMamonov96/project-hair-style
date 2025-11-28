import 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';


$(".slider-for").slick({
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    vertical: true,
    asNavFor: ".slider-nav"
});
$(".slider-nav").slick({
    centerPadding: "0",
    arrows: false,
    vertical: true,
    slidesToShow: 5,
    // slidesToScroll: 3,
    speed: 500,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    slide: "div"
})
document.querySelector('.slick-center').parentNode.style.marginleft = "10px";


$('.slick-slide').parent().addClass('parent-has-child');