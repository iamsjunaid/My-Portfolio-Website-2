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
    img: './images/Snapshoot-Portfolio.svg',
    title: 'Tonic',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
    img: './images/Snapshoot-Portfolio2.svg',
    title: 'Multi-Post Stories',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. ',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
    img: './images/Snapshoot-Portfolio3.svg',
    title: 'Facebook 360',
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. ",
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'abc',
    source: 'xyz',
  },
  {
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
  result
  += `<div class="card grid__item mb-5">
  <div class="inner-card d-flex p-4" id=${`card-${index}`}>
  <div class="portfolio-image-container">
  <img id="portfolio-img" src="${project.img}" alt="Project Snapshot" />
  </div>
  <div class="desc">
  <h2 class="card-title">${project.title}</h2>
  <p>${project.desc}</p>
  <div class="list-inline p-1 d-flex">
  ${project.techs.map((tech) => `<span class="badge p-2 text-primary mb-5 fw-normal">${tech}</span>`).join('')}
  </div>
  <button type="button" id="${index}" class="btn btn-outline-primary align-self-start see-project-btn"
  onclick="projectClick(event)">See Project</button>
  </div>
  </div>
  </div>`;
});

document.getElementById('Portfolio').innerHTML = result;

const projects = [];

const projectOne = {
  id: '0',
  img: './images/Snapshoot-Portfolio.svg',
  name: 'Tonic',
  tech: ['Codekit', 'GitHub', 'JavaScript'],
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['HTML', 'CSS', 'JavaScript'],
  demo: 'abc',
  source: 'def',
};

projects.push(projectOne);

const projectTwo = {
  id: '1',
  img: './images/Snapshoot-Portfolio2.svg',
  name: 'Multi-Post Stories',
  tech: ['Codekit', 'GitHub', 'JavaScript'],
  description:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  languages: ['HTML', 'CSS', 'JavaScript'],
  demo: 'abc',
  source: 'def',

};

projects.push(projectTwo);

const projectThree = {
  id: '2',
  img: './images/Snapshoot-Portfolio3.svg',
  name: 'Facebook 360',
  tech: ['Codekit', 'GitHub', 'JavaScript'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  languages: ['HTML', 'CSS', 'JavaScript'],
  demo: 'abc',
  source: 'def',
};

projects.push(projectThree);

const projectFour = {
  id: '3',
  img: './images/Snapshoot-Portfolio4.svg',
  name: 'Uber Navigation',
  tech: ['Codekit', 'GitHub', 'JavaScript'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  languages: ['HTML', 'CSS', 'JavaScript'],
  demo: 'abc',
  source: 'def',
};

projects.push(projectFour);

function projectClick(event) {
  const clickedId = event.target.id;
  header.classList.toggle('header-toggler');

  for (let i = 0; i < projects.length; i + 1) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const insideContainer = document.createElement('div');
      insideContainer.className = 'insideDiv card';
      popupSection.appendChild(insideContainer);

      const headerImageContainer = document.createElement('div');
      headerImageContainer.className = 'headerImageContainer';

      const careersTitle = document.createElement('h2');
      careersTitle.className = 'card-title';
      careersTitle.innerHTML = projects[i].name;
      headerImageContainer.appendChild(careersTitle);

      const closeButton = document.createElement('div');
      closeButton.classList = 'close-icon-popup closeButton';
      closeButton.innerHTML = '<i class="fa-sharp fa-solid fa-xmark" onclick="closeWindow()"></i>';
      headerImageContainer.append(closeButton);

      insideContainer.appendChild(headerImageContainer);

      const techList = document.createElement('div');
      techList.className = 'list-inline p-1 d-flex';

      for (let j = 0; j < projects[i].tech.length; j + 1) {
        const list = document.createElement('p');
        list.className = 'top-popup-para';
        list.innerHTML = projects[i].tech[j];
        const k = 0;
        const counterContainer = document.createElement('div');
        while (k < j) {
          counterContainer.className = 'counter-container';
          counterContainer.innerHTML = '<img src="./images/Counter.svg" alt="counter">';
          k + 1;
        }
        techList.appendChild(counterContainer);
        techList.appendChild(list);
      }
      insideContainer.appendChild(techList);

      const imageContainer = document.createElement('div');
      imageContainer.className = 'popup-image-container';
      insideContainer.appendChild(imageContainer);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.className = 'popupImg';
      img.setAttribute('alt', 'Project image');
      imageContainer.appendChild(img);

      const paraBtnContainer = document.createElement('div');
      paraBtnContainer.className = 'para-btn-container';

      const p = document.createElement('p');
      p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the';
      paraBtnContainer.appendChild(p);
      insideContainer.appendChild(paraBtnContainer);

      const badgeBtnContainer = document.createElement('div');
      badgeBtnContainer.className = 'badge-btn-container';

      const langs = document.createElement('div');
      langs.className = 'list-inline p-1 d-flex mb-5';
      for (let j = 0; j < projects[i].languages.length; j + 1) {
        const list = document.createElement('span');
        list.className = 'badge p-2 text-primary fw-normal';
        list.innerHTML = projects[i].languages[j];
        langs.appendChild(list);
      }
      badgeBtnContainer.appendChild(langs);
      paraBtnContainer.appendChild(badgeBtnContainer);

      const link = document.createElement('div');
      link.className = 'links-container';
      badgeBtnContainer.appendChild(link);
      paraBtnContainer.appendChild(badgeBtnContainer);

      const seeLive = document.createElement('div');
      seeLive.className = 'seeLive';
      seeLive.innerHTML = '<button type="button" id="btnLive" class="btn btn btn-outline-primary">See Live <i class="fa fa-up-right-from-square"></i></button ';
      link.appendChild(seeLive);

      const seeSource = document.createElement('div');
      seeSource.className = 'seeSource';
      seeSource.innerHTML = '<button type="button" id="btnSource" class="btn btn-outline-primary">See Source <i class="fa fa-github"></i></i></button ';
      link.appendChild(seeSource);
    }
  }
}

function closeWindow() {
  const iconClose = document.getElementsByClassName('popupSection');
  header.classList.toggle('header-toggler');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}
