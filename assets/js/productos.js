// productos.js

const productos = [
  {
    nombre: "Torta de Chocolate Belga",
    descripcion: "Bizcocho húmedo de cacao intenso con cobertura de ganache de chocolate belga, suave y aterciopelado.",
    imagen: "../assets/imagenes/tortabelga.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta Oreo",
    descripcion: "Cremosa combinación de vainilla y galletas Oreo, con base crocante y cobertura de crema y trozos de galleta.",
    imagen: "../assets/imagenes/tortaoreo.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta de Nuez y Dulce de Leche",
    descripcion: "Bizcocho esponjoso con relleno de dulce de leche artesanal y trozos de nuez caramelizada.",
    imagen: "../assets/imagenes/tortanuezyddl.webp",
    categoria: "tortas"
  },
  {
    nombre: "Tarta de Manzana Caramelizada",
    descripcion: "Masa crocante rellena con manzanas frescas, canela y caramelo casero.",
    imagen: "../assets/imagenes/tartamanzana.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta Selva Negra Clásica",
    descripcion: "Capas de bizcocho de chocolate, crema chantilly y cerezas, decorada con virutas de chocolate.",
    imagen: "../assets/imagenes/selvanegra.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta Red Velvet",
    descripcion: "Clásico pastel rojo aterciopelado con suave crema de queso y un toque de vainilla.",
    imagen: "../assets/imagenes/redvelvet.webp",
    categoria: "tortas"
  },
  {
    nombre: "Lemon Pie (Tarta de Limón y Merengue)",
    descripcion: "Base de masa quebrada con suave crema de limón y un merengue dorado y esponjoso.",
    imagen: "../assets/imagenes/lemonpie.webp",
    categoria: "tortas"
  },
  {
    nombre: "Chocotorta Argentina",
    descripcion: "Postre frío con capas de galletitas de chocolate y dulce de leche, con crema suave tipo mousse.",
    imagen: "../assets/imagenes/chocotorta.webp",
    categoria: "tortas"
  },
  {
    nombre: "Cheesecake de Frutos Rojos",
    descripcion: "Base crocante de galletas con cremoso cheesecake horneado y topping de frutos rojos frescos.",
    imagen: "../assets/imagenes/cheesecakefrutosrojos.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta de Zanahoria con Crema de Queso",
    descripcion: "Bizcocho húmedo con zanahoria rallada, nueces y especias, cubierto con frosting de queso.",
    imagen: "../assets/imagenes/carrotcake.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta Rogel",
    descripcion: "Capas finas de masa hojaldrada con dulce de leche, coronadas con merengue italiano.",
    imagen: "../assets/imagenes/tortarogel.webp",
    categoria: "tortas"
  },
  {
    nombre: "Torta Cabsha",
    descripcion: "Base crocante con dulce de leche y ganache de chocolate, inspirada en el clásico bocadito argentino.",
    imagen: "../assets/imagenes/tortacabsha.webp",
    categoria: "tortas"
  },

  // MINI POSTRES
  {
    nombre: "Vasitos de tiramisú",
    descripcion: "Postre italiano clásico con capas de café, mascarpone y cacao.",
    imagen: "../assets/imagenes/tiramisu.webp",
    categoria: "mini"
  },
  {
    nombre: "Mini tartas de frutas",
    descripcion: "Mini tartas con crema pastelera y frutas frescas.",
    imagen: "../assets/imagenes/minitartafrutas.webp",
    categoria: "mini"
  },
  {
    nombre: "Mini Cheesecakes individuales",
    descripcion: "Cremoso cheesecake con base de galletas y coulis de frutas.",
    imagen: "../assets/imagenes/minicheesecake.webp",
    categoria: "mini"
  },
  {
    nombre: "Macarons surtidos",
    descripcion: "Macarons con rellenos variados: frambuesa, pistacho, vainilla y chocolate.",
    imagen: "../assets/imagenes/macarons.webp",
    categoria: "mini"
  },
  {
    nombre: "Eclairs con crema pastelera",
    descripcion: "Masa choux rellena de crema pastelera y bañada en chocolate.",
    imagen: "../assets/imagenes/eclairs.webp",
    categoria: "mini"
  },
  {
    nombre: "Cupcakes rellenos de frutas",
    descripcion: "Cupcakes con corazón de frutas naturales y cobertura cremosa.",
    imagen: "../assets/imagenes/cupcakesfrutas.webp",
    categoria: "mini"
  },
  {
    nombre: "Cupcakes Tentación",
    descripcion: "Red velvet, vainilla con chips y chocolate intenso.",
    imagen: "../assets/imagenes/cupcakes.webp",
    categoria: "mini"
  },
  {
    nombre: "Cookies con chips",
    descripcion: "Galletas crujientes por fuera y suaves por dentro.",
    imagen: "../assets/imagenes/cookies.webp",
    categoria: "mini"
  },
  {
    nombre: "Brownies con nuez",
    descripcion: "Brownies húmedos de chocolate con trozos de nuez tostada.",
    imagen: "../assets/imagenes/brownie.webp",
    categoria: "mini"
  },
  {
    nombre: "Alfajores de maicena",
    descripcion: "Alfajores con dulce de leche y coco rallado.",
    imagen: "../assets/imagenes/alfajormaicena.webp",
    categoria: "mini"
  },
  {
    nombre: "Alfajores bañados en chocolate",
    descripcion: "Alfajores rellenos y cubiertos en chocolate semiamargo.",
    imagen: "../assets/imagenes/alfajoresartesanales.webp",
    categoria: "mini"
  },
  {
    nombre: "Trufas de chocolate",
    descripcion: "Trufas rellenas de ganache y cubiertas de cacao.",
    imagen: "../assets/imagenes/trufas.webp",
    categoria: "mini"
  }
];


function renderProductos() {
  const secciones = document.querySelectorAll("section.productos");

  const tortas = productos.filter(p => p.categoria === "tortas");
  const mini = productos.filter(p => p.categoria === "mini");

  const grupos = [tortas, mini];

  secciones.forEach((section, index) => {
    section.innerHTML = ""; 

    grupos[index].forEach(p => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h2>${p.nombre}</h2>
        <p>${p.descripcion}</p>

        <div class="cantidad">
            <button class="menos">-</button>
            <span class="numero">1</span>
            <button class="mas">+</button>
        </div>

        <button class="encargar">Encargar</button>
      `;

      // cantidad
      const numero = card.querySelector(".numero");
      const btnMas = card.querySelector(".mas");
      const btnMenos = card.querySelector(".menos");

      btnMas.addEventListener("click", () => {
        numero.textContent = parseInt(numero.textContent) + 1;
      });

      btnMenos.addEventListener("click", () => {
        let valor = parseInt(numero.textContent);
        if (valor > 1) numero.textContent = valor - 1;
      });

      section.appendChild(card);
    });
  });
}

renderProductos();

