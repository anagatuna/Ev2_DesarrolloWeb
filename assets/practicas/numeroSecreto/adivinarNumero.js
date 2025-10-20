
const inputNumero = document.getElementById("txtNumeroIngresado");
const btnRevisar = document.getElementById("revisarNumero");
const btnGenerar = document.getElementById("numeroAleatorio");

let numeroAleatorio;
let intentosRestantes;

inputNumero.disabled = true;
btnRevisar.disabled = true;

function generarNumeroAleatorio() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    intentosRestantes = 5;

    inputNumero.disabled = false;
    btnRevisar.disabled = false;
    
    btnGenerar.disabled = true;

    alert("¡Listo! Ya he pensado un número del 1 al 100. Tienes 5 intentos para adivinar.");
    
    console.log("Número secreto para pruebas:", numeroAleatorio);
}


function revisarNumero() {
    const numeroIngresado = parseInt(inputNumero.value);

    if (numeroIngresado === numeroAleatorio) {
        alert("¡Felicidades, lo lograste!");
        finalizarJuego();
    } else if (intentosRestantes > 0) {
        if (isNaN(numeroIngresado)) {
            alert('Ingrese un valor.')
        } else if (numeroIngresado < numeroAleatorio) {
            alert(`El número secreto es MAYOR al que ingresaste. Te quedan ${intentosRestantes} intento(s).`);
        intentosRestantes--;
        } else {
            alert(`El número secreto es MENOR al que ingresaste. Te quedan ${intentosRestantes} intento(s).`);
        intentosRestantes--;
        }

        } else {
            alert(`Suerte para la próxima, el número secreto era ${numeroAleatorio}.`);
            finalizarJuego();
    }

    inputNumero.value = "";
}

function finalizarJuego() {
    inputNumero.disabled = true;
    btnRevisar.disabled = true; 
    btnGenerar.disabled = false; 
}