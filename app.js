// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = ['Leo', 'Nana', 'Domi', 'Diego', 'Nico', 'Java', 'Cris', 'Belen'];



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
/*
Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/


function creaListaAmigos(lista) {
    elemetoHTML = document.getElementById('listaAmigos');

    for (let i = 0; i <= (lista.length - 1); i++) {
        elemetoHTML.innerHTML = lista[i];

    }
}



// console.log(`<li>${amigos[i]}</li>`);




