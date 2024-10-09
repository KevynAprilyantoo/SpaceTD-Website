// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const background = document.querySelector(".background");
const Signuplink = document.querySelector(".signup-link");
const Loginlink = document.querySelector(".login-link");

Signuplink.addEventListener("click", () => {
  background.classList.add("active");
});

Loginlink.addEventListener("click", () => {
  background.classList.remove("active");
});

function formValidation1(a) {
  a.preventDefault();
  var username = document.getElementById("username-reg");
  var email = document.getElementById("email-reg");
  var password = document.getElementById("password-reg");
  var confpassword = document.getElementById("confpassword");
  var checkbox = document.getElementById("checkbox-reg");

  if (username.value.length < 6) {
    alert("Username must be more than 6 characters");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Must ends with @gmail.com");
  } else if (password.value.length == "") {
    alert("Password can't empty");
  } else if (password.value != confpassword.value) {
    alert("Password is not same");
  } else if (!checkbox.checked) {
    alert("Checkbox must be cheked");
  } else {
    alert("berhasil");
  }
}

function formValidation(a) {
  a.preventDefault();
  var email1 = document.getElementById("email-login");
  var password1 = document.getElementById("password-login");
  var checkbox1 = document.getElementById("checkbox-login");

  if (!email1.value.endsWith("@gmail.com")) {
    alert("Must ends with @gmail.com");
  } else if (password1.value.length == 0) {
    alert("Password can't empty");
  } else if (!checkbox1.checked) {
    alert("Checkbox must be cheked");
  } else {
    alert("berhasil");
  }
}
