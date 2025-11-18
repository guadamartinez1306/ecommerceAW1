// /assets/js/carrito.js
document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("carrito-contenedor");
  const totalElemento = document.getElementById("total");

  if (!contenedor) {
    console.warn("carrito.js: no se encontró '#carrito-contenedor' en el DOM.");
    return;
  }

  function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
      contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
      if (totalElemento) totalElemento.textContent = "";
      return;
    }

    let total = 0;

    carrito.forEach((item, index) => {
      const subtotal = (Number(item.precio) || 0) * (Number(item.cantidad) || 0);
      total += subtotal;

      const card = document.createElement("div");
      card.classList.add("carrito-item");

      card.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}">
        <div class="carrito-detalle">
          <h3>${item.nombre}</h3>
          <p>Precio: $${item.precio}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
        </div>
        <div class="carrito-accion">
          <button class="eliminar" data-index="${index}">Eliminar</button>
        </div>
      `;

      contenedor.appendChild(card);
    });

    if (totalElemento) totalElemento.textContent = "Total: $" + total;
  }

  // Delegación de eventos: manejamos clicks en botones "Eliminar"
  contenedor.addEventListener("click", (e) => {
    const btn = e.target.closest(".eliminar");
    if (!btn) return;

    const idxStr = btn.dataset.index;
    const indice = Number(idxStr);

    if (Number.isNaN(indice)) {
      console.warn("Índice inválido al eliminar producto:", idxStr);
      return;
    }

    eliminarProducto(indice);
  });

  function eliminarProducto(indice) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (indice < 0 || indice >= carrito.length) {
      console.warn("Indice fuera de rango al eliminar:", indice);
      return;
    }

    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
  }

  // Inicializamos
  cargarCarrito();
});

