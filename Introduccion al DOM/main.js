console.log('Intro a Dom');
//getElementById y window.unload
    //getElementById lo uso para acceder a mi html atraves de un id ( desde el html, en vez de class uso id)
    //Le asigno una constante(la que asigno antes en html, en mi ejemplo le asigne un id al p)
    //Para acceder al texto tengo que usar 'inner', mira el ejemplo
    //Los dos console.log son igual de validas

    const parrafo = document.getElementById('text')
    console.log(parrafo.innerHTML);
    console.log(parrafo.innerText);

//Window.onload se debe usar si has enlazado tu js arriba, en head. Lo que hace el window.onload es esperar a que tu codigo de web sea completo y luego se ejecuta
//Para prevenir posibles errores de codigo puedes utilizar tanto enlazar debajo de la etiqueta de cierre body, como tmb. usar el window.onload

window.onload = () => {
    const parrafo = document.getElementById('text')
    console.log(parrafo.innerHTML);
}