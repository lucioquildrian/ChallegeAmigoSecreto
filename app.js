// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los nombres
let amigos = [];

// Agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtener el valor del input
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") { // Validar que no esté vacío
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el input
    mostrarLista();
}

// Mostrar la lista en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtener el elemento ul
    lista.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => { // Recorrer el array y crear un li por cada nombre
        const li = document.createElement("li"); // Crear un nuevo elemento li
        li.textContent = amigo; // Asignar el nombre al li
        lista.appendChild(li); // Agregar el li a la lista
    });
}

// Sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) { // Validar que la lista no esté vacía
        alert("La lista está vacía. Agrega al menos un nombre."); // Mostrar alerta
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Obtener un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre correspondiente

    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`; 
}
// Limpiar la lista
function limpiarLista() {
    amigos = []; // Vaciar el array
    mostrarLista(); // Actualizar la lista en pantalla
    document.getElementById("resultado").textContent = ""; // Limpiar el resultado
}
document.getElementById("agregarBtn").addEventListener("click", agregarAmigo); // Agregar evento al botón
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo); // Agregar evento al botón
document.getElementById("limpiarBtn").addEventListener("click", limpiarLista); // Agregar evento al botón



