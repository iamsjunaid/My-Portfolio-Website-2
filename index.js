const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const header = document.querySelector('header');

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
    img: './images/Snapshoot-Portfolio.svg',
    title: 'Tonic',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
    id: '1',
    img: './images/Snapshoot-Portfolio2.svg',
    title: 'Multi-Post Stories',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. ',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
    id: '2',
    img: './images/Snapshoot-Portfolio3.svg',
    title: 'Facebook 360',
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. ",
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
    id: '3',
    img: './images/Snapshoot-Portfolio4.svg',
    title: 'Uber Navigation',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
];

let result = '';
projectsDataSource.forEach((project, index) => {
  result += `<div class="card grid__item mb-5">
  <div class="inner-card d-flex p-4" id=${`card-${index}`}>
  <div class="portfolio-image-container">
  <img id="portfolio-img" src="${project.img}" alt="Project Snapshot" />
  </div>
  <div class="desc">
  <h2 class="card-title">${project.title}</h2>
  <p>${project.desc}</p>
  <div class="list-inline p-1 d-flex">
  ${project.techs
    .map(
      (tech) =>
        `<span class="badge p-2 text-primary mb-5 fw-normal">${tech}</span>`
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

const parser = new DOMParser();

const popUpCard = (dataSource) => {
  const popUp = document.createElement('div');
  popUp.classList.add('popup-card');
  popUp.innerHTML = `
  <div class="inner-card d-flex p-4" id=${`card-${dataSource.index}`}>
  <div class="title-btn-container"><h2 class="card-title">${
    dataSource.title
  }</h2><div class="close-icon-popup closeButton"><i class="fa-sharp fa-solid fa-xmark"></i></div></div>
  <div><ul><li></li><li></li><li></li></ul></div>
  <div class="portfolio-image-container">
  <img id="portfolio-img" src="${dataSource.img}" alt="Project Snapshot" />
  </div>
  <div class="desc">
  <h2 class="card-title">${dataSource.title}</h2>
  <p>${dataSource.desc}</p>
  <div class="list-inline p-1 d-flex">
  ${dataSource.techs
    .map(
      (tech) =>
        `<span class="badge p-2 text-primary mb-5 fw-normal">${tech}</span>`
    )
    .join('')}
  </div>
  <button type="button" class="btn btn-outline-primary align-self-start see-project-btn"
  >See Live</button>
  <button type="button" class="btn btn-outline-primary align-self-start see-project-btn"
  >See Source</button>
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
    const data = projectsDataSource[e.target.id];
    const popup = popUpCard(data);
    document.body.appendChild(popup);
  });
});

// function closeWindow() {
//   const iconClose = document.getElementsByClassName('popupSection');
//   header.classList.toggle('header-toggler');
//   // iconClose[0].style.display = 'none';
//   iconClose[0].remove();
// }
