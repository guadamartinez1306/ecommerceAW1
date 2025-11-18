import { pagesData } from "./pages.js";

export function loadNavbar() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  const usuario = sessionStorage.getItem("usuario");

  const enPages = window.location.pathname.includes("/pages/");
  const rutaIndex = enPages ? "../index.html" : "./index.html";
  const rutaFormulario = enPages ? "formulario.html" : "./pages/formulario.html";
  const rutaRegistro = enPages ? "registro.html" : "./pages/registro.html";

  let html = "<ul>";

  if (!usuario) {
    html += `
      <li><a href="${rutaIndex}">Inicio</a></li>
      <li><a href="${rutaFormulario}">Iniciar sesión</a></li>
      <li><a href="${rutaRegistro}">Registro</a></li>
    `;
  } else {
    pagesData.forEach(pagina => {
      const linkFinal = enPages ? pagina.link : "./pages/" + pagina.link;
      html += `<li><a href="${linkFinal}">${pagina.titulo}</a></li>`;
    });

    html += `<li><a href="#" id="logout">Cerrar sesión</a></li>`;
  }

  html += "</ul>";
  nav.innerHTML = html;

  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", e => {
      e.preventDefault();
      sessionStorage.removeItem("usuario");
      window.location.href = rutaFormulario;
    });
  }
}









