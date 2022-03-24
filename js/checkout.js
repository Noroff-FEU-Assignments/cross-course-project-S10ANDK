const checkoutForm = document.querySelector(".billing-form");
const backButton = document.querySelector(".back_button");
const cartIconButton = document.querySelector(".checkout-button");
const checkoutNowButton = document.querySelector("#checkoutNowButton");
const cardInformationButton = document.querySelector(".checkout-nav");
const confirmPurchaseButton = document.querySelector(".purchase_button");
const cartDetails = document.querySelector(".cart-container");
const billingDetails = document.querySelector(".billing-details-container");
const cardInformation = document.querySelector(".card-information-container");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const state = document.querySelector("#state");
const stateError = document.querySelector("#stateError");
const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");
const number = document.querySelector("#number");
const numberError = document.querySelector("#numberError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const month = document.querySelector("#month");
const monthError = document.querySelector("#monthError");
const year = document.querySelector("#year");
const yearError = document.querySelector("#yearError");
const securityCode = document.querySelector("#securityCode");
const securityCodeError = document.querySelector("#securityCodeError");

function validateCheckoutForm() {
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

  if (checkCharacterLength(country.value, 0) === true) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }

  if (checkCharacterLength(address.value, 0) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (checkCharacterLength(state.value, 0) === true) {
    stateError.style.display = "none";
  } else {
    stateError.style.display = "block";
  }

  if (validateNumber(postalCode.value) === true && (checkCharacterLength(postalCode.value, 3) === true)) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }

  if (validatePhoneNumber(number.value) === true) {
    numberError.style.display = "none";
  } else {
    numberError.style.display = "block";
  }

  if (validateNumber(cardNumber.value) === true && (checkCharacterLength(cardNumber.value, 3) === true)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }

  if (checkCharacterLength(month.value, 0) === true) {
    monthError.style.display = "none";
  } else {
    monthError.style.display = "block";
  }

  if (checkCharacterLength(year.value, 0) === true) {
    yearError.style.display = "none";
  } else {
    yearError.style.display = "block";
  }

  if (validateNumber(securityCode.value) === true && (checkCharacterLength(securityCode.value, 2) === true)) {
    securityCodeError.style.display = "none";
  } else {
    securityCodeError.style.display = "block";
  }
}

checkoutForm.addEventListener("submit", validateCheckoutForm);

checkoutNowButton.onclick = function () {
  cartDetails.style.display = "none";
  billingDetails.style.transition = "ease-in 1s";
  billingDetails.style.display = "block";
  backButton.style.visibility = "visible";
  backButton.innerHTML = `<a href="checkout.html"><img src="../assets/back-button.png" alt="Back button"></a>`;
};

cardInformationButton.onclick = function () {
  billingDetails.style.display = "none";
  cardInformation.style.display = "block";
  backButton.style.visibility = "visible";
  backButton.innerHTML = `<img src="../assets/back-button.png" alt="Back button">`;

  backButton.onclick = function () {
    billingDetails.style.display = "block";
    cardInformation.style.display = "none";
    backButton.innerHTML = `<a href="checkout.html"><img src="../assets/back-button.png" alt="Back button"></a>`;
  };
};
