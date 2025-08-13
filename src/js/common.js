const isSP = window.matchMedia('(max-width: 767px)').matches;

/* global Splide */
const setSlider = () => {
  const splideOptions = {
    arrows: false,
    pagination: false,
    autoWidth: true,
    type: 'loop',
    drag: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoScroll: {
      speed: 0.4,
      pauseOnHover: false,
    },
  };
  const sliderIds = ['#slider1', '#slider2'];
  sliderIds.forEach((id) => {
    new Splide(id, splideOptions).mount(window.splide.Extensions);
  });
};

const setCTA = () => {
  const cta = document.querySelector('.l-sticky-cta');
  const point = document.querySelector('.l-point');
  const footer = document.querySelector('.l-footer');
  const winH = window.innerHeight;
  const winTop = window.pageYOffset;
  const triggerY = winTop + winH * (5 / 6);

  if (!cta || !point) {
    return;
  }

  const startPosition = point.getBoundingClientRect().top;
  const endPosition = footer.getBoundingClientRect().top + window.scrollY;

  if (triggerY >= startPosition && endPosition >= triggerY) {
    cta.classList.add('l-sticky-cta--show');
  } else {
    cta.classList.remove('l-sticky-cta--show');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setSlider();
  if (isSP) {
    setCTA();
  }
});

window.addEventListener('load', () => {
  const loadElms = document.querySelectorAll('.js-load');
  loadElms.forEach((loadElm) => {
    loadElm.classList.add('js-load--loaded');
  });
});

window.addEventListener('scroll', () => {
  if (isSP) {
    setCTA();
  }
});
