
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
const Footer = document.getElementById('Footer');

const BioHome = document.getElementById('about-home');
const BioBtn = document.getElementById('about-more');
const BioContent1 = document.getElementById('about-content1');
const BioContent2 = document.getElementById('about-content2');
const BioContent3 = document.getElementById('about-content3');

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

home.onclick = function activate() {
    clearActive();
    home.className = "active nav";

    Home.className = "body home-body-grid-container";
    Bio.className = "About home-about-grid-container";
    Resume.className = "Resume resume1-grid-container";
    Reel.className = "Reels reel-home-grid-container";
    Footer.className = "footer footer-left-grid-container";

    homeActive();
    bioHomeActive();
    resumeHomeActive();

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

bio.onclick = function activate() {
    clearActive();
    bio.className = "active nav";

    Home.className = "body bio-body-grid-container";
    Bio.className = "About about-grid-container";
    Footer.className = "footer footer-left-grid-container";

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
}

resume.onclick = function activate() {
    clearActive();
    resume.className = "active nav";

    Home.className = "body resume-body-grid-container";
    Resume.className = "Resume resume2-grid-container";

    homeActive();

    ResumePartial.style.display = "none";
    ResumeFull.style.display = "grid";

    Headshot.style.display = "none";
    Bio.style.display = "none";
    Reel.style.display = "none";
    Contact.style.display = "none";

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

reel.onclick = function activate() {
    clearActive();
    reel.className = "active nav";

    Home.className = "body reel-body-grid-container";
    Reel.className = "Reels reel-grid-container";

    homeActive();

    Headshot.style.display = "none";
    Bio.style.display = "none";
    Resume.style.display = "none";
    Contact.style.display = "none";

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

contact.onclick = function activate() {
    clearActive();
    contact.className = "active nav";

    Home.className = "body contact-body-grid-container";
    Footer.className = "footer footer-center-grid-container";

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

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

ResumeBtn.onclick = function activate() {
    // window.open("https://docs.google.com/document/d/1cOBq6PLwqt3QmOGlYSfV8Hfop2pZV4Qsvuvj-ZfxuFw/edit?usp=sharing", "_blank");
    window.open("Files/Angel Martinez Acting Resume.pdf", "_blank");
}