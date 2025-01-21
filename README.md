<h1>Challenge amigo secreto</h1>

## Estado del Proyecto: En construcción

- Se crea un arreglo de amigos:
  ```javascript
  let amigos = [];
- Se crea función agregarAmigo():
   ```javascript
  function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();  // Obtener el valor ingresado.
    //Validamos si el valor obtenido no es vacio.
    if (nombreAmigo === '') { 
        alert('Debe ingresar un nombre'); 
        return;
    }
    // Agregar nombre al array y mostrarlo en la lista.
    amigos.push(nombreAmigo);
    actualizarListaAmigos(); //Funcion lista de amigo.
    document.getElementById('amigo').value = ''; //dejar campo vacio.
  }

- Se agrega validador NO solicitado para el challenge para mejorar la interacción con el usuario.
  ```javascript
   if (amigos.includes(nombreAmigo)) {
        alert('El nombre ya está repetido');
        return;
    }
- Se actualiza función agregarAmigo():
  ```javascript
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
- Se crea función actualizarListaAmigos();
  ```javascript
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

- Se crea función sortearAmigo();
  ```javascript
  function sortearAmigo() {
    // Seleccionar un amigo aleatorio.
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el amigo sorteado en el resultado.
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
  
        // Ocultar la lista de amigos
        document.getElementById('listaAmigos').style.display = 'none';  
    }

- Se actualiza función sortearAmigo() NO solicitada pero con la intención de mejorar el juego;
  ```javascript
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
        // Ocultar la lista de amigos (Podria no ocultarse para ver los amigos que aun no tienen amigo secreto asignado) 
        document.getElementById('listaAmigos').style.display = 'none';
    }
  }

##  Estado del Proyecto: Enviado a revisión.

