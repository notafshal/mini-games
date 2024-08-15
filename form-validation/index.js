const error = document.getElementById("error");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (userName.value === "" || userName.value === null) {
    messages.push("Username is required");
  }
  if (password.value === "" || password.value === null) {
    messages.push("Password is required");
  }
  if (password.value.length < 6) {
    messages.push("Password length must be atleast 6 character");
  }
  if (password.value === userName.value) {
    messages.push("You cannot set the same username and password");
  }
  e.preventDefault();
  error.innerText = messages.join(",");
});
