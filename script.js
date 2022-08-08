'use strict';

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav-item')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav-item');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
