const loginForm = document.querySelector("#login-form");
const greetingDiv = document.querySelector("#greeting");
const greeting = document.querySelector("#greeting h1");
const deleteNameBtn = document.querySelector("#delete-button");
const userNameInput = loginForm.querySelector('input[name="username"]');

const HIDDEN_CLASSNAME = "hidden";
const USERNAMEKEY = "username";

function handleLoginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAMEKEY, userNameInput.value);
  showGreeting();
}

function handleDeleteName() {
  localStorage.removeItem(USERNAMEKEY);
  location.reload();
}

function showGreeting() {
  const username = localStorage.getItem(USERNAMEKEY);
  greetingDiv.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome, ${username}!`;
}
const savedUserName = localStorage.getItem(USERNAMEKEY);
deleteNameBtn.addEventListener("click", handleDeleteName);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  showGreeting();
}
