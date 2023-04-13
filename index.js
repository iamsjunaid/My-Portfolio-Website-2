const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const gridItem = document.querySelector('.grid__item');

console.log(gridItem);

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

//passing this data dynamically to the portfolio section
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

let parser = new DOMParser();

let result = '';

projectsDataSource.forEach((project, index) => {
  const projectElement = parser.parseFromString(projectsDataSource, 'text/html')
    .body.firstChild;

  result += `<div class="card grid__item mb-5" >
    <div class="inner-card d-flex p-4" id=${'card-' + index}>
      <div class="portfolio-image-container">
        <img id="portfolio-img"
          src="${project.img}"
          alt="Project Snapshot"
        />
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
        <button type="button" class="btn btn-outline-primary align-self-start see-project-btn" onclick="projectClick(event)">
          See Project
        </button>
      </div>
    </div>
  </div>`;
});

document.getElementById('Portfolio').innerHTML = result;

const seeProjectBtns = document.querySelectorAll('.see-project-btn');

console.log(seeProjectBtns);
const projects = [];

const projectOne = {
  id: 'projectOne',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectOne);

const projectTwo = {
  id: 'projectTwo',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectTwo);

const projectThree = {
  id: 'projectThree',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectThree);

const projectFour = {
  id: 'projectFour',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFour);

const projectFive = {
  id: 'projectFive',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFive);

const projectSix = {
  id: 'projectSix',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectSix);

function projectClick(event) {
  // const clickedId = event.target.attr('id');

  console.log(event);

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const insideContainer = document.createElement('div');
      insideContainer.className = 'insideDiv';
      popupSection.appendChild(insideContainer);

      const imageContainer = document.createElement('div');
      imageContainer.className = 'popupImage';
      insideContainer.appendChild(imageContainer);

      const closeIcon = document.createElement('button');
      closeIcon.className = 'closeButton';
      closeIcon.innerHTML =
        '<button onclick="closeWindow()" id="closeButton" ><img src="images/closed-icon.png" alt="CloseIcon"/></i></button>';
      imageContainer.appendChild(closeIcon);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.className = 'popupImg';
      img.setAttribute('alt', 'Project image');
      imageContainer.appendChild(img);

      const careersTitle = document.createElement('h3');
      careersTitle.innerHTML = projects[i].name;
      insideContainer.appendChild(careersTitle);

      const techList = document.createElement('ul');
      insideContainer.appendChild(techList);

      for (let j = 0; j < projects[i].tech.length; j++) {
        const list = document.createElement('li');
        list.innerHTML = projects[i].tech[j];
        techList.appendChild(list);
      }

      const p = document.createElement('p');
      p.innerHTML =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
      insideContainer.appendChild(p);

      const link = document.createElement('div');
      link.className = 'link';
      insideContainer.appendChild(link);

      const seeLive = document.createElement('button');
      seeLive.className = 'seeLive';
      seeLive.innerHTML =
        '<button type="button" id="btnLive" class="btn">See Live <i class="fa fa-up-right-from-square"></i></button ';
      link.appendChild(seeLive);

      const seeSource = document.createElement('button');
      seeSource.className = 'seeSource';
      seeSource.innerHTML =
        '<button type="button" id="btnSource" class="btn">See Source <i class="fa fa-github"></i></i></button ';
      link.appendChild(seeSource);
    }
  }
}

function closeWindow() {
  const iconClose = document.getElementsByClassName('popupSection');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}
