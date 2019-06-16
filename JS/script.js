let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let worksCategories = document.getElementById('worksCategories');
let worksContent = document.getElementById('works-content');
let contact = document.getElementById("contact");
let contact_me = document.getElementById("contact_me");
let getContact = document.getElementById("getContact");
let send = document.getElementById("send");
let email = document.getElementById("email");
let form = document.getElementById("form");
var modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let modalTitle = document.getElementById("modalTitle");
let modalAnchor = document.getElementById("modalAnchor");
var span = document.getElementsByClassName("close")[0];

function removeSection() {
  about.classList.remove("view");
  getAbout.classList.remove("selected");
  resume.classList.remove("view");
  getResume.classList.remove("selected");
  works.classList.remove("view");
  getWorks.classList.remove("selected");
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
getContact.addEventListener("click", function(e) {
  getSection(e, contact, getContact);
});
contact_me.addEventListener("click", function(e) {
  getSection(e, contact, getContact);
});

function getSection(event, section, getButton) {
  if (window.innerWidth > 1040) {
    event.preventDefault();
    removeSection();
    section.classList.add("view");
    getButton.classList.add("selected");
  }
}

worksCategories.addEventListener('click', function(e){

  let worksContainers = document.getElementsByClassName('work-container');
  
  for(let i = 0; i < worksContainers.length; i++) { 

    if(worksCategories.children[i].innerHTML.toLowerCase() == e.target.innerHTML.toLowerCase())
      worksCategories.children[i].classList.add('selected');
    else 
      worksCategories.children[i].classList.remove('selected');
    
    
    if(e.target.innerHTML.toLowerCase()==='all')
      worksContainers[i].classList.remove('hidden');
    else

      if(!worksContainers[i].classList.contains(e.target.innerHTML.toLowerCase()))
        worksContainers[i].classList.add('hidden');
       else
        worksContainers[i].classList.remove('hidden');
  }
 
})

worksContent.addEventListener('click', function(event){
  var parent = getClosest(event.target, '.work-container');
  if(parent)
  {
    modalImg.src = parent.getElementsByTagName('img')[0].src;
    modalTitle.innerHTML = parent.getElementsByTagName('h4')[0].innerText
    modalAnchor.href =  parent.getAttribute('href');
    modal.style.display = "block";

  }
});

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


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function getClosest(elem, selector) {

	for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if ( elem.matches( selector ) ) 
      return elem;
	}
	return null;
};