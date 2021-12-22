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
const modalConfirm = document.querySelector(".modalConfirmation");
const Confirmclose = document.getElementsByClassName("close")[1];

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

// validation du formulaire
function validate() {
  modalConfirm.style.display = "block";
  modalbg.style.display = "none";
}

// modalConfirmation close
Confirmclose.onclick = function () {
  modalConfirm.style.display = "none";
};

// form submit
form.addEventListener("submit", function (event) {
  /*****************SOUMISSION DU FORMULAIRE **********************/
  event.preventDefault();

  /***************** CHAMP PRENOM ********************************/
  if (firstname.value.length <= 2) {
    let myerreur = document.getElementsByClassName("erreur")[0];
    myerreur.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
    myerreur.style.color = "red";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[0];
    myerreur.style.display = "none";
  }

  /***************** CHAMP NOM ********************************/
  if (lastname.value.length <= 2) {
    let myerreur = document.getElementsByClassName("erreur")[1];
    myerreur.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ nom.";
    myerreur.style.color = "red";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[1];
    myerreur.style.display = "none";
  }
  /***************** CHAMP EMAIL ********************************/
  //création de la regex exp pour validation email
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // test pour format email
  let testemail = emailRegex.test(email.value);

  if (testemail) {
    let myerreur = document.getElementsByClassName("erreur")[2];
    myerreur.style.display = "none";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[2];
    myerreur.innerHTML = "Veuillez entrer une adresse email valide";
    myerreur.style.color = "red";
  }

  /***************** CHAMP BIRTHDADE ********************************/
  if (!birthdate.value) {
    let myerreur = document.getElementsByClassName("erreur")[3];
    myerreur.innerHTML = "Veuillez entrer une date de naissance";
    myerreur.style.color = "red";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[3];
    myerreur.style.display = "none";
  }

  /***************** CHAMP QUANTITE ********************************/
  if (!quantite.value) {
    let myerreur = document.getElementsByClassName("erreur")[4];
    myerreur.innerHTML = "Veuillez entrer une valeur entre 0 et 99";
    myerreur.style.color = "red";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[4];
    myerreur.style.display = "none";
  }

  /***************** CHAMP LOCALISATION ********************************/

  let localisationValid = false;
  let i = 0;

  while (!localisationValid && i < localisation.length) {
    if (localisation[i].checked) localisationValid = true;
    i++;
  }

  if (!localisationValid) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Veuillez selectionner une destination";
    myerreur.style.color = "red";
  } else {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.style.display = "none";
  }
});
