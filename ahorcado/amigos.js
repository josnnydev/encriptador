   //seccion crear palabra
const guardar = document.getElementById("guardar");
const form = document.getElementById("form");
const crear = document.getElementById("crear");
const title = document.getElementById("title2");
const ocultar = document.getElementById("ocultar");
 
const show = document.getElementById("crear-palabrar");

 crear.addEventListener("click", crea);
 function crea(event){
     
    form.style.display = "block";
    title.style.display = "block";
    ocultar.style.display = "none";

    const cabecera = document.querySelector(".cabecera");

    cabecera.innerHTML = "Crea tus palabras";
     
     
 }

 

guardar.addEventListener("click", empezar);


function empezar(event){
   palabras = [];
    
    event.preventDefault();
    let palabra_introducida = form.vacio.value;
    palabras.push(palabra_introducida);

    
    form.reset();
    console.log(palabra_introducida);
    console.log(palabras)

    
     

}


 