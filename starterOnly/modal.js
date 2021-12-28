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
  if (
    validfirst(form.first) ||
    validlast(form.last) ||
    validemail(form.email) ||
    validbirthdate(form.birthdate) ||
    validquantite(form.quantity)
  ) {
  } else {
    modalConfirm.style.display = "none";
    modalbg.style.display = "block";
  }

  let localisationValid = false;
  let i = 0;

  while (!localisationValid && i < localisation.length) {
    if (localisation[i].checked) localisationValid = true;
    i++;
  }

  if (!localisationValid) {
    let myerreur = document.getElementsByClassName("erreur")[5];
    myerreur.innerHTML = "Veuillez selectionner une destination";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    modalConfirm.style.display = "none";
    modalbg.style.display = "block";
  }

  if (!document.getElementById("checkbox1").checked) {
    let myerreur = document.getElementsByClassName("erreur")[6];
    myerreur.innerHTML = "Vous devez accepté les contitions d'utilisations";
    myerreur.classList.add("text-danger");
    myerreur.classList.remove("text-success");
    modalConfirm.style.display = "none";
    modalbg.style.display = "block";
  }
});

/***************** CHAMP PRENOM ********************************/
form.first.addEventListener("change", function () {
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
