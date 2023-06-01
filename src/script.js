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
const caroselItem = document.getElementsByClassName(
  'section-testimonials__content--box__testimonial'
);
const caroselLeftBtn = document.querySelector(
  '.section-testimonials__content--box--btn--left'
);
const caroselRightBtn = document.querySelector(
  '.section-testimonials__content--box--btn--right'
);
const caroselItemNumber = caroselItem.length;
let position = 0;
const heroBtn = document.querySelector('.hero-section__text-box--btn');
const footerBtnTop = document.querySelector('.footer-grid--btn-box--btn');
const footerLinks = document.querySelector('.footer-grid--links-box');
const registerSection = document.querySelector('.section-register');
const hamburgerLinksBox = document.querySelector(
  '.navigation--hamburger--box--links'
);
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
  { threshold: 0.25 }
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
  { threshold: 0.25 }
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

const scrollFunctionHamburger = function (e) {
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

const heroBtnScroll = function (e) {
  e.preventDefault();

  shop.scrollIntoView();
};

// Carosel function

const hideAllSlides = function () {
  for (const item of caroselItem) {
    item.classList.add('hidden--item');
    item.classList.remove('visible--item');
  }
};

const handleMoveToNextSlide = function (e) {
  hideAllSlides();

  // check if last slide has been reached
  if (position === caroselItemNumber - 1) {
    position = 0; // go back to first slide
  } else {
    // move to next slide
    position++;
  }
  // make current slide visible
  caroselItem[position].classList.add('visible--item');

  // update dot to represent current slide
  // dots[position].classList.add('selected-dot');
  // dots[position].checked = true;
};

const handleMoveToPrevSlide = function (e) {
  hideAllSlides();

  // check if we're on the first slide
  if (position === 0) {
    position = caroselItemNumber - 1; // move to the last slide
  } else {
    // move back one
    position--;
  }
  // make current slide visible
  caroselItem[position].classList.add('visible--item');

  // update dot to represent current slide
  // dots[position].classList.add('selected-dot');
  // dots[position].checked = true;
};

const scrollToTop = function () {
  navigation.scrollIntoView();
};

const footerLinksScroll = function (e) {
  e.preventDefault();

  const targetKey = e.target.textContent;

  if (targetKey === 'Shop') {
    shop.scrollIntoView();
  } else if (targetKey === 'Testimonials') {
    sectionTestimonials.scrollIntoView();
  } else if (targetKey === 'Why us') {
    sectionAboutUs.scrollIntoView();
  } else if (targetKey === 'Ask us a question') {
    registerSection.scrollIntoView();
  }
};

// Initialization
const init = function () {
  hamburgerNav.addEventListener('click', toggleHamburgerNavView);
  mainNavigationLinks.addEventListener('click', scrollFunction);
  caroselLeftBtn.addEventListener('click', handleMoveToPrevSlide);
  caroselRightBtn.addEventListener('click', handleMoveToNextSlide);
  heroBtn.addEventListener('click', heroBtnScroll);
  footerBtnTop.addEventListener('click', scrollToTop);
  footerLinks.addEventListener('click', footerLinksScroll);
  hamburgerLinksBox.addEventListener('click', scrollFunctionHamburger);
  observer.observe(sectionBreak);
  observerTwo.observe(hero);
};
init();
