
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

window.addEventListener('scroll', function () {
  // Select the navbar element
  var navbar = document.querySelector('.navbar');

  // Check if the page is scrolled more than 50 pixels
  if (window.scrollY > 300) {
    navbar.classList.add('navbar-bg-on-scroll');
  } else {
    navbar.classList.remove('navbar-bg-on-scroll');
  }
});








