const formBlock = document.querySelector(".form__block");
const formRegister = document.querySelector(".form_register");
const scoreBlock = document.querySelector(".score__block");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const name_error = document.querySelector(".name_error");
const email_error = document.querySelector(".email_error");

scoreBlock.style.display = "none";
let isFormSubmitted = localStorage.getItem("isFormSubmitted");

if (isFormSubmitted) {
  formBlock.style.display = "none";
  scoreBlock.style.display = "flex";
}

nameInput.addEventListener("change", (e) => {
  if (!e.target.value || e.target.value === "") {
    name_error.style.display = "block";
    name_error.textContent = "Enter your name";
    nameInput.classList.add("error_border");
  } else {
    name_error.style.display = "none";
    name_error.textContent = "";
    nameInput.classList.remove("error_border");
  }
});

emailInput.addEventListener("change", (e) => {
  if (!validateEmail(e.target.value) || e.target.value === "") {
    email_error.style.display = "block";
    email_error.textContent = "Enter your valid email address";
    emailInput.classList.add("error_border");
  } else {
    email_error.style.display = "none";
    email_error.textContent = "";
    emailInput.classList.remove("error_border");
  }
});

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    name_error.style.display = "block";
    name_error.textContent = "Enter your name";
    nameInput.classList.add("error_border");
  } else {
    name_error.style.display = "none";
    name_error.textContent = "";
    nameInput.classList.remove("error_border");
  }
  if (emailInput.value === "") {
    email_error.style.display = "block";
    email_error.textContent = "Enter your valid email address";
    emailInput.classList.add("error_border");
  } else {
    email_error.style.display = "none";
    email_error.textContent = "";
    emailInput.classList.remove("error_border");
  }

  if (nameInput.value && emailInput.value) {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("isFormSubmitted", true);
    formBlock.style.display = "none";
    scoreBlock.style.display = "flex";
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
