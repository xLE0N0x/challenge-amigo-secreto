// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let elementoHTML = document.getElementById('listaAmigos'); // Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

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
            creaListaAmigos(elementoHTML, amigos);
        }
    }
}

function creaListaAmigos(elemento, lista) {
    elemento.innerHTML = ''; // Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    for (let i = 0; i <= (lista.length - 1); i++) { // Iterar sobre el arreglo: Usa un bucle 'for' para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
        elemento.innerHTML += `<li>${lista[i]}</li>`; // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    }
}

// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

// Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

// Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
