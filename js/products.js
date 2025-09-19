const productosGrilla = document.getElementById("productos-grilla");

fetch("./data/products.json")
  .then((res) => res.json())
  .then((productos) => {
    productos.forEach((p) => {
      const producto = document.createElement("div");
      producto.className = "col";
      producto.innerHTML = `
        <div class="card h-100">
          <img src="${p.Imagen}" class="card-img-top" alt="${p.Producto}">
          <div class="card-body">
            <h3 class="card-title h5">${p.Producto}</h3>
            <p class="card-text">
              Estado: ${p.Estado === 'EN OFERTA' ? '<span class=\'oferta-label\'>EN OFERTA</span>' : p.Estado}
            </p>
            <p class="fw-bold">$${p.Precio}</p>
          </div>
          <div class="card-footer text-center">
            <a href="https://wa.me/5492216540569?text=Hola%2C%20quiero%20comprar%20${encodeURIComponent(p.Producto)}" 
              target="_blank" class="btn btn-success mb-2">Comprar por WhatsApp</a>
            <a href="mailto:dydinformatica.laplata@gmail.com?subject=Pedido%20${encodeURIComponent(p.Producto)}" 
              class="btn btn-outline-primary">Comprar por Email</a>
          </div>
        </div>
      `;
      productosGrilla.appendChild(producto);
    });
  });
