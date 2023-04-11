const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const email = document.querySelector('.email');
const form = document.querySelector('.form-1')

hamMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

email.addEventListener('input', () => {
  if (email.validity) {
    email.setCustomValidity('');
  }
});

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    email.setCustomValidity('Email must be in lowercase');
    e.preventDefault();
  }
});
