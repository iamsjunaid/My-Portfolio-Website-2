const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const nameContent = document.querySelector('.name');
const email = document.querySelector('.email');
const comments = document.querySelector('.comments');
const form = document.querySelector('.form-1');
const errorContainer = document.createElement('div');
const validationContainer = document.createElement('div');
validationContainer.className = 'validation-container';

const submitBtn = document.querySelector('.submit-btn');

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

email.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    email.setCustomValidity('Email must be in lowercase');
    form.appendChild(errorContainer);
    errorContainer.textContent = 'Email must be in lowercase';
    errorContainer.style.color = '#fff';
    errorContainer.style.fontSize = '0.8rem';
    errorContainer.style.padding = '1rem';
    errorContainer.style.backgroundColor = 'red';
    errorContainer.style.borderRadius = '0.5rem';
  }
});

email.addEventListener('input', () => {
  email.setCustomValidity('');
});

function validateForm() {
   let name =  document.getElementsByClassName('fname');
   let email =  document.getElementsByClassName('femail');
   let comment =  document.getElementsByClassName('fcomment');
    
  console.log(name+""+email+""+comment);
  if (name.value == null || email.value == null || comment == null) {
    alert("All the fields must be filled out");
    return false;
  }
}


