import 'swiper/swiper-bundle.css';
import './assets/style/main.scss'


import Swiper from 'swiper';


const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    direction: "vertical",
    on: {
        init() {
            const s = this;
            buildRing(s);
            updateActive(s);
        },
        slideChange() {
            const s = this;
            updateActive(s);
        }
    }
});

function buildRing(swiper) {
    const container = document.querySelector('.bullets');
    const total = swiper.slides.length;
    const radius = 150;
    const center = 120;
    for (let i = 0; i < total; i++) {
        const slide = swiper.slides[i];
        const icon = slide.dataset.icon;

        const b = document.createElement('div');
        b.classList.add('bullet');
        b.dataset.index = i;
        const angle = (i / total) * Math.PI * 2;
        const x = center + radius * Math.cos(angle) - 8;
        const y = center + radius * Math.sin(angle) - 8;
        b.style.left = `${x}px`;
        b.style.top = `${y}px`;

        // создаём IMG
        if (icon) {
            const img = document.createElement('div');
            img.classList.add('bullet-icon');
            // img.src = icon;
            img.setAttribute("style", "mask-image: url('" + icon + "');");
            b.appendChild(img);
        }


        b.addEventListener('click', () => swiper.slideTo(i));
        container.appendChild(b);
    }
}

function updateActive(swiper) {
    const idx = swiper.activeIndex;

    document.querySelectorAll('.bullet').forEach(b => {
        b.classList.toggle('active', Number(b.dataset.index) === idx);
    });

    // Вращаем кольцо так, чтобы активная точка оказалась сверху
    const ring = document.querySelector('.ring');
    const angle = -(idx * (360 / swiper.slides.length));
    ring.style.transform = `rotate(${angle}deg)`;

    // Подпись
    let slideLabel = swiper.slides[idx].dataset.label;
    document.querySelector('.slide-label').textContent = slideLabel;
}
