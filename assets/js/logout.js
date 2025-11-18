document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector("#logout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("usuario");

      window.location.href = "formulario.html";
    });
  }
});

