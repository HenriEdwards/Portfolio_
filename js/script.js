// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

var data = {
  user: {
    name: "User Credentials Manager",
    description: "This is a full-stack web application built aims to be a centralized system to manage login details across multiple continents, languages, and websites.",
    skills: ["React", "Express", "MongoDB", "CSS"],
    links: ["https://github.com/HenriEdwards/MERN-User-Manager", "https://resplendent-pithivier-138605.netlify.app"],
    images: ["./images/img (12).png", "./images/img (13).png", "./images/img (14).png", "./images/img (15).png"]
  },
  gericht: {
    name: "Gericht Restaurant",
    description: "This is a restaurant themed front-end web application, following a Figma design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-restaurant", "https://gericht-za.netlify.app"],
    images: ["./images/img (1).png", "./images/img (8).png", "./images/img (9).png", "./images/img (18).png"]
  },
  gpt: {
    name: "GPT-3",
    description: "This is a GTP-3 themed front-end web application, following a Figma design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-gpt3", "https://spiffy-moonbeam-8bca8a.netlify.app"],
    images: ["./images/img (17).png", "./images/img (10).png", "./images/img (11).png", "./images/img (16).png"]
  },
  hobby: {
    name: "Hobby Website",
    description: "Website dedicated to my hobbies.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: ["https://github.com/HenriEdwards/Hobby-Website", "https://voluble-piroshki-c475fd.netlify.app"],
    images: ["./images/img (3).png", "./images/img (4).png", "./images/img (5).png", "./images/img (6).png"]
  },
  jobs: {
    name: "Maintenance Jobs Manager",
    description: "This is a full-stack web application built for maintenance management. It allows users to create, archive, update, and batch update maintenance jobs.",
    skills: ["React", "Express", "MongoDB", "CSS"],
    links: ["https://github.com/HenriEdwards/MERN-Maintenance-Manager", "https://fascinating-concha-b3f0a4.netlify.app"],
    images: ["./images/img (19).png", "./images/img (20).png", "./images/img (21).png", "./images/img (22).png"]
  }
};


// list of projects
var list = document.querySelectorAll('.project-list-column h3');

// project description container
let projDisplay = document.querySelector('.project-display');

// info to change
let btns = document.querySelector('.btn-box');
let projImages = document.querySelector('.project-image');

let names = document.querySelector('.project-name');
let descriptions = document.querySelector('.project-description');
let skills = document.querySelector('.project-skills-list');
var images = document.querySelectorAll('.image');
let projImg1 = document.querySelector('.image-1');
let projImg2 = document.querySelector('.image-2');
let projImg3 = document.querySelector('.image-3');
let projImg4 = document.querySelector('.image-4');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');

// landing images
let screensGrid = document.querySelector('.screenshots-grid');

// upper level container for project description 
let projectDescriptionCol = document.querySelector('.project-view-column');

// heading above upper level container for project description 
let headingDescription = document.querySelector('.project-view-column h3.title');

list.forEach(function(item) {
  item.addEventListener('click', function() {
    let itemId = item.classList[1];
    // animation
    projDisplay.classList.add('slide-in');
    // change layout for projects
    headingDescription.style.display = 'block';
    projectDescriptionCol.style.margin = '0';
    projDisplay.style.display = 'flex';

    screensGrid.classList.add('shaded');

    // reset active
    list.forEach(function(item) {
      item.classList.remove('active');
    });

    item.classList.toggle('active');

    // change data
    setTimeout(function() {
      names.innerText = data[itemId].name;
      descriptions.innerText = data[itemId].description;

      // reset skills
      var listSkills = skills.querySelectorAll('li');
      listSkills.forEach(function(item) {
        item.remove();
      });

      // skills
      data[itemId].skills.forEach(function(skill) {
        let temp = document.createElement('li');
        temp.textContent = skill;
        skills.appendChild(temp);
      })

      // add btn and img links
      projImg1.src = data[itemId].images[0];
      projImg2.src = data[itemId].images[1];
      projImg3.src = data[itemId].images[2];
      projImg4.src = data[itemId].images[3];
      btn1.href = data[itemId].links[0];
      btn2.href = data[itemId].links[1];

      projImages.style.display = 'inline-flex';
      btns.style.display = 'flex';
    }, 500); 

    // remove slide

    setTimeout(function() {
      projDisplay.classList.remove('slide-in');
    }, 1000)
  });
});


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    // animation repeats on scroll
    else {
      sec.classList.remove('show-animate');
    }

  });
  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}


function Connection() {
  let userConnected = false;
  let jobsConnected = false;

  const fetchUserConnection = async () => {
    const response = await fetch('https://user-live.onrender.com/api/users', {
      method: 'POST',
    });
  };

  const fetchJobConnection = async () => {
    const response = await fetch('https://job-manager-8erb.onrender.com/api/jobs', {
      method: 'POST',
    });
  };
  fetchUserConnection();
  fetchJobConnection();
}

Connection();