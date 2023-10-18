const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

const header = document.querySelector('header');

const email = document.querySelector('.email');
const form = document.querySelector('.form-1');
const errorContainer = document.createElement('div');
const validationContainer = document.createElement('div');
const toggleListBtn = document.querySelectorAll('.toggle-list-btn');

validationContainer.className = 'validation-container';

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

const projectsDataSource = [
  {
    id: '0',
    img: './images/project-snapshots/mealsdb.jpg',
    company: 'Microverse',
    designation: 'Front End Developer',
    year: '2023',
    title: 'Meals DB',
    desc: 'MealsDB is an application that uses an external API mealsDB to fetch and store the data from. The project contains meals that a user can like, comment and reserve.',
    techs: ['HTML', 'CSS', 'JavaScript-ES6'],
    live: 'https://iamsjunaid.github.io/MealsDB',
    source: 'https://github.com/iamsjunaid/MealsDB',
  },
  {
    id: '1',
    img: './images/project-snapshots/space-travellers-hub.jpg',
    company: 'Microverse',
    designation: 'Front-end developer',
    year: '2023',
    title: 'Space Travellers Hub',
    desc: 'Space Travelers Hub In this project, We have worked with real live data from the SpaceX API. We have built a web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. ',
    techs: ['ReactJS', 'Redux', 'React Testing Library'],
    live: 'https://space-travelers-hub-dhiu.onrender.com/',
    source: 'https://github.com/iamsjunaid/space-travelers-hub',
  },
  {
    id: '2',
    img: './images/project-snapshots/nations-facts.jpg',
    company: 'Microverse',
    designation: 'Front-end developer',
    year: '2023',
    title: 'Nations Facts',
    desc: 'Nations Facts In this project, I have worked on an external API showing various countries and their statistical data. It consists of a homepage that shows a list of the nations. When clicked on a country, it shows the details of the selected country.',
    techs: ['ReactJS', 'Redux', 'React Testing Library'],
    live: 'https://nations-facts.onrender.com/',
    source: 'https://github.com/iamsjunaid/nations-facts',
  },
  {
    id: '3',
    img: './images/project-snapshots/budget-bee.png',
    company: 'Microverse',
    designation: 'Back-end developer',
    year: '2023',
    title: 'Budget Bee',
    desc: 'budget bee is a mobile web application where you can manage your budget; you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    techs: ['Ruby on Rails', 'Tailwind CSS', 'PostgreSQL', 'Rspec'],
    live: 'https://budget-bee.onrender.com/',
    source: 'https://github.com/iamsjunaid/budget-bee',
  },
  {
    id: '4',
    img: './images/project-snapshots/doctalk.jpg',
    company: 'Microverse',
    designation: 'Full-stack developer',
    year: '2023',
    title: 'Doc Talk',
    desc: 'DocTalk is your trusted health companion, bringing the power of informed conversations to your fingertips. We believe that clear and open communication is the key to better healthcare decisions, and that&apos;s what Doctalk is all about.',
    techs: ['Ruby on Rails', 'PostgreSQL', 'RSpec', 'ReactJS', 'Tailwind CSS', 'Redux', 'React Testing Library'],
    live: 'https://doc-talk2.onrender.com/',
    source: 'https://github.com/iamsjunaid/DocTalk-Frontend',
  },
];

let result = '';
projectsDataSource.forEach((project, index) => {
  result += `<div class="card grid__item mb-5">
  <div class="inner-card d-flex p-4" id=${`card-${index}`}>
  <div class="portfolio-image-container">
  <img id="portfolio-img" class="project-img"src="${project.img}" alt="Project Snapshot" />
  </div>
  <div class="desc">
  <h2 class="card-title">${project.title}</h2>
  <p>${project.desc}</p>
  <div class="list-inline p-1 d-flex tech-tags">
  ${project.techs
    .map(
      (tech) => `<span class="badge p-2 text-primary fw-normal">${tech}</span>`,
    )
    .join('')}
  </div>
  <button type="button" id="${index}" class="btn btn-outline-primary align-self-start see-project-btn"
  ">See Project</button>
  </div>
  </div>
  </div>`;
});
document.getElementById('Portfolio').innerHTML = result;

const body = document.querySelector('body');
const popupSection = document.createElement('section');
popupSection.className = 'popupSection';

const popUpCard = (dataSource) => {
  const counter = '<img class="counter" src="./images/Counter.svg" alt="counter"';
  const popUp = document.createElement('div');
  popUp.classList.add('popupSection');
  popUp.innerHTML = `
    <div class="inner-card card p-4" id=${`card-${dataSource.index}`}>
      <div class="title-btn-container">
        <h2 class="card-title">${dataSource.title}</h2>
        <div class="close-icon-popup closeButton">
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="list-inline p-1 d-flex data-container-1">
        <div class="company-details">
          <ul class="list-items-container">
            <li class="list-item" id="list-item-1">${dataSource.company}</li>
            <li>${counter}</li>
            <li class="list-item">${dataSource.designation}</li>
            <li>${counter}</li>
            <li class="list-item">${dataSource.year}</li>
          </ul>
        </div>
        <div class="portfolio-image-container">
          <img id="portfolio-img" src="${dataSource.img}" alt="Project Snapshot" />
        </div>
        <div class="desc-tag-btn-container d-flex">
          <p>${dataSource.desc}</p>
          <div class="tags-btn-container">
            <div class="tech-tags list-inline p-1 d-flex">
              ${dataSource.techs
    .map(
      (tech) => `<span class="badge p-2 text-primary fw-normal">${tech}</span>`,
    )
    .join('')}
            </div>
            <div class="popup-btn-container">
            <a href="${dataSource.live}" target="_blank" rel="noopener noreferrer">
              <button type="button" id="popup-btn-1" class="btn btn-outline-primary align-self-start see-project-btn" ${dataSource.live}>
                See Live
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </a>
            <a href="${dataSource.source}" target="_blank" rel="noopener noreferrer">
              <button type="button" id="popup-btn-2" class="btn btn-outline-primary align-self-start see-project-btn">
                See Source
                <i class="fa-brands fa-github"></i>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const closeButton = popUp.querySelector('.closeButton');
  closeButton.addEventListener('click', () => {
    body.removeChild(popUp);
  });

  return popUp;
};

const buttons = document.querySelectorAll('.see-project-btn');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    header.classList.add('header-toggler');
    const data = projectsDataSource[e.target.id];
    const popup = popUpCard(data);
    document.body.appendChild(popup);
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

toggleListBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = btn.parentElement.parentElement.querySelector('.subitem-list');
    list.classList.toggle('subitem-list-active');
    if (btn.classList.contains('fa-angle-right')) {
      btn.classList.remove('fa-angle-right');
      btn.classList.add('fa-angle-down');
    } else {
      btn.classList.remove('fa-angle-down');
      btn.classList.add('fa-angle-right');
    }
  });
});
