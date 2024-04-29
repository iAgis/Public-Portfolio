document.getElementById("contenedor").addEventListener("click", function () {
  // Obtiene el número actual de gatos en el contenedor
  const numGatos = document.querySelectorAll(".gato").length;

  // Comprueba si el número de gatos es menor a 50
  if (numGatos < 50) {
    let nuevoGato = document.createElement("div");
    nuevoGato.className = "gato animarGato";
    nuevoGato.style.left = "0px"; // Posición inicial para el nuevo gato
    this.appendChild(nuevoGato);
  }
});

function moverGato() {
  const contenedor = document.getElementById("contenedor");
  const contenedorWidth = contenedor.offsetWidth;
  const gatos = document.querySelectorAll(".gato");

  gatos.forEach((gato) => {
    let currentPosition = parseInt(gato.style.left, 10);
    let gatoWidth = gato.offsetWidth;

    // Calcula la nueva posición
    let newPosition = currentPosition + 1;

    // Verifica si el gato ha cruzado el borde derecho del contenedor
    if (newPosition > contenedorWidth) {
      gato.style.left = `-${gatoWidth}px`; // Reinicia la posición al inicio, justo fuera del lado izquierdo
    } else {
      gato.style.left = `${newPosition}px`; // Mueve cada gato 10px a la derecha
    }
  });
}

setInterval(moverGato, 20); // Mueve el gato cada 50 milisegundos
