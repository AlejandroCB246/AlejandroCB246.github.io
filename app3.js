let textoLineado=document.getElementById("textoLineado");
let textoResultado=document.getElementById("textoResultado");
let textoJugador=document.getElementById("textoJugador");

// Lista de palabras
let lista_palabras=["Elefante", "Armario", "Celular", "Avion", "Agua"];

// Texto lineado
for (let i = 0; i < 5; i++) {
    textoLineado.innerText="a"
    
}

while (condition) {
    
}


if (textoJugador.innerText=textoComputadora.innerText) {
    textoResultado.innerText="Palabra completada"
} else {
    
}

let randomizador=Math.floor(Math.random()*lista_palabras.length);

textoComputadora.innerText=lista_palabras[randomizador];
