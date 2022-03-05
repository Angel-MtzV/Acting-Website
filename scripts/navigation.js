const Home = document.getElementById('home');

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
const Contact = document.getElementById('contact');

function clearActive(){
    home.className = "nav";
    bio.className = "nav";
    resume.className = "nav";
    reel.className = "nav";
    contact.className = "nav";
}

home.onclick = function activate() {
    clearActive();
    home.className = "active nav";

    Home.className = "body home-body-grid-container";

    Headshot.style.display = "";
    Bio.style.display = "";
    Resume.style.display = "";
    Contact.style.display = "";
    Reel.style.display = "";
}

bio.onclick = function activate() {
    clearActive();
    bio.className = "active nav";
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

    Headshot.style.display = "none";
    Bio.style.display = "none";
    Resume.style.display = "none";
    Reel.style.display = "none";
}

ig.onclick = function Instagram() {
    window.open("https://www.instagram.com/aangelmtzz/", "_blank");
}
