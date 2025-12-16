document.addEventListener("DOMContentLoaded", () => {

  const cajas = document.querySelectorAll('.izquierda, .derecha');

  console.log("Cajas detectadas:", cajas.length);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        // Cuando aparece en pantalla → se desvanece
        entry.target.classList.add('oculto');
      } else {
        // Cuando NO está en pantalla → vuelve visible
        entry.target.classList.remove('oculto');
      }

    });
  }, {
    threshold: 0.3
  });

  cajas.forEach(caja => observer.observe(caja));
});

console.log("JS conectado");
