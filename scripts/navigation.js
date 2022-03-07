
const Home = document.getElementById('body');

const home = document.getElementById('Home');
const bio = document.getElementById('Bio');
const resume = document.getElementById('Resume');
const reel = document.getElementById('Reel');
const contact = document.getElementById('Contact');
const ig = document.getElementById('Ig');

const Headshot = document.getElementById('headshot');
const Bio = document.getElementById('about');
const Resume = document.getElementById('resume');
const Reel = document.getElementById('reels');
const Contact = document.getElementById('contacting');

const BioHome = document.getElementById('about-home');
const BioBtn = document.getElementById('about-more');
const BioContent1 = document.getElementById('about-content1');
const BioContent2 = document.getElementById('about-content2');
const BioContent3 = document.getElementById('about-content3');

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

home.onclick = function activate() {
    clearActive();
    home.className = "active nav";

    Home.className = "body home-body-grid-container";
    Bio.className = "About home-about-grid-container"

    homeActive();
    bioHomeActive();
}

bio.onclick = function activate() {
    clearActive();
    bio.className = "active nav";

    Home.className = "body bio-body-grid-container";
    Bio.className = "About about-grid-container";

    homeActive();

    BioHome.style.display = "none";

    BioContent1.style.display = "block";
    BioContent2.style.display = "block";

    Headshot.style.display = "none";
    Resume.style.display = "none";
    Reel.style.display = "none";
    Contact.style.display = "none";
}

resume.onclick = function activate() {
    clearActive();
    resume.className = "active nav";
}

reel.onclick = function activate() {
    clearActive();
    reel.className = "active nav";
}

contact.onclick = function activate() {
    clearActive();
    contact.className = "active nav";

    Home.className = "body contact-body-grid-container";

    homeActive();

    Headshot.style.display = "none";
    Bio.style.display = "none";
    Resume.style.display = "none";
    Reel.style.display = "none";
}

ig.onclick = function Instagram() {
    window.open("https://www.instagram.com/aangelmtzz/", "_blank");
}

BioBtn.onclick = function activate() {
    clearActive();
    bio.className = "active nav";

    Home.className = "body bio-body-grid-container";
    Bio.className = "About about-grid-container";

    homeActive();

    BioHome.style.display = "none";

    BioContent1.style.display = "block";
    BioContent2.style.display = "block";

    Headshot.style.display = "none";
    Resume.style.display = "none";
    Reel.style.display = "none";
    Contact.style.display = "none";
}