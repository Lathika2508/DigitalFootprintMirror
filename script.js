function saveProfile() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  document.getElementById('preview-name').innerText = 'Name: ' + name;
  document.getElementById('preview-email').innerText = 'Email: ' + email;
}

function copyReport() {
  alert('Report copied to clipboard!');
}

function simulateDetection() {
  document.getElementById('simulation-result').innerText = 'Browser: Chrome | IP: 192.168.0.1';
}

function filterTips() {
  const query = document.getElementById('search-tips').value.toLowerCase();
  const tips = document.getElementsByClassName('tip');
  for (let i = 0; i < tips.length; i++) {
    const text = tips[i].innerText.toLowerCase();
    tips[i].style.display = text.includes(query) ? '' : 'none';
  }
}

function updatePrivacyLevel() {
  const level = document.getElementById('privacy-level').value;
  document.getElementById('selected-level').innerText = level;
}

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  if (username === "admin" && password === "admin") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "pages/profile.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
  return false;
}
