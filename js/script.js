// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

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

var data = {
  user: {
    name: "User Credentials Manager",
    description: "This is a full-stack web application built to be a centralized system to manage login information securely, by use of authentication & authorization, cookies and JWT. Please use the following login information: Username: 'Henri', Password: 'justlogin'.",
    skills: ["React", "Express", "MongoDB", "CSS"],
    links: ["https://github.com/HenriEdwards/MERN-User-Manager", "https://resplendent-pithivier-138605.netlify.app"],
    images: ["./images/img (12).jpg", "./images/img (13).jpg", "./images/img (14).jpg", "./images/img (15).jpg"]
  },
  gericht: {
    name: "Gericht Restaurant",
    description: "This is a restaurant themed web design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-restaurant", "https://gericht-za.netlify.app"],
    images: ["./images/img (1).jpg", "./images/img (8).jpg", "./images/img (9).jpg", "./images/img (18).jpg"]
  },
  gpt: {
    name: "GPT-3",
    description: "This is a GPT-3 themed web design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-gpt3", "https://spiffy-moonbeam-8bca8a.netlify.app"],
    images: ["./images/img (17).jpg", "./images/img (10).jpg", "./images/img (11).jpg", "./images/img (16).jpg"]
  },
  hobby: {
    name: "Hobby Website",
    description: "Website dedicated to my hobbies.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: ["https://github.com/HenriEdwards/Hobby-Website", "https://voluble-piroshki-c475fd.netlify.app"],
    images: ["./images/img (2).jpg", "./images/img (3).jpg", "./images/img (4).jpg", "./images/img (5).jpg"]
  },
  jobs: {
    name: "Maintenance Jobs Manager",
    description: "This is a full-stack web application built for maintenance management. It allows users to create, archive, update, and batch update maintenance jobs.",
    skills: ["React", "Express", "MongoDB", "CSS"],
    links: ["https://github.com/HenriEdwards/MERN-Maintenance-Manager", "https://fascinating-concha-b3f0a4.netlify.app"],
    images: ["./images/img (19).jpg", "./images/img (20).jpg", "./images/img (21).jpg", "./images/img (22).jpg"]
  },
  bank: {
    name: "HooBank",
    description: "Website developed for the fictitious company, HooBank.",
    skills: ["React", "Tailwind CSS"],
    links: ["https://github.com/HenriEdwards/HooBank-Web", "https://helpful-smakager-177085.netlify.app"],
    images: ["./images/img (23).jpg", "./images/img (24).jpg", "./images/img (25).jpg", "./images/img (26).jpg"]
  },
  iss: {
    name: "International Space Station - Live Location",
    description: "This website shows the live location of the ISS in latitude & longitude, as well as the closest capital city & country calculated using the Haversine formula.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: ["https://github.com/HenriEdwards/ISS", "https://iss-live-locations.netlify.app"],
    images: ["./images/sc.jpg", "./images/sc.jpg", "./images/sc.jpg", "./images/sc.jpg"]
  }
};

// Function loops through project images and creates a list of pre-loaded images
// Primary use, due to slow Netlify servers...
function preloadImages(imageUrls) {
  const preloadedImages = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
    preloadedImages.push(img);
  }
  return preloadedImages;
}

// Pre-load the images
const dynamicImageUrls = [
  "./images/rest (1).jpg",
  "./images/rest (2).jpg",
  "./images/rest (3).jpg",
  "./images/rest (4).jpg",

  "./images/login (1).jpg",
  "./images/login (2).jpg",
  "./images/login (3).jpg",
  "./images/login (4).jpg",

  "./images/jobs (1).jpg",
  "./images/jobs (2).jpg",
  "./images/jobs (3).jpg",
  "./images/jobs (4).jpg",

  "./images/iss.jpg",

  "./images/hobby (1).jpg",
  "./images/hobby (2).jpg",
  "./images/hobby (3).jpg",
  "./images/hobby (4).jpg",

  "./images/gpt (1).jpg",
  "./images/gpt (2).jpg",
  "./images/gpt (3).jpg",
  "./images/gpt (4).jpg",

  "./images/bank (1).jpg",
  "./images/bank (2).jpg",
  "./images/bank (3).jpg",
  "./images/bank (4).jpg",
];

const preloadedImages = preloadImages(dynamicImageUrls);

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// add onClick functionality to project list
list.forEach(function(item) {
  item.addEventListener('click', function() {
    // project name/id
    let itemId = item.classList[1];

    // animation project descriptions
    projDisplay.classList.add('slide-in');
    // display description column title
    headingDescription.classList.add('active');
    // reset margin
    projectDescriptionCol.style.margin = '0';
    // display project descriptions
    projDisplay.style.display = 'flex';

    screensGrid.classList.add('shaded');

    // reset active
    list.forEach(function(item) {
      item.classList.remove('active');
    });

    item.classList.toggle('active');

    // change data - timeout to correspond to animation
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

      // add btn 
      btn1.href = data[itemId].links[0];
      btn2.href = data[itemId].links[1];

      projImages.style.display = 'flex';
      btns.style.display = 'flex';
    }, 500); 

    // img links
    // setTimeout(function() {
    //   projImg1.src = data[itemId].images[0];
    //   projImg2.src = data[itemId].images[1];
    //   projImg3.src = data[itemId].images[2];
    //   projImg4.src = data[itemId].images[3];
    // }, 200)

  // Set project pre-laoded images 
  setTimeout(function() {
    switch (itemId) {
      case 'user':
        projImg1.src = preloadedImages[4].src;
        projImg2.src = preloadedImages[5].src;
        projImg3.src = preloadedImages[6].src;
        projImg4.src = preloadedImages[7].src;
        break;
      case 'gericht':
        projImg1.src = preloadedImages[0].src;
        projImg2.src = preloadedImages[1].src;
        projImg3.src = preloadedImages[2].src;
        projImg4.src = preloadedImages[3].src;
        break;
      case 'gpt':
        projImg1.src = preloadedImages[17].src;
        projImg2.src = preloadedImages[18].src;
        projImg3.src = preloadedImages[19].src;
        projImg4.src = preloadedImages[20].src;
        break;
      case 'hobby':
        projImg1.src = preloadedImages[13].src;
        projImg2.src = preloadedImages[14].src;
        projImg3.src = preloadedImages[15].src;
        projImg4.src = preloadedImages[16].src;
        break;
      case 'jobs':
        projImg1.src = preloadedImages[8].src;
        projImg2.src = preloadedImages[9].src;
        projImg3.src = preloadedImages[10].src;
        projImg4.src = preloadedImages[11].src;
        break;
      case 'bank':
        projImg1.src = preloadedImages[21].src;
        projImg2.src = preloadedImages[22].src;
        projImg3.src = preloadedImages[23].src;
        projImg4.src = preloadedImages[24].src;
        break;
      case 'iss':
        projImg1.src = preloadedImages[12].src;
        projImg2.src = preloadedImages[12].src;
        projImg3.src = preloadedImages[12].src;
        projImg4.src = preloadedImages[12].src;
        break;
    }
    }, 400)

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
    // else {
    //   sec.classList.remove('show-animate');
    // }

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

// start backend for web projects
// needed due to slow Render free version... 
// Temp work-around to keep experience smooth
function Connection() {
  let userConnected = false;
  let jobsConnected = false;

  const fetchUserConnection = async () => {
    try {
      const response = await fetch('https://user-live.onrender.com/api/users/login', {
        method: 'POST',
      });
      console.log('Backend for User-Website Connection Request Sent...ignore');
    } catch(e) {
      console.log('Not serious...',e);
    }
  };

  const fetchJobConnection = async () => {
    try {
      const response = await fetch('https://job-manager-8erb.onrender.com/api/jobs', {
        method: 'POST',
      });
      console.log('Backend for Jobs-Website Connection Request Sent...ignore');
    } catch(e) {
      console.log('Not serious...',e);
    }
  };
  fetchUserConnection();
  fetchJobConnection();
}


Connection();

// keep servers up/busy
setInterval(() => {
  Connection();
}, 60000);