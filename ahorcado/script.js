let palabrita;
let cant_errores = 0;  
let cant_aciertos = 0;  

let palabras = []; 
console.log(palabras)
 
const nuevo = document.getElementById("nuevo");
const imagen = document.getElementById( "img-ahorcado" );
const btn_letras = document.querySelectorAll("#letras button");
 

nuevo.addEventListener("click", iniciar);

 

function iniciar(Event){

 palabras = ["JAVASCRIPT", 
"JOSNNY",
"BIBLIA", 
"CIELO",
"DIOS",
"PIEDRA"];

    
    
    imagen.src = 'img/img0.png';
    nuevo.disabled = true;
    cant_errores = 0;  
    cant_aciertos = 0;
    const parrafo = document.getElementById("span_vacio");
    parrafo.innerHTML = "";


    let palabra_azar = palabras.length; //valor alto, 6 lugares en el array
    const palabras_aleatoria = obtener_random(0, palabra_azar)
    console.log(palabras_aleatoria)

     palabrita = palabras[palabras_aleatoria];
     console.log(palabrita)
    const cant_letras = palabrita.length;

    for(let i = 0; i < btn_letras.length; i++  ){
        btn_letras[i].disabled = false;
    }

    for(let i = 0; i < cant_letras; i++){
        const span = document.createElement("span");
        parrafo.appendChild(span);

    }
     
     
    

};


 


for(let i = 0; i < btn_letras.length; i++  ){
    btn_letras[i].addEventListener("click", click_letras);
}


function click_letras(event){
    const spans = document.querySelectorAll("#span_vacio span")
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase();
    const palabra = palabrita.toUpperCase();

    let acertaste = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acertaste = true;
            
        }
    }

    if(acertaste == false){
        cant_errores++;
            const source = `img/img${cant_errores}.png`;
            const imagen = document.getElementById("img-ahorcado");
            imagen.src = source;

    }

    if(cant_errores == 7){
       document.getElementById("resultado").innerHTML = "sorry suerte para la proxima" + " la palabra era: " + palabrita;
        game_over();
    }else if(cant_aciertos == palabrita.length){
         document.getElementById("resultado").innerHTML = "Ganaste";
         game_over();
    }
 console.log(letra+palabra+acertaste)
     } 

     function game_over(){
        for(let i = 0; i < btn_letras.length; i++  ){
            btn_letras[i].disabled = true;
        }
       nuevo.disabled = false; 
     }
 
    game_over();

     
 

    
    

 





 