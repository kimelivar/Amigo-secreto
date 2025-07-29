// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else{
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = ""; 

    mostrarLista(); 
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue al menos un amigo para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let seleccionado = amigos[indice];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${seleccionado} es tu amigo secreto </li>`;
}

