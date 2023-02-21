
let menu_infantil_activo=document.getElementById("menu_infantil_activo");
let menu_adultos_activo=document.getElementById("menu_adultos_activo");
let menu_grupos_activo=document.getElementById("menu_grupos_activo");


// Intento de buscar clases en el css pero decidí agregar la clase en el html
// function activacion_menu() {
//     window.addEventListener("load", ()=>{
//         let menu_infantil=document.querySelector("menu_infantil.active");
        
//     });
// }

let menu_infantil=document.getElementById("menu_infantil");
let menu_adultos=document.getElementById("menu_adultos");
let menu_grupos=document.getElementById("menu_grupos");

function activacion_menu_infantil() {
    
    menu_infantil.classList.add("activo");
    menu_adultos.classList.remove("activo");
    menu_grupos.classList.remove("activo");
};

function activacion_menu_adultos() {
    
    menu_infantil.classList.remove("activo");
    menu_adultos.classList.add("activo");
    menu_grupos.classList.remove("activo");
};

function activacion_menu_grupos() {
    
    menu_infantil.classList.remove("activo");
    menu_adultos.classList.remove("activo");
    menu_grupos.classList.add("activo");
};

menu_infantil_activo.addEventListener("click", activacion_menu_infantil);
menu_adultos_activo.addEventListener("click", activacion_menu_adultos);
menu_grupos_activo.addEventListener("click", activacion_menu_grupos);




