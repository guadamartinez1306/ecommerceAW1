const dataPath = "assets/data/productos.json";

async function cargarDestacados() {
  const usuario = sessionStorage.getItem("usuario");

  if (!usuario) {
  document.querySelector(".home-tortas").innerHTML =
    "<p>Iniciá sesión para ver productos.</p>";
  document.querySelector(".home-mini").innerHTML =
    "<p>Iniciá sesión para ver productos.</p>";

  document.querySelectorAll(".titulo-home").forEach(t => t.style.display = "none");

  return;
 }


  const res = await fetch(dataPath);
  const data = await res.json();

  const tortas = data.filter(p => p.categoria === "tortas").slice(0, 3);
  const mini = data.filter(p => p.categoria === "mini").slice(0, 3);

  renderCards(".home-tortas", tortas);
  renderCards(".home-mini", mini);
}

function renderCards(selector, productos) {
  const cont = document.querySelector(selector);
  cont.innerHTML = "";

  productos.forEach(p => {
    cont.innerHTML += `
      <div class="card">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
      </div>
    `;
  });
}

cargarDestacados();


