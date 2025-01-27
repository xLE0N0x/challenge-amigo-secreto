// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let elementoHTML = document.getElementById('listaAmigos'); // Obtener el elemento de la lista

function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value;
    if (nombreAmigo === "") { // Comprueba si el imput se encuentra vacio
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nombreAmigo)) { // Comprueba si 'nombreAmigo' ya se encuentra en 'Amigos'
            alert('Este nombre ya se encuentra en la lista de amigos. Inténtalo con un nuevo nombre.')
        } else {
            amigos.push(nombreAmigo); // Realiza push para agregar 'nombreAmigo' a 'Amigos'
            document.querySelector('#amigo').value = ''; // Limpia input 'amigo'
            creaListaAmigos(amigos);
        }
    }
}

function creaListaAmigos(lista) {
    elementoHTML.innerHTML = ''; // Limpiar la lista existente
    for (let i = 0; i <= (lista.length - 1); i++) { // Iterar sobre el arreglo: Usa un bucle 'for'
        elementoHTML.innerHTML += `<li>${lista[i]}</li>`; // Agregar elementos a la lista: Para cada amigo
    }
}

function sortearAmigo() {
    if (amigos.length <= 0) { // Validar que haya amigos disponibles
        alert('Para sortear tu amigo secreto, primero debes ingresar algunos nombres.');
    } else {
        elementoHTML.innerHTML = generaNumero(); // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML
    }
}

function generaNumero() {
    do {
        numeroSorteado = Math.floor(Math.random() * 10) + 1; // Generar un índice aleatorio: Usar Math.random() y Math.floor()
    } while (numeroSorteado >= amigos.length);
    return amigos[numeroSorteado]; // Obtener el nombre sorteado
}
