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
    description: "Website built to be a centralized system to manage login information securely, by use of encryption, authentication & authorization, cookies and JWT. Please use the following login information: (Username: 'Henri', Password: 'justlogin' - ADMIN), or create a normal new account.",
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
  },
  jsjq: {
    name: "JavaScript and jQuery Tutorials",
    description: "This website is developed to be a guiding light for a new developer into the world of JavaScript and jQuery. Website features includes: Development areas, examples, descriptions and more...",
    skills: ["HTML", "Bootstrap", "CSS", "JavaScript", "jQuery"],
    links: ["https://github.com/HenriEdwards/JavaScript-Web", "https://javascript-and-jquery-tutorials.netlify.app"],
    images: ["./images/js (1).jpg", "./images/js (2).jpg", "./images/js (3).jpg", "./images/js (4).jpg"]
  },
  weather: {
    name: "SA Weather",
    description: "This web application retrieves and displays the current weather conditions for South Africa's top cities.",
    skills: ["HTML", "Bootstrap", "CSS", "JavaScript", "jQuery"],
    links: ["https://github.com/HenriEdwards/Weather", "https://za-city-weather.netlify.app"],
    images: ["./images/weather.jpg", "./images/weather.jpg", "./images/weather.jpg", "./images/weather.jpg"]
  }
};

var imageUrls = [
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

  "./images/iss1.jpg",
  "./images/iss2.jpg",
  "./images/iss3.jpg",
  "./images/iss4.jpg",

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

  "./images/js (1).jpg",
  "./images/js (2).jpg",
  "./images/js (3).jpg",
  "./images/js (4).jpg",

  "./images/weather (1).jpg",
  "./images/weather (2).jpg",
  "./images/weather (3).jpg",
  "./images/weather (4).jpg",
];

let loadedImages = [];

function preloadImages(imageUrls) {
  loadedImages = [];
  var imagesToLoad = imageUrls.length;

  function imageLoaded() {
    imagesToLoad--;
    if (imagesToLoad === 0) {
      // All images have been loaded
      // You can now use the preloaded images in your JavaScript code
      console.log('All images have been preloaded.');
      console.log(loadedImages);
    }
  }

  for (var i = 0; i < imageUrls.length; i++) {
    var img = new Image();
    img.onload = imageLoaded;
    img.src = imageUrls[i];
    loadedImages.push(img);
  }
}

// Call the preloadImages function when the user lands on the page
preloadImages(imageUrls);

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
      let changeData = () => {
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
        switch (itemId) {
          case 'user':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[4]);
            projImages.appendChild(loadedImages[5]);
            projImages.appendChild(loadedImages[6]);
            projImages.appendChild(loadedImages[7]);

            break;
          case 'gericht':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[0]);
            projImages.appendChild(loadedImages[1]);
            projImages.appendChild(loadedImages[2]);
            projImages.appendChild(loadedImages[3]);
            break;
          case 'gpt':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[20]);
            projImages.appendChild(loadedImages[21]);
            projImages.appendChild(loadedImages[22]);
            projImages.appendChild(loadedImages[23]);
            break;
          case 'hobby':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[16]);
            projImages.appendChild(loadedImages[17]);
            projImages.appendChild(loadedImages[18]);
            projImages.appendChild(loadedImages[19]);
            break;
          case 'jobs':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[8]);
            projImages.appendChild(loadedImages[9]);
            projImages.appendChild(loadedImages[10]);
            projImages.appendChild(loadedImages[11]);
            break;
          case 'bank':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[24]);
            projImages.appendChild(loadedImages[25]);
            projImages.appendChild(loadedImages[26]);
            projImages.appendChild(loadedImages[27]);
            break;
          case 'iss':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[12]);
            projImages.appendChild(loadedImages[13]);
            projImages.appendChild(loadedImages[14]);
            projImages.appendChild(loadedImages[15]);
            break;
          case 'jsjq':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[28]);
            projImages.appendChild(loadedImages[29]);
            projImages.appendChild(loadedImages[30]);
            projImages.appendChild(loadedImages[31]);
            break;
          case 'weather':
            // Remove images
            while (projImages.firstChild) {
              projImages.removeChild(projImages.firstChild);
            }

            // Add new images
            projImages.appendChild(loadedImages[32]);
            projImages.appendChild(loadedImages[33]);
            projImages.appendChild(loadedImages[34]);
            projImages.appendChild(loadedImages[35]);
            break;
        }

        projDisplay.classList.remove('slide-out');
        projDisplay.classList.add('slide-in');
        isAnimationComplete = true;
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

