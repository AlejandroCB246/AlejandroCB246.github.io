// player/computer/result text
let textoResultado=document.getElementById("textoResultado");
let textoComputadora=document.getElementById("textoComputadora");
let textoJugador=document.getElementById("textoJugador");
// btns
let btnPiedra=document.getElementById("btnPiedra");
let btnPapel=document.getElementById("btnPapel");
let btnTijeras=document.getElementById("btnTijeras");


function resultadoPiedra() {
    textoJugador.innerText="Piedra"
    let randomizador=Math.floor(Math.random()*3)+1;
    
    switch (textoJugador.innerText) {
        case "Piedra":
            if (randomizador===1) {
                textoComputadora.innerText="Piedra"
            }
            else{
                if (randomizador===2) {
                    textoComputadora.innerText="Papel"
                }
                else{
                    if (randomizador===3) {
                        textoComputadora.innerText="Tijeras"
                    }
                }
            }
            break;
        default:
            break;
    }

    if (textoJugador.innerText=="Piedra" && textoComputadora.innerText=="Papel") {
        textoResultado.innerText="Match Lost"
    } else {
        if (textoJugador.innerText=="Piedra" && textoComputadora.innerText=="Tijeras") {
            textoResultado.innerText="Partida ganada"
        }
        else{
            if (textoJugador.innerText=="Piedra" && textoComputadora.innerText=="Piedra") {
                textoResultado.innerText="Empate"
            }
        }
    }
}

function resultadoPapel() {
    textoJugador.innerText="Papel"
    let randomizador=Math.floor(Math.random()*3)+1;

    switch (textoJugador.innerText) {
        case "Papel":
            if (randomizador===1) {
                textoComputadora.innerText="Piedra"
            }
            else{
                if (randomizador===2) {
                    textoComputadora.innerText="Papel"
                }
                else{
                    if (randomizador===3) {
                        textoComputadora.innerText="Tijeras"
                    }
                }
            }
            break;
        default:
            break;
    }
    
    if (textoJugador.innerText=="Papel" && textoComputadora.innerText=="Tijeras") {
        textoResultado.innerText="Match Lost"
    } else {
        if (textoJugador.innerText=="Papel" && textoComputadora.innerText=="Piedra") {
            textoResultado.innerText="Partida ganada"
        }
        else{
            if (textoJugador.innerText=="Papel" && textoComputadora.innerText=="Papel") {
                textoResultado.innerText="Empate"
            }
        }
    }
}

function resultadoTijeras() {
    textoJugador.innerText="Tijeras"
    let randomizador=Math.floor(Math.random()*3)+1;
    
    switch (textoJugador.innerText) {
        case "Tijeras":
            if (randomizador===1) {
                textoComputadora.innerText="Piedra"
            }
            else{
                if (randomizador===2) {
                    textoComputadora.innerText="Papel"
                }
                else{
                    if (randomizador===3) {
                        textoComputadora.innerText="Tijeras"
                    }
                }
            }
            break;
        default:
            break;
    }

    if (textoJugador.innerText=="Tijeras" && textoComputadora.innerText=="Piedra") {
        textoResultado.innerText="Match Lost"
    } else {
        if (textoJugador.innerText=="Tijeras" && textoComputadora.innerText=="Papel") {
            textoResultado.innerText="Partida ganada"
        }
        else{
            if (textoJugador.innerText=="Tijeras" && textoComputadora.innerText=="Tijeras") {
                textoResultado.innerText="Empate"
            }
        }
    }
}

btnPiedra.addEventListener("click", resultadoPiedra);
btnPapel.addEventListener("click", resultadoPapel);
btnTijeras.addEventListener("click", resultadoTijeras);

// Gemas giratorias

let gema_giratoria=document.getElementById("gema_giratoria");
let gema_giratoria1=document.getElementById("gema_giratoria1");
