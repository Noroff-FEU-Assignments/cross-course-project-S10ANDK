function checkCharacterLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatchingEmail = regEx.test(email);
  return patternMatchingEmail;
}

function validatePhoneNumber(phoneNumber) {
  const regExPhoneNumber =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
  const patternMatchingPhoneNumber = regExPhoneNumber.test(phoneNumber);
  return patternMatchingPhoneNumber;
}

function validateNumber(number) {
  const regExNumber = /^\d+$/;
  const patternMatchingNumber = regExNumber.test(number);
  return patternMatchingNumber;
}
