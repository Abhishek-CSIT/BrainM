const registerButton = document.querySelector('#registration-section button');
const loginButton = document.querySelector('#login-section button');
const registrationSection = document.getElementById('registration-section');
const loginSection = document.getElementById('login-section');
const taskSection = document.getElementById('task-section');

registerButton.addEventListener('click', registerUser);
loginButton.addEventListener('click', loginUser);
function registerUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    alert("Both fields are required!");
    return;
  }
  if (usernameExists(username)) {
    alert("Username already exists!");
    return;
  }
  if (!validatePassword(password)) {
    alert("Password must be at least 8 characters long and contain letters and numbers.");
    return;
  }
  const user = {
    username: username,
    password: password
  };
  localStorage.setItem(username, JSON.stringify(user));
  alert("Registration successful! Please login.");
  registrationSection.style.display = 'none';
  loginSection.style.display = 'block';
}

function usernameExists(username) {
  return localStorage.getItem(username) !== null;
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}
function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!username || !password) {
    alert("Both fields are required!");
    return;
  }

  const user = JSON.parse(localStorage.getItem(username));

  if (!user || user.password !== password) {
    alert("Invalid username or password.");
    return;
  }
  alert("Login successful!");
  window.location.href = 'taskmanager.html'; 
}

const addtask = document.querySelector("btn-primary");
