const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const contactUsSuccess = document.querySelector(".contact-us-success");
const submitButton = document.querySelector("#submitButton");

function validateContactForm() {
  event.preventDefault();

  if (checkCharacterLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkCharacterLength(message.value, 10) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateContactForm);

function checkCharacterLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

submitButton.onclick = function() {
  if (checkCharacterLength(fullName.value, 0) && (validateEmail(email.value) === true) && (checkCharacterLength(message.value, 10) === true)) {
    contactUsSuccess.style.display = "block";
    form.style.display = "none";
  }
}