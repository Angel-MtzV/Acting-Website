
const home = document.getElementById('Home');
const bio = document.getElementById('Bio');
const resume = document.getElementById('Resume');
const reel = document.getElementById('Reel');
const contact = document.getElementById('Contact');
const ig = document.getElementById('Ig')

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
}

ig.onclick = function Instagram() {
    window.open("https://www.instagram.com/aangelmtzz/", "_blank");
}
