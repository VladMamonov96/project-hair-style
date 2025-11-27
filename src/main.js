import 'swiper/swiper-bundle.css';
import './assets/style/main.scss'


// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     direction: "vertical",
//     speed: 700,
//     mousewheel: true,
// });
//
//
// const items = document.querySelectorAll(".nav-item");
// const nav = document.querySelector(".slider-nav");
// const angles = [-55, -15, 25];
//
// function updateArcRotation() {
//     items.forEach((item, i) => {
//         const base = angles[i];
//         const activeShift = swiper.activeIndex === i ? 8 : 0;
//         item.style.transform = `rotate(${base + activeShift}deg)`;
//     });
// }
//
// updateArcRotation();
//
// swiper.on("slideChange", () => {
//     items.forEach(i => i.classList.remove("active"));
//     items[swiper.activeIndex].classList.add("active");
//     updateArcRotation();
//
//     nav.classList.add("active-arc");
//     setTimeout(() => nav.classList.remove("active-arc"), 300);
// });
//
// /* колесо мыши по меню */
// nav.addEventListener("wheel", e => {
//     e.preventDefault();
//     e.deltaY > 0 ? swiper.slideNext() : swiper.slidePrev();
// });