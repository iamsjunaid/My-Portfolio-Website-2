const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');


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
const projectsDataSource =  [
  {
    img: "./images/Snapshoot-Portfolio.svg",
    title: "Tonic",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. ",
    techs: ["HTML", "CSS", "JavaScript"],
    live: "abc",
    source: "xyz",
  },
  {
    img: "./images/Snapshoot-Portfolio2.svg",
    title: "Multi-Post Stories",
    desc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. ",
    techs: ["HTML", "CSS", "JavaScript"],
    live: "abc",
    source: "xyz",
  },
  {
    img: "./images/Snapshoot-Portfolio3.svg",
    title: "Facebook 360",
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. ",
    techs: ["HTML", "CSS", "JavaScript"],
    live: "abc",
    source: "xyz",
  },
  {
    img: "./images/Snapshoot-Portfolio4.svg",
    title: "Uber Navigation",
    desc: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    techs: ["HTML", "CSS", "JavaScript"],
    live: "abc",
    source: "xyz",
  }
]


// console.log(projectSection)


function displayCards() {
  let result = '';

  projectsDataSource.forEach((project,index) => {
    result += `<div class="card grid__item mb-5" >
    <div class="inner-card d-flex p-5" id=${"card-"+index}>
      <div class="portfolio-image">
        <img
          src="${project.img}"
          alt="Project Snapshot"
        />
      </div>
      <div class="desc">
        <h2 class="card-title">${project.title}</h2>
        <p>${project.desc}</p>
        <div class="list-inline p-1 d-flex">
          ${project.techs.map((tech) => `<span class="badge p-2 text-primary mb-5 fw-normal">${tech}</span>`).join('')}
        </div>
        <button type="button" class="btn btn-outline-primary align-self-start">
          See Project
        </button>
      </div>
    </div>
  </div>`
  });

  document.getElementById('Portfolio').innerHTML = result;
}

displayCards();



