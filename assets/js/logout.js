document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector("#logout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuario");
      window.location.href = "formulario.html";
    });
  }
});

