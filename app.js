// Constantes para el input y la lista de amigos
let inputAmigo = document.getElementById("amigo");
let ListaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");

// Funcion para agregar amigo a la lista
function agregarAmigo() {
    if (inputAmigo.value === "") {
        alert("Debes ingresar un nombre");
    } else {
    alert("Amigo agregado");
        ListaAmigos.push(inputAmigo.value);
ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    }
      limpiarCaja();
};


//Funcion para limpiar o vaciar el input despues de agregar un amigo
function limpiarCaja() {
    inputAmigo.value = "";
}



//Funcion para sortear amigo secreto
function sortearAmigo() {
    let amigoSecreto = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
    document.getElementById("resultado")
    resultado.innerHTML = ("Tu amigo secreto es: " + amigoSecreto);
}

