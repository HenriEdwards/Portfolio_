// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// list of projects
var list = document.querySelectorAll('.project-list-column h3');

// project description container
let projDisplay = document.querySelector('.project-display');

// info to change for projects
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
    images: ["./images/login (1).jpg", "./images/login (2).jpg", "./images/login (3).jpg", "./images/login (4).jpg"]
  },
  gericht: {
    name: "Gericht Restaurant",
    description: "This is a restaurant themed web design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-restaurant", "https://gericht-za.netlify.app"],
    images: ["./images/rest (1).jpg", "./images/rest (2).jpg", "./images/rest (3).jpg", "./images/rest (4).jpg"]
  },
  gpt: {
    name: "GPT-3",
    description: "This is a GPT-3 themed web design.",
    skills: ["React", "CSS"],
    links: ["https://github.com/HenriEdwards/Frontend-gpt3", "https://spiffy-moonbeam-8bca8a.netlify.app"],
    images: ["./images/gpt (1).jpg", "./images/gpt (2).jpg", "./images/gpt (3).jpg", "./images/gpt (4).jpg"]
  },
  hobby: {
    name: "Hobby Website",
    description: "Website dedicated to my hobbies.",
    skills: ["HTML", "CSS", "SCSS", "JavaScript"],
    links: ["https://github.com/HenriEdwards/Hobby-Website", "https://voluble-piroshki-c475fd.netlify.app"],
    images: ["./images/hobby (1).jpg", "./images/hobby (2).jpg", "./images/hobby (3).jpg", "./images/hobby (4).jpg"]
  },
  jobs: {
    name: "Maintenance Jobs Manager",
    description: "This is a full-stack web application built for maintenance management. It allows users to create, archive, update, and batch update maintenance jobs.",
    skills: ["React", "Express", "MongoDB", "CSS"],
    links: ["https://github.com/HenriEdwards/MERN-Maintenance-Manager", "https://fascinating-concha-b3f0a4.netlify.app"],
    images: ["./images/jobs (1).jpg", "./images/jobs (2).jpg", "./images/jobs (3).jpg", "./images/jobs (4).jpg"]
  },
  bank: {
    name: "HooBank",
    description: "Website developed for the fictitious company, HooBank.",
    skills: ["React", "Tailwind CSS"],
    links: ["https://github.com/HenriEdwards/HooBank-Web", "https://helpful-smakager-177085.netlify.app"],
    images: ["./images/bank (1).jpg", "./images/bank (2).jpg", "./images/bank (3).jpg", "./images/bank (4).jpg"]
  },
  iss: {
    name: "International Space Station - Live Location",
    description: "This website shows the live location of the ISS in latitude & longitude, as well as the closest capital city & country calculated using the Haversine formula.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: ["https://github.com/HenriEdwards/ISS", "https://iss-live-locations.netlify.app"],
    images: ["./images/iss1.jpg", "./images/iss2.jpg", "./images/iss3.jpg", "./images/iss4.jpg"]
  }
};

// Function loops through project images and creates a list of pre-loaded images
// Primary use, due to slow Netlify servers...

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// This block of code is better suited for slower servers.
// Animations works asyncly with data changes

// Track animation completion
let isAnimationComplete = true;

list.forEach(function(item) {
  item.addEventListener('click', function() {
    let itemId = item.classList[1];

    if (isAnimationComplete) {
      isAnimationComplete = false;

      // Slide-out animation begins
      projDisplay.classList.remove('slide-in');
      projDisplay.classList.add('slide-out');
      // Display description column title and reset the margin
      headingDescription.classList.add('active');
      projectDescriptionCol.style.margin = '0';
      // Display project descriptions
      projDisplay.style.display = 'flex';
      // Dim grid of images
      screensGrid.classList.add('shaded');

      list.forEach(function(item) {
        item.classList.remove('active');
      });

      item.classList.toggle('active');

      // change data - timeout to correspond to animation
      let changeData = async () => {
        names.innerText = data[itemId].name;
        descriptions.innerText = data[itemId].description;

        // Remove prior skills/technologies
        var listSkills = skills.querySelectorAll('li');
        listSkills.forEach(function(item) {
          item.remove();
        });

        // Add project skills/technologies
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

        // Update project images
        await loadImage(projImg1, data[itemId].images[0]);
        await loadImage(projImg2, data[itemId].images[1]);
        await loadImage(projImg3, data[itemId].images[2]);
        await loadImage(projImg4, data[itemId].images[3]);

        projDisplay.classList.remove('slide-out');
        projDisplay.classList.add('slide-in');
        isAnimationComplete = true;
      }

      // Utility function to load image and return a promise
      function loadImage(img, src) {
        return new Promise(function(resolve, reject) {
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      }

      // Animation end event listener
      projDisplay.addEventListener('animationend', function() {
        // Update data and start slide-in animation
        changeData();
      });
    }
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


// OLD CODE - Unfortunately not useful on slow servers (Like netflify free version, should work 100% in a production environment)

// // add onClick functionality to project list
// list.forEach(function(item) {
//   item.addEventListener('click', function() {
//     // project name/id
//     let itemId = item.classList[1];
    
//     projDisplay.classList.remove('slide-in');
//     projDisplay.classList.add('slide-out');
//     // display description column title
//     headingDescription.classList.add('active');
//     // reset margin
//     projectDescriptionCol.style.margin = '0';
//     // display project descriptions
//     projDisplay.style.display = 'flex';

//     screensGrid.classList.add('shaded');

//     // reset active
//     list.forEach(function(item) {
//       item.classList.remove('active');
//     });

//     item.classList.toggle('active');

//     // change data - timeout to correspond to animation
//     let changeData = async () => {
//       names.innerText = data[itemId].name;
//       descriptions.innerText = data[itemId].description;

//       // reset skills
//       var listSkills = skills.querySelectorAll('li');
//       listSkills.forEach(function(item) {
//         item.remove();
//       });

//       // skills
//       data[itemId].skills.forEach(function(skill) {
//         let temp = document.createElement('li');
//         temp.textContent = skill;
//         skills.appendChild(temp);
//       })

//       // add btn 
//       btn1.href = data[itemId].links[0];
//       btn2.href = data[itemId].links[1];

//       projImages.style.display = 'flex';
//       btns.style.display = 'flex';

//       projImg1.src = data[itemId].images[0];
//       projImg2.src = data[itemId].images[1];
//       projImg3.src = data[itemId].images[2];
//       projImg4.src = data[itemId].images[3];
//     }

//     changeData()
//     .then(() => {
//       projDisplay.classList.remove('slide-out');
//       projDisplay.classList.add('slide-in');
//     });
//   })
// })