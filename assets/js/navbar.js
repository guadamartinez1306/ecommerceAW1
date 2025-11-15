import { pagesData } from "./pages.js";

export function loadNavbar() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  const usuario = localStorage.getItem("usuario");

  let html = "<ul>";

  // Detectar si la página actual está en /pages o en la raíz
  const enPages = window.location.pathname.includes("/pages/");

  const rutaIndex = enPages ? "../index.html" : "./index.html";
  const rutaFormulario = enPages ? "formulario.html" : "./pages/formulario.html";
  const rutaRegistro = enPages ? "registro.html" : "./pages/registro.html";

  // si NO está logueado solo muestra Inicio, Login y Registro
  if (!usuario) {
    html += `
      <li><a href="${rutaIndex}">Inicio</a></li>
      <li><a href="${rutaFormulario}">Iniciar sesión</a></li>
      <li><a href="${rutaRegistro}">Registro</a></li>
    `;
  }

  // si está logueado muestra todas las páginas internas
  else {
    pagesData.forEach(pagina => {
      const linkFinal = enPages ? pagina.link : "./pages/" + pagina.link;
      html += `<li><a href="${linkFinal}">${pagina.titulo}</a></li>`;
    });

    html += `<li><a href="#" id="logout">Cerrar sesión</a></li>`;
  }

  html += "</ul>";
  nav.innerHTML = html;

  // boton de logout
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuario");

      window.location.href = rutaFormulario;
    });
  }
}








