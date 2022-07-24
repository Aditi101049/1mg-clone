document.getElementById("login_span").addEventListener("click", function () {
    window.location.href = "login.html";
  });
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("error").textContent = "Invalid email address.";
  });
  