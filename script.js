function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert midnight (0) to 12
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById('time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Your authentication logic here
  if (username === "theaddressadmin" && password === "theaddress") {
    // Redirect to the dashboard or display dashboard content
    alert("Login successful!"); // For demonstration purpose, replace with actual redirection code
  } else {
    // Show error message
    document.getElementById("errorMessage").style.display = "block";
  }
});