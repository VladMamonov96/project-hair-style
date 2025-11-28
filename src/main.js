import 'swiper/swiper-bundle.css';
import './assets/style/main.scss'


import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let arrText = ['фен-стайлер 2 в 1','суперлёгкий','суперкомпактный','Инновационный\n японский мотор','ЭФФЕКТ САЛОННОГО\n ЛАМИНИРОВАНИЯ']

const swiper = new Swiper('.swiper-vertical', {
    modules: [Pagination],
    speed: 700,
    loop: true,
    clickable: true,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class="${className} pagination">
                      <div class="icon"></div>
                      <p>${arrText[index + 1]}</p>
                     </div>;`
        }
    },
});
