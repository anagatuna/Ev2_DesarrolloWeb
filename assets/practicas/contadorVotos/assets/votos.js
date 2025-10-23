let votacion = true;
let votos = { 
    hiram: 0, 
    angel: 0, 
    omar: 0 
};
let nulos = 0;
const mapa = { 
    1: "hiram", 
    2: "angel", 
    3: "omar" 
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
  let msj = `Resultados:\n  hiram: ${votos.hiram}\n  angel: ${votos.angel}\n  omar: ${votos.omar}\n  Total: ${total}\n nulos: ${nulos}\n \n`;
  if (lista.length === 1) {
    const g = lista[0], porcentaje = Math.round((votos[g] / total) * 100); //el primer elemento del array
    msj += `Ganador: ${g} con ${votos[g]} voto(s)\nAceptación: ${porcentaje}%`;
  } else {
    msj += `Empate entre: ${lista.join(" y ")}`;
  }
  alert(msj); // Se utiliza msj para mostrar los resultados
}

function ganadorYEmpate() {
  const max = Math.max(votos.hiram, votos.angel, votos.omar); //conteo de votos
  const lista = Object.keys(votos).filter(k => votos[k] === max && max > 0); // itera entre cada candidato, agrega el que tiene la mayor cantidad de votos 
  const total = votos.hiram + votos.angel + votos.omar; //total de votos
  return { max, lista, total, empate: lista.length > 1 }; //si hay mas de un candidato, significa que hay un empate
}
