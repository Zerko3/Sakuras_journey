'use strict';

// DOM ELEMENTS
const hamburgerNav = document.querySelector('.navigation--hamburger');
const hamburgerSideNavigation = document.querySelector(
  '.navigation--hamburger--box--parent'
);
const hamburgerLineOne = document.querySelector('.line--1');
const hamburgerLineTwo = document.querySelector('.line--2');
const hamburgerLineThree = document.querySelector('.line--3');

// Toggle hamburger side navigation view
const toggleHamburgerNavView = function () {
  hamburgerSideNavigation.classList.toggle('navigation--hamburger--active');
  hamburgerLineOne.classList.toggle('line--1--animated');
  hamburgerLineTwo.classList.toggle('line--2--animated');
  hamburgerLineThree.classList.toggle('line--3--animated');
};

// Initialization
const init = function () {
  hamburgerNav.addEventListener('click', toggleHamburgerNavView);
};
init();
