// const home = document.getElementById('Home');
// const bio = document.getElementById('Bio');
// const resume = document.getElementById('Resume');
// const reel = document.getElementById('Reel');
// const contact = document.getElementById('Contact');

// const BioBtn = document.getElementById('about-more');

// const url = window.location.href

// BioBtn.onclick() = function activate() {
//     window.location = url + "/Bio";
// }
const Home = document.getElementById('body');
const title = document.getElementById('title');

const home = document.getElementById('Home');
const bio = document.getElementById('Bio');
const resume = document.getElementById('Resume');
const reel = document.getElementById('Reel');
const contact = document.getElementById('Contact');

const Headshot = document.getElementById('headshot');
const Bio = document.getElementById('about');
const Resume = document.getElementById('resume');
const Reel = document.getElementById('reels');
const Contact = document.getElementById('contacting');
const Footer = document.getElementById('Footer');

const BioHome = document.getElementById('about-home');
const BioBtn = document.getElementById('about-more');
const BioContent1 = document.getElementById('about-content1');
const BioContent2 = document.getElementById('about-content2');

const ResumePartial = document.getElementById("partial-resume");
const ResumeFull = document.getElementById("full-resume");
const ResumeBtn = document.getElementById("button-resume");

function clearActive(){
    home.className = "nav";
    bio.className = "nav";
    resume.className = "nav";
    reel.className = "nav";
    contact.className = "nav";
}

function homeActive() {
    Headshot.style.display = "";
    Bio.style.display = "";
    Resume.style.display = "";
    Reel.style.display = "";
    Contact.style.display = "";
}

function bioHomeActive() {
    BioHome.style.display = "block";
    BioContent1.style.display = "none";
    BioContent2.style.display = "none";
}

function resumeHomeActive() {
    ResumePartial.style.display = "grid";
    ResumeFull.style.display = "none";
}

// router.js

export const router = {};

const url = window.location.toString();

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(state) {
  
  switch(state) {
    case '{home}':
      history.pushState(state, "Home", " ");
      break;

      case "{bio}":
      history.pushState(state, "Bio", "/#bio");
      break;
    
    case '{resume}':
      history.pushState(state, "Resume", "/#resume");
      break;

    case '{reel}':
      history.pushState(state, "Reel", "/#reels");
      break;

    case '{contact}':
      history.pushState(state, "Contact", "/#contact");
      break;
  }
}

window.addEventListener('load', (event) => {
    home.click();
});

window.addEventListener('popstate', (event) => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    
    switch(event.state) {
        case "{home}":
            clearActive();
            home.className = "active nav";

            Home.className = "body home-body-grid-container";
            Bio.className = "About home-about-grid-container";
            Resume.className = "Resume resume1-grid-container";
            Reel.className = "Reels reel-home-grid-container";
            Footer.className = "footer footer-left-grid-container";
            title.innerHTML = "Home - Angel Martinez";

            homeActive();
            bioHomeActive();
            resumeHomeActive();

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            break;
      
        case '{bio}':
            clearActive();
            bio.className = "active nav";

            Home.className = "body bio-body-grid-container";
            Bio.className = "About about-grid-container";
            Footer.className = "footer footer-left-grid-container";
            title.innerHTML = "Bio - Angel Martinez";

            homeActive();

            BioHome.style.display = "none";

            BioContent1.style.display = "block";
            BioContent2.style.display = "block";

            Headshot.style.display = "none";
            Resume.style.display = "none";
            Reel.style.display = "none";
            Contact.style.display = "none";

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            break;
      
        case '{resume}':
            clearActive();
            resume.className = "active nav";

            Home.className = "body resume-body-grid-container";
            Resume.className = "Resume resume2-grid-container";
            title.innerHTML = "Resume - Angel Martinez";

            homeActive();

            ResumePartial.style.display = "none";
            ResumeFull.style.display = "grid";

            Headshot.style.display = "none";
            Bio.style.display = "none";
            Reel.style.display = "none";
            Contact.style.display = "none";

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            break;

        case '{reel}':
            clearActive();
            reel.className = "active nav";

            Home.className = "body reel-body-grid-container";
            Reel.className = "Reels reel-grid-container";
            title.innerHTML = "Reel - Angel Martinez";

            homeActive();

            Headshot.style.display = "none";
            Bio.style.display = "none";
            Resume.style.display = "none";
            Contact.style.display = "none";

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            break;

        case '{contact}':
            clearActive();
            contact.className = "active nav";

            Home.className = "body contact-body-grid-container";
            Footer.className = "footer footer-center-grid-container";
            title.innerHTML = "Contact - Angel Martinez";

            homeActive();

            Headshot.style.display = "none";
            Bio.style.display = "none";
            Resume.style.display = "none";
            Reel.style.display = "none";
            break;
      
        case null:
            clearActive();
            home.className = "active nav";

            Home.className = "body home-body-grid-container";
            Bio.className = "About home-about-grid-container";
            Resume.className = "Resume resume1-grid-container";
            Reel.className = "Reels reel-home-grid-container";
            Footer.className = "footer footer-left-grid-container";
            title.innerHTML = "Home - Angel Martinez";

            homeActive();
            bioHomeActive();
            resumeHomeActive();

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
  
    }
  })