// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arreglo amigos.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();  // Obtener el valor ingresado.
    //Validamos si el valor obtenido no es vacio.
    if (nombreAmigo === '') { 
        alert('Debe ingresar un nombre'); 
        return;
    }

    /* Mejora no solicitada, es verificar si el nombre ya está en la lista para 
    jugar bien al amigo secreto. En caso de haber 2 ana identificar cual ana. 
    */
   if (amigos.includes(nombreAmigo)) {
        alert('El nombre ya está repetido');
        return;
    }

    // Agregar nombre al array y mostrarlo en la lista.
    amigos.push(nombreAmigo);
    actualizarListaAmigos(); //Funcion lista de amigo.
    document.getElementById('amigo').value = ''; //dejar campo vacio.
}

//Funcion para lista de Amigos.
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpiar la lista antes de actualizar en caso de agregar o retirar de la lista.
    // Se crea for para crear la lista nuevamente con los campos.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');    // Crea un nuevo <li>.
        li.textContent = amigos[i];               // Asigna el nombre del amigo al <li>.
        listaAmigos.appendChild(li);              // Agrega el <li> a la lista.
    }
}

//Funcion para sortear amigo.
function sortearAmigo() {
    //Validar que tengamos amigos para sortear.
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }else{

        // Seleccionar un amigo aleatorio.
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        // Mostrar el amigo sorteado en el resultado.
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSorteado}</strong></p>`;

        // Segunda mejora no solicitada, eliminar el amigo sorteado de la lista para que no se repita.
        amigos = amigos.filter(amigo => amigo !== amigoSorteado);

        // Actualizar la lista de amigos pendiente a seleccionar.
        actualizarListaAmigos();

        // Ocultar la lista de amigos
        document.getElementById('listaAmigos').style.display = 'none';

    }
}
