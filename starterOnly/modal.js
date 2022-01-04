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
const localisation = document.getElementsByName("location");
const modalConfirm = document.querySelector(".modalConfirmation");
const Confirmclose = document.getElementsByClassName("close")[1];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.add("bground-apparition"); // ajoute la classe avec le display block
  modalbg.classList.remove("bground"); // retire la classe avec le display none
}

// modal form close
modalclose.onclick = function () {
  modalbg.classList.remove("bground-apparition"); // retire la classe avec le display block
  modalbg.classList.add("bground"); // ajoute la classe avec le display none
};

// validation du formulaire
function validate() {
  modalbg.classList.remove("bground-apparition"); // retire la classe avec le display block
  modalbg.classList.add("bground"); // ajoute la classe avec le display none
  modalConfirm.classList.remove("modalConfirmation"); // retire la classe avec le display none
  modalConfirm.classList.add("modalConfirmation-apparition"); // ajoute la classe avec le display block
}

// réinitialise le formulaire
function initialize() {
  form.first.value = null;
  form.last.value = null;
  form.email.value = null;
  form.birthdate.value = null;
  form.quantity.value = null;
  // reinitialsation des locations
  for (let index = 0; index < localisation.length; index++) {
    localisation[index].checked = "";
  }
  // reinitialisation des messages d'erreurs
  let myerreur = document.getElementsByClassName("erreur");
  for (let msgerreur = 0; msgerreur < myerreur.length; msgerreur++) {
    myerreur[msgerreur].classList.add("erreur-disappared");
  }
}

// modalConfirmation close
Confirmclose.onclick = function () {
  modalConfirm.classList.remove("modalConfirmation-apparition"); // retire la classe avec le display block
  modalConfirm.classList.add("modalConfirmation"); // ajoute la classe avec le display none
  // appel de la fonction initialize
  initialize();
};

// form submit
form.addEventListener("submit", function (event) {
  /*****************SOUMISSION DU FORMULAIRE **********************/
  event.preventDefault();
  // champ prénom
  if (validfirst(form.first)) {
  } else {
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }
  // champ nom
  if (validlast(form.last)) {
  } else {
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }

  // champ email
  if (validemail(form.email)) {
  } else {
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }
  // champ birthdate
  if (validbirthdate(form.birthdate)) {
  } else {
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }
  // champ quantite
  if (validquantite(form.quantity)) {
  } else {
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }

  // champ localisation
  let localisationValid = false;
  let i = 0;
  // tant que la condition localisationValid est vrai et i inférieur a localisation
  while (!localisationValid && i < localisation.length) {
    // La propriété checked définit ou renvoie l'état coché d'une case à cocher.
    if (localisation[i].checked) localisationValid = true; // la variable passe a vrai
    i++;
  }
  // si une destination n'est pas sélectionné
  if (!localisationValid) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Veuillez selectionner une destination";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }

  // champ checkbox
  // si les conditions générales d'utilisation ne sont pas cochés
  if (!document.getElementById("checkbox1").checked) {
    let myerreur = document.getElementsByClassName("erreur")[6];
    myerreur.innerHTML = "Vous devez accepté les contitions d'utilisations";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    modalConfirm.classList.remove("modalConfirmation-apparition");
    modalConfirm.classList.add("modalConfirmation");
    modalbg.classList.add("bground-apparition");
    modalbg.classList.remove("bground");
  }
});

/***************** CHAMP PRENOM ********************************/
// addEventListener() méthode pour enregistrer un écouteur d'événement avec change comme type d'évènements.
form.first.addEventListener("change", function () {
  // appel de la fonction prise en charge this = paramètre de la fonction validfirst (firstname)
  validfirst(this);
});

const validfirst = function (firstname) {
  if (firstname.value.length < 2) {
    let myerreur = document.getElementsByClassName("erreur")[0];
    myerreur.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ prénom.";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    return false;
  } else {
    let myerreur = document.getElementsByClassName("erreur")[0];
    myerreur.innerHTML = "Prénom valide.";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  }
};

/***************** CHAMP NOM ********************************/
form.last.addEventListener("change", function () {
  validlast(this);
});

const validlast = function (lastname) {
  if (lastname.value.length < 2) {
    let myerreur = document.getElementsByClassName("erreur")[1];
    myerreur.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ nom.";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    return false;
  } else {
    let myerreur = document.getElementsByClassName("erreur")[1];
    myerreur.innerHTML = "Nom valide";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  }
};

/***************** CHAMP EMAIL ********************************/
form.email.addEventListener("change", function () {
  validemail(this);
});

const validemail = function (email) {
  //création de la regex exp pour validation email
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // test pour format email
  let testemail = emailRegex.test(email.value);

  if (testemail) {
    let myerreur = document.getElementsByClassName("erreur")[2];
    myerreur.innerHTML = "email valide";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else {
    let myerreur = document.getElementsByClassName("erreur")[2];
    myerreur.innerHTML = "Veuillez entrer une adresse email valide";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    return false;
  }
};

/***************** CHAMP BIRTHDATE ********************************/
form.birthdate.addEventListener("change", function () {
  validbirthdate(this);
});

const validbirthdate = function (birthdate) {
  if (!birthdate.value) {
    let myerreur = document.getElementsByClassName("erreur")[3];
    myerreur.innerHTML = "Veuillez entrer une date de naissance";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    return false;
  } else {
    let myerreur = document.getElementsByClassName("erreur")[3];
    myerreur.innerHTML = "birthdate valide";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  }
};

/***************** CHAMP QUANTITE ********************************/
form.quantity.addEventListener("change", function () {
  validquantite(this);
});

const validquantite = function (quantite) {
  if (!quantite.value) {
    let myerreur = document.getElementsByClassName("erreur")[4];
    myerreur.innerHTML = "Veuillez entrer une valeur entre 0 et 99";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    return false;
  } else {
    let myerreur = document.getElementsByClassName("erreur")[4];
    myerreur.innerHTML = "valeur valide";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  }
};
/***************** CHAMP LOCALISATION ********************************/
form.addEventListener("click", function () {
  if (document.getElementById("location1").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "New york selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else if (document.getElementById("location2").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "San francisco selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else if (document.getElementById("location3").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Seattle selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else if (document.getElementById("location4").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Chicago selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else if (document.getElementById("location5").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Boston selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  } else if (document.getElementById("location6").checked) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Portland selectionné";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
    return true;
  }
});

/***************** CHAMP CONDITIONS GENERALES ********************************/
form.addEventListener("click", function () {
  if (document.getElementById("checkbox1").checked) {
    let myerreur = document.getElementsByClassName("erreur")[6];
    myerreur.innerHTML = "contitions d'utilisations accepté";
    myerreur.classList.add("text-success");
    myerreur.classList.remove("text-danger");
  } else {
    let myerreur = document.getElementsByClassName("erreur")[6];
    myerreur.innerHTML = "Vous devez accepté les contitions d'utilisations";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
  }
});
