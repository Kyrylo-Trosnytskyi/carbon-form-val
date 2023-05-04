const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const successMessage = document.getElementById("success-message");

function validateForm() {
  const isValidName = validateName();
  const isValidEmail = validateEmail();
  const isValidPhone = validatePhone();
  return isValidName && isValidEmail && isValidPhone;
}

function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Будь ласка, введіть своє ім'я.");
    return false;
  }
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    alert("Будь ласка, введіть свою електронну пошту.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Будь ласка, введіть коректну електронну пошту.");
    return false;
  }
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  if (phone === "") {
    alert("Будь ласка, введіть свій номер телефону.");
    return false;
  }
  if (phone.length !== 13 || isNaN(phone)) {
    alert("Будь ласка, введіть коректний номер телефону (лише 12 цифр).");
    return false;
  }
  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    alert("success");
    form.reset();
  }
});
