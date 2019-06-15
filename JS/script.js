let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let contact_me = document.getElementById("contact_me");
let getContact = document.getElementById("getContact");
let send = document.getElementById("send");
var email = document.getElementById("email");
var form = document.getElementById("form");

function remove() {
  about.classList.remove("view");
  getAbout.classList.remove("selected");
  resume.classList.remove("view");
  getResume.classList.remove("selected");
  works.classList.remove("view");
  getWorks.classList.remove("selected");
  blog.classList.remove("view");
  getBlog.classList.remove("selected");
  contact.classList.remove("view");
  getContact.classList.remove("selected");
}

getAbout.addEventListener("click", function(e) {
  getSection(e, about, getAbout);
});
getResume.addEventListener("click", function(e) {
  getSection(e, resume, getResume);
});
getWorks.addEventListener("click", function(e) {
  getSection(e, works, getWorks);
});
getBlog.addEventListener("click", function(e) {
  getSection(e, blog, getBlog);
});
getContact.addEventListener("click", function(e) {
  getSection(e, contact, getContact);
});
contact_me.addEventListener("click", function(e) {
  getSection(e, contact, getContact);
});

function getSection(event, section, getButton) {
  if (window.innerWidth > 1040) {
    event.preventDefault();
    remove();
    section.classList.add("view");
    getButton.classList.add("selected");
  }
}

email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;
  event.preventDefault();
  var form= {
    name:  name,
    email: email,
    text: message,
  }
  localStorage.setItem("contactForm",JSON.stringify(form));
  document.getElementById("form").reset();
  alert( ` ${JSON.parse(localStorage.contactForm).name} gracias por contactarme.
  Te respondere cuanto antes.`)

});
