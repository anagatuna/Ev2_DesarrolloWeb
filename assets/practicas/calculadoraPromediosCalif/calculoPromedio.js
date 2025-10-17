const inputCantidad = document.getElementById("txtCantidadCalificaciones");
const btnGenerar = document.getElementById("btnGenerar");
const contenedor = document.getElementById("contenedorCalificaciones");
const btnCalcular = document.getElementById("btnCalcular");
const spanResultado = document.getElementById("resultado");
btnCalcular.style.display = 'none';
pResultado.style.display = 'none';

function generarCampos() {
    let cantidad = parseInt(inputCantidad.value);

    contenedor.innerHTML="";

    if (cantidad > 0) {

    for (let i=0; i < cantidad; i++){
        const nuevoCampo = document.createElement("input");

        nuevoCampo.type="number";
        nuevoCampo.className="calificacion";
        nuevoCampo.placeholder="Calificación #" + (i + 1);
        contenedor.appendChild(nuevoCampo)
    }

    if (cantidad > 0) {
        btnCalcular.style.display = "block";
    } else {
        btnCalcular.style.display = "none";
    }

    btnCalcular.style.display = "block";

    console.log("¡Función para generar campos activada!");
    } else{
        alert("No se permiten valores menores a 1. Por favor, ingresa un dato válido.")
    }
}

function calcularPromedio() {
    const listaDeCampos = document.querySelectorAll(".calificacion");

    for (const campo of listaDeCampos) {
        if (campo.value.trim() === "") {
            alert("Por favor, llena todos los campos de calificación.");

            return;
        }
    }

    let sumaTotal = 0;

    for (const campo of listaDeCampos){
        sumaTotal += parseFloat(campo.value) || 0;
    }
    const promedio = sumaTotal / listaDeCampos.length;
    
    const pResultado = document.getElementById("pResultado");
    const spanResultado = document.getElementById("resultado");
    pResultado.style.display = "block";
    spanResultado.textContent = promedio.toFixed(2);


    console.log("¡Función para calcular activada!");
}