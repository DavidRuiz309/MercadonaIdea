// Ruta base de tus imágenes
const rutaBase = './img/productos/';
const totalImagenes = 11;

const nombresProductos = [
    "Hamburguesa", "Huevos rotos con jamón", "Patatas fritas con ketchup",
    "Sopa de cocido", "Paella valenciana", "Nachos con queso y guacamole", "Quesadillas",
    "Espinacas con queso", "Pinchos morunos", "Ternera a la brasa", "Arroz a la cubana"
];

const imagenesDisponibles = Array.from({ length: totalImagenes }, (_, i) => i + 1);

  function obtener4Aleatorias(arr) {
    const copia = [...arr];
    const seleccionadas = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * copia.length);
      seleccionadas.push(copia.splice(index, 1)[0]);
    }
    return seleccionadas;
  }

  window.onload = function () {
    const seleccionadas = obtener4Aleatorias(imagenesDisponibles);
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach((card, i) => {
      const numeroImagen = seleccionadas[i];
      const img = card.querySelector('.imagen');
      const title = card.querySelector('.title-product');

      img.src = `${rutaBase}${numeroImagen}.jpg`;
      img.alt = nombresProductos[numeroImagen - 1];
      title.textContent = nombresProductos[numeroImagen - 1];
    });

    document.querySelector('.more').addEventListener('click', function() {
        window.location.href = 'listado.html';
    });
};