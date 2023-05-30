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
const hamburgerLinks = document.querySelector(
  '.navigation--hamburger--box--parent'
);
const mainNavigationLinks = document.querySelector(
  '.navigation__section__links-box--links'
);
const shop = document.querySelector('.section-shop');
const shopHeading = document.querySelector(
  '.header-secondary--box__header-secondary'
);

const sectionAboutUs = document.querySelector('.section-aboutUs');

const sectionTestimonials = document.querySelector('.section-testimonials');

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
        hamburgerLinks.classList.add('navigation--hamburger--active');
        hamburgerLineOne.classList.remove('line--1--animated');
        hamburgerLineTwo.classList.remove('line--2--animated');
        hamburgerLineThree.classList.remove('line--3--animated');
      }
    });
  },
  { threshold: 1 }
);

// Scroll function

const scrollFunction = function (e) {
  e.preventDefault();
  const targetKey = e.target.textContent;

  if (targetKey === 'About us') {
    sectionAboutUs.scrollIntoView();
  } else if (targetKey === 'Testimonials') {
    sectionTestimonials.scrollIntoView();
  } else if (targetKey === 'Destinations') {
    shop.scrollIntoView();
  }
};

// Initialization
const init = function () {
  hamburgerNav.addEventListener('click', toggleHamburgerNavView);
  mainNavigationLinks.addEventListener('click', scrollFunction);
  observer.observe(sectionBreak);
  observerTwo.observe(hero);
};
init();
