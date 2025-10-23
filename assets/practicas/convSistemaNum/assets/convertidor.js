function Conversion() {
  let binario = "";
  let num = parseInt(document.getElementById("txtNumero").value);
  let resultado = document.getElementById("txtResultado");

  //Validacion

    if (num === 0){
        resultado.value = 0;
        return;
    }

  //Conversion
    while (num > 0) {
        let residuo = num % 2; // último bit, 0 o 1
        binario = residuo + binario; // lo agrega la izquierda
        num = Math.floor(num / 2); // divide el número por 2 (entero)
    }
    while (binario.length < 4) {
        binario = "0" + binario;
    }

  //Resultado
  document.getElementById("txtResultado").value = binario;
}
