let votacion = true;
let votos = { 
    Hiram: 0, 
    Angel: 0, 
    Omar: 0 
};
let nulos = 0;
const mapa = { 
    1: "Hiram", 
    2: "Angel", 
    3: "Omar" 
};
let empate = false, solo = []; // modo desempate y candidatos empatados

function ConteoVotos() {
  if (!votacion) return alert("La votación ya terminó.");
  const v = parseInt(document.getElementById("txtVoto").value, 10);
  if (isNaN(v)) return alert("Ingresa 1, 2, 3 o 0.");
  if (v === 0) return fin();

  if (!(v in mapa)) { //si no corresponde a un candidato
    nulos++; // se cuenta como voto nulo
    return alert("Voto inválido (usa 1, 2 o 3).");
  }
  const cand = mapa[v]; //nombre del candidato elegido
  
  if (empate && !solo.includes(cand)) { //si empate es true Y se vota por un candidato que no empató, se rechaza el voto
    return alert("Desempate: vota entre " + solo.join(" y "));
  }
  votos[cand]++; //se agrega el voto al candidato elegido
  alert("Voto para " + cand);
  
  if (empate) { // si estamos en desempate 
    const top = ganadorYEmpate(); //examina el ganador
    if (top.empate) {
      return; // El desempate continúa, no terminamos la votación aún
    } else {
      // Si no hay empate, finalizamos la votación y mostramos los resultados
      votacion = false; 
      return mostrarResultados();
    }
  }
}

function fin() {
  const top = ganadorYEmpate(); //examina el ganador o empate
  if (top.total === 0) return alert("Sin votos.");
  if (top.empate) { // si en la lista de ganadores hay dos candidatos, empate es true
    solo = top.lista; //agrega 'solo' los candidatos empatados
    return alert("Empate entre " + solo.join(" y ") + ". Ingresa un voto extra para desempatar.");
  } else {
    // Si no hay empate, terminamos la votación y mostramos los resultados
    votacion = false; 
    mostrarResultados();
  }
}

function mostrarResultados() {
  const { total, lista, max } = ganadorYEmpate();
  let msj = `Resultados:\n  Hiram: ${votos.Hiram}\n  Angel: ${votos.Angel}\n  Omar: ${votos.Omar}\n  Total: ${total}\n Nulos: ${nulos}\n \n`;
  if (lista.length === 1) {
    const g = lista[0], porcentaje = Math.round((votos[g] / total) * 100); //el primer elemento del array
    msj += `Ganador: ${g} con ${votos[g]} voto(s)\nAceptación: ${porcentaje}%`;
  } else {
    msj += `Empate entre: ${lista.join(" y ")}`;
  }
  alert(msj); // Se utiliza msj para mostrar los resultados
}

function ganadorYEmpate() {
  const max = Math.max(votos.Hiram, votos.Angel, votos.Omar); //conteo de votos
  const lista = Object.keys(votos).filter(k => votos[k] === max && max > 0); // itera entre cada candidato, agrega el que tiene la mayor cantidad de votos 
  const total = votos.Hiram + votos.Angel + votos.Omar; //total de votos
  return { max, lista, total, empate: lista.length > 1 }; //si hay mas de un candidato, significa que hay un empate
}

function Reinicio(){ //recarga la pagina
  location.reload();
}