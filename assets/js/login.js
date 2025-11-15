const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuario === "" || email === "" || password === "") {
    alert("Por favor completá todos los campos");
    return;
  }

  localStorage.setItem("usuario", email);

  // Redirige correctamente desde /pages/
  window.location.href = "productos.html";
});



