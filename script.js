// GreenBites - script.js
// Built by Ajeetha Betsy
// DecodeLabs Internship 2026

// 1. Hamburger menu toggle
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// 2. Close menu when link is clicked
var links = navLinks.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
}

// 3. Active link on scroll
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navItems = document.querySelectorAll('.nav-links li a');
  var current = '';

  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = sections[i].getAttribute('id');
    }
  }

  for (var j = 0; j < navItems.length; j++) {
    navItems[j].style.color = '';
    if (navItems[j].getAttribute('href') === '#' + current) {
      navItems[j].style.color = '#4CAF50';
    }
  }
});

// 4. Menu card click
var menuCards = document.querySelectorAll('.menu-card');
for (var i = 0; i < menuCards.length; i++) {
  menuCards[i].addEventListener('click', function() {
    var dish = this.querySelector('h3').textContent;
    alert('You selected: ' + dish + ' Thankyou for choosing GreenBites!');
  });
}
