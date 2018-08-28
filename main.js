// this is the hamburger menu
let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.responsive-nav');

// when clicking on the hamburger menu give the svg / hamburger menu a class of animate or remove it if it already has the class of animate



menuHamburger.addEventListener('click', function (event) {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('responsive-nav__open')
});