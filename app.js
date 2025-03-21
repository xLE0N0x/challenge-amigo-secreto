// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Arreglo en el cual se almacenan los nombres
let amigosSorteados = []; // Arreglo en el cual se almacenan los nombres ya sorteados

let listaAmigos = document.getElementById('listaAmigos'); // Lista de nombres de amigos agregados mediante input 'amigo'
let listaSorteados = document.getElementById('listaSorteados'); // Lista de nombres de amigos una vez han sido sorteados
let amigo = document.getElementById('amigo'); // Input donde se digitan los nombres de amigos
let resultado = document.getElementById('resultado'); // Lista donde se publica el nombre del amigo sorteado

amigo.addEventListener('keyup', event => { // Permite agregar nombre al presionar 'Enter'
    if (event.key === 'Enter') {
        agregarAmigo();
    }
})

function agregarAmigo() {
    let nombreAmigo = amigo;

    if (nombreAmigo.value.trim().length === 0) { // Comprueba que input 'amigo' NO se encuentra vacio
        alert('Por favor, inserte un nombre.');
    } else {
        if (amigos.includes(nombreAmigo.value)) { // Comprueba que 'nombreAmigo' NO se encuentre en array 'amigos' evitando nombres duplicados
            alert('Este nombre ya se encuentra en la lista, por favor ingrese un nombre distinto');
        } else {
            agregaAmigoLista(nombreAmigo.value, amigos); // Agrega 'nombreAmigo' a arreglo 'amigos'
            modificaElementoID(nombreAmigo, ''); // Limpia Imput 'amigo'
            creaListaAmigos(listaAmigos, amigos); // Crea un listados con todos los nombres contenidos en el arra 'amigos'
            amigo.focus();
            cambiaEstadoBoton('btnSorteo', 'encender');
            cambiaEstadoBoton('btnReinicio', 'encender');
        }
    }
}

function sortearAmigo() {
    cambiaEstadoBoton('btnAdd', 'apagar');
    modificaElementoID(listaAmigos, ''); // Limpia lista 'listaAmigos'
    modificaElementoID(resultado, `Tu amigo secreto sorteado es: ${generaSorteo(amigos)}`); // Publica nombre sorteado en 'resultado'
}

function reiniciar() { // Función limpia: input 'amigo', lista 'listaAmigos', lista 'resultado', lista 'listaSorteados'
    modificaElementoID(amigo, '');
    modificaElementoID(listaAmigos, '');
    modificaElementoID(resultado, '');
    modificaElementoID(listaSorteados, '');
    amigo.focus();
    limpiarArreglo(amigos);
    limpiarArreglo(amigosSorteados);
    cambiaEstadoBoton('btnAdd', 'encender')
    cambiaEstadoBoton('btnSorteo', 'apagar');
    cambiaEstadoBoton('btnReinicio', 'apagar');
}

function agregaAmigoLista(nombre, array) { // Funcion que agrega nombre indicado a array indicado
    array.push(nombre);
}

function limpiarArreglo(arreglo) {
    arreglo.splice(0, arreglo.length);
}

function modificaElementoID(elementoID, texto) {
    elementoID.value = texto;
    elementoID.innerHTML = texto;
}

function creaListaAmigos(elementoID, array) { // Función que agrega a la lista seleccionada los nombre de amigos del array indicado
    modificaElementoID(elementoID, ''); // Limpia la lista para evitar duplicados

    if (elementoID == listaSorteados) {
        let titulo = document.createElement('h2');

        listaSorteados.appendChild(titulo);
        titulo.textContent = "Amigos sorteados";
    }

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        elementoID.appendChild(li);
    }
}

function generaSorteo(array) {
    let nombreSorteado = Math.floor(Math.random() * array.length); // Generea número aleatorio * por la cantidad total de nombres de amigos

    if (amigosSorteados.includes(array[nombreSorteado])) // Condición: si 'nombreSorteado' ya se encuentra en la lista 'amigosSorteados'
        return generaSorteo(array); // Vuelve a generar número aleatorio
    else {
        agregaAmigoLista(array[nombreSorteado], amigosSorteados); // Agrega 'nombreSorteado' a arreglo 'amigosSorteados'
        creaListaAmigos(listaSorteados, amigosSorteados); // Agrega a la lista 'listaSorteados' nombres del array 'amigosSorteados'
        if (amigosSorteados.length === array.length) { // Comprueba que la cantidad de nombre en ambos arrays es igual
            cambiaEstadoBoton('btnSorteo', 'apagar')
        }
        return array[nombreSorteado];
    }
}

function cambiaEstadoBoton(botonID, estado) {
    let estadoBoton = estado;

    switch (estadoBoton) {
        case 'encender':
            document.getElementById(botonID).removeAttribute('disabled');
            break;
        case 'apagar':
            document.getElementById(botonID).setAttribute('disabled', true);
            break;
    }
}

reiniciar();