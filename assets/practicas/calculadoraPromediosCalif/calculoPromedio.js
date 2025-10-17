const inputCantidad = document.getElementById("txtCantidadCalificaciones");
const btnGenerar = document.getElementById("btnGenerar");
const contenedor = document.getElementById("contenedorCalificaciones");
const btnCalcular = document.getElementById("btnCalcular");
const spanResultado = document.getElementById("resultado");

function generarCampos() {
    let cantidad = parseInt(inputCantidad.value);

    contenedor.innerHTML="";

    for (let i=0; i < cantidad; i++){
        const nuevoCampo = document.createElement("input");

        document.createElement("input");
        nuevoCampo.type="number";
        nuevoCampo.className="calificacion";
        nuevoCampo.placeholder="Calificación #" + (i + 1);
        contenedor.appendChild(nuevoCampo)
    }

    btnCalcular.style.display = "block";

    console.log("¡Función para generar campos activada!");
}

function calcularPromedio() {
    const listaDeCampos = document.querySelectorAll(".calificacion");

    let sumaTotal = 0;

    for (const campo of listaDeCampos){
        sumaTotal += parseFloat(campo.value);
    }
    const promedio = sumaTotal / listaDeCampos.length;
    
    const spanResultado = document.getElementById("resultado");
    spanResultado.textContent = promedio.toFixed(2);

    console.log("¡Función para calcular activada!");
}