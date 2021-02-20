
// VARIABLES
const listaCursos = document.querySelector('.articulo');

// LISTENERS
initAPP();

document.addEventListener('load' , initAPP)

function initAPP(){

    listaCursos.addEventListener('click',obtenerCurso)
}

// FUNCIONES
function obtenerCurso(e){

    if(e.target.classList.contains('boton')){
        const curso = e.target.parentElement
        extraerDatos(curso);
    }
    
}

function extraerDatos(curso){
    // console.log(curso);

    const cursoElegido = {
        nombre : curso.querySelector('h2').textContent,
        precio : curso.querySelector('.precio').textContent,
    }

    // console.log(cursoElegido);

    pintarCurso(cursoElegido);
}

function pintarCurso(curso){
    
    let cursosComprados = document.createElement('div');
    let nombre = document.createElement('p');
    let precio = document.createElement('p');

    nombre = curso.nombre;
    precio = curso.precio;

    cursosComprados.innerHTML = `
    
    <div>
    ${nombre} - ${precio}
    </div>
    `

    listaCursos.appendChild(cursosComprados);
}


const button = document.querySelector('#button');
const menu = document.querySelector('#menu');

button.addEventListener('click' , (e) =>{
    e.preventDefault();
    menu.classList.toggle('active')
})






