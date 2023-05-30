'use strict';

// DOM ELEMENTS
const hamburgerNav = document.querySelector('.navigation--hamburger');
const hamburgerSideNavigation = document.querySelector(
  '.navigation--hamburger--box--parent'
);
const hamburgerLineOne = document.querySelector('.line--1');
const hamburgerLineTwo = document.querySelector('.line--2');
const hamburgerLineThree = document.querySelector('.line--3');
const sectionBreak = document.querySelector('.section-break');
const navigation = document.querySelector('.navigation');
const hero = document.querySelector('.hero-section');
// Toggle hamburger side navigation view
const toggleHamburgerNavView = function () {
  hamburgerSideNavigation.classList.toggle('navigation--hamburger--active');
  hamburgerLineOne.classList.toggle('line--1--animated');
  hamburgerLineTwo.classList.toggle('line--2--animated');
  hamburgerLineThree.classList.toggle('line--3--animated');
};

// Render hamburger on the DOM

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hamburgerNav.classList.remove('navigation--hamburger--active');
      }
    });
  },
  { threshold: 1 }
);
const observerTwo = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hamburgerNav.classList.add('navigation--hamburger--active');
      }
    });
  },
  { threshold: 1 }
);

// Initialization
const init = function () {
  hamburgerNav.addEventListener('click', toggleHamburgerNavView);
  observer.observe(sectionBreak);
  observerTwo.observe(hero);
};
init();
