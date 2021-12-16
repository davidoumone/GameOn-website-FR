function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.getElementsByClassName("close")[0];
const form = document.querySelector("#reserve");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantite = document.getElementById("quantity");
const localisation = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// modal form close
modalclose.onclick = function () {
  modalbg.style.display = "none";
};

function validate() {
  if (form.value === undefined) {
    console.error("formulaire invalide");
    return false;
  } else {
    console.log("formulaire envoyé");
    return true;
  }
}

// form submit
form.addEventListener("submit", function (event) {
  // champ nom
  if (firstname.value.length <= 2) {
    event.preventDefault();
    console.error(
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  }

  // champ nom
  if (lastname.value.length <= 2) {
    event.preventDefault();
    console.error("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  // champ email
  if (!email.value) {
    event.preventDefault();
    console.error("veuiller entrer un email");
  }

  // champ birthdate
  if (!birthdate.value) {
    event.preventDefault();
    console.error("veuiller entrer une date de naissance");
  }

  // champ quantite
  if (!quantite.value) {
    event.preventDefault();
    console.error("veuiller saisir une valeur numérique");
  }

  // champ localisation

  let localisationValid = false;
  let i = 0;

  while (!localisationValid && i < localisation.length) {
    if (localisation[i].checked) localisationValid = true;
    i++;
  }

  if (!localisationValid) {
    event.preventDefault();
    console.error("veuillez selectionner une ville!");
  }
});
