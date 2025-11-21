const dataPath = "../assets/data/productos.json";

async function cargarYRenderizarProductos() {
  try {
    const res = await fetch(dataPath);
    const data = await res.json();

    const tortas = data.filter(p => p.categoria === "tortas");
    const mini = data.filter(p => p.categoria === "mini");

    const secciones = [
      document.querySelector(".productos-tortas"),
      document.querySelector(".productos-mini")
    ];

    [tortas, mini].forEach((grupo, index) => {
      const section = secciones[index];
      section.innerHTML = "";

      grupo.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${p.imagen}" alt="${p.nombre}">
          <h2>${p.nombre}</h2>
          <p>${p.descripcion}</p>
          <p class="precio">$ ${p.precio}</p>

          <div class="cantidad">
              <button class="menos">-</button>
              <span class="numero">1</span>
              <button class="mas">+</button>
          </div>

          <button class="encargar" data-id="${p.id}">Encargar</button>
        `;

        const numero = card.querySelector(".numero");
        const btnMas = card.querySelector(".mas");
        const btnMenos = card.querySelector(".menos");

        btnMas.addEventListener("click", () =>
          numero.textContent = Number(numero.textContent) + 1
        );

        btnMenos.addEventListener("click", () => {
          const valor = Number(numero.textContent);
          if (valor > 1) numero.textContent = valor - 1;
        });

        
        card.querySelector(".encargar").addEventListener("click", () => {
          const cantidad = Number(numero.textContent);
          let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

          const existe = carrito.find(item => item.id === p.id);

          if (existe) existe.cantidad += cantidad;
          else carrito.push({ ...p, cantidad });

          localStorage.setItem("carrito", JSON.stringify(carrito));

          alert(`Añadiste ${cantidad} "${p.nombre}" al carrito.`);
        });

        section.appendChild(card);
      });
    });

  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

cargarYRenderizarProductos();



