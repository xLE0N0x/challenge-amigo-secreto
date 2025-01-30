// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Arreglo en el cual se almacenan los nombres
let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombreAmigo = amigo;

    if (nombreAmigo.value.trim().length == 0) { // Comprueba que input 'amigo' NO se encuentra vacio
        alert('Por favor, inserte un nombre.');
    } else {
        if (amigos.includes(nombreAmigo.value)) { // Comproeba que 'nombreAmigo' NO se encuentre en la lista
            alert('Este nombre ya se encuentra en la lista, por favor ingrese un nombre nuevo')
        } else {
            agregaAmigoLista(nombreAmigo.value, amigos); // Agrega 'nombreAmigo' a arreglo 'amigos'
            modificaElementoID(nombreAmigo, ''); // Limpia Imput 'amigo'
            creaListaAmigos(listaAmigos, amigos); // Crea un listados con todos los nombres contenidos en el arra 'amigos'
        }
    }
}

function sortearAmigo() {
    if (amigos.length < 2) { // Comprueba que array 'amigos' tenga almenos dos nombres para sortear
        alert('Para sortear al amigo secreto se necesitan al menos dos nombres.')
    } else {
        modificaElementoID(listaAmigos, ''); // Limpia lista 'listaAmigos'
        modificaElementoID(resultado, `El amigo secreto sorteado es: ${generaSorteo(amigos)}`); // Publica nombre sorteado en 'resultado'
        
    }
}

function agregaAmigoLista(nombre, array) {
    array.push(nombre);
}

function modificaElementoID(elementoID, texto) {
    elementoID.value = texto;
    elementoID.innerHTML = texto;
}

function creaListaAmigos(elementoID, array) {
    modificaElementoID(elementoID, '');
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        elementoID.appendChild(li);
    }
}

function generaSorteo(array) {
    nombreSorteado = Math.floor(Math.random() * array.length);
    return array[nombreSorteado];
}
