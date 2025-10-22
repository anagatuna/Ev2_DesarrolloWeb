// Espera a que el contenido del HTML este cargado
document.addEventListener("DOMContentLoaded", () => {

    const loaderContainer = document.getElementById('loader-container');
    const pageContent = document.getElementById('page-content');
    const reloadBtn = document.getElementById('reload-btn');

    function simulatePageLoad() {
        console.log("Iniciando simulación de carga...");

        // Oculta el contenido y muestra el loader
        loaderContainer.style.display = 'flex';
        pageContent.style.display = 'none';

        setTimeout(() => {
            console.log("¡Carga completada!");

            // Oculta el loader
            loaderContainer.style.display = 'none';
        
            // Muestra el contenido como 'block', no 'flex'.
            pageContent.style.display = 'block'; 

        }, 3000);
    }

    reloadBtn.addEventListener('click', simulatePageLoad);
    simulatePageLoad();

});