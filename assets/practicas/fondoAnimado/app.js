// Espera a que el documento HTML esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Array para almacenar el estado (posición, velocidad) de cada elemento.
    const elements = [];
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    // Selecciona todos los 'div' que están dentro de '.pusheen-layer'.
    document.querySelectorAll('.pusheen-layer div').forEach(el => {

        // Para cada 'div', crea un objeto con propiedades aleatorias.
        elements.push({
            element: el, // Referencia al nodo del DOM
            y: Math.random() * screenHeight, // Posición 'y' inicial
            x: Math.random() * screenWidth,  // Posición 'x' inicial
            speed: 1 + Math.random() * 2,     // Velocidad de caída
            rotation: Math.random() * 360,    // Rotación inicial
            rotationSpeed: (Math.random() - 0.5) * 2 // Velocidad de rotación (pos/neg)
        });
    });

    // Define la función principal del bucle de animación.
    function animate() {

        // Itera sobre cada elemento en el array para actualizar su estado.
        elements.forEach(item => {

            // Actualiza la posición vertical y la rotación.
            item.y += item.speed;
            item.rotation += item.rotationSpeed;

            // Aplica los cambios al DOM usando 'transform' para mejor rendimiento.
            item.element.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg)`;

            // Comprueba si el elemento salió de la pantalla por la parte inferior.
            if (item.y > screenHeight + 100) { // +100px de búfer
                // Reinicia el elemento arriba (fuera de vista) y en una nueva posición 'x'.
                item.y = -100;
                item.x = Math.random() * screenWidth;
            }
        });

        // Solicita al navegador que vuelva a ejecutar 'animate' en el próximo frame.
        requestAnimationFrame(animate);
    }

    // Inicia el bucle de animación por primera vez.
    animate();
});