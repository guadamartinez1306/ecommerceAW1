const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!usuario || !email || !password) {
    alert("Completá todos los campos");
    return;
  }

  sessionStorage.setItem("usuario", email);
  window.location.href = "productos.html";
});




