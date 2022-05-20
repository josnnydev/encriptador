/*
a - ai
e - enter 
i - imes
o - ober 
u - ufat 
*/
 
 function encriptar(){ 
     var texto = document.getElementById("id1").value.toLowerCase();

     var textoencriptado = texto.replace(/e/img, "enter");
     var textoencriptado = textoencriptado.replace(/o/img, "ober");
     var textoencriptado = textoencriptado.replace(/i/img, "imes");
     var textoencriptado = textoencriptado.replace(/a/img, "ai");
     var textoencriptado = textoencriptado.replace(/u/img, "ufat");


     document.getElementById("nino").style.display = "none";
     document.getElementById("text1").style.display = "none";
     document.getElementById("text2").innerHTML = textoencriptado;
     document.getElementById("copy").style.display = "show";
     document.getElementById("copy").style.display = "inherit"

      
 }


 function desencriptar(){ 
    var texto = document.getElementById("id1").value.toLowerCase();

    var textoencriptado = texto.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");


    document.getElementById("nino").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textoencriptado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"

     
}

function copiar(){
 var contenido = document.querySelector("#text2");
 contenido.select();
 document.execCommand("copy");
 alert("se copio");

}

 

 

 
 

 








 