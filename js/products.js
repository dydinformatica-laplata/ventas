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
            <h5 class="card-title">${p.Producto}</h5>
            <p class="card-text">Estado: ${p.Estado}</p>
            <p class="fw-bold">$${p.Precio}</p>
          </div>
          <div class="card-footer text-center">
            <a href="https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20comprar%20${encodeURIComponent(p.Producto)}" 
              target="_blank" class="btn btn-success mb-2">Comprar por WhatsApp</a>
            <a href="mailto:info@dndinformatica.com?subject=Pedido%20${encodeURIComponent(p.Producto)}" 
              class="btn btn-outline-primary">Comprar por Email</a>
          </div>
        </div>
      `;
      productosGrilla.appendChild(producto);
    });
  });
