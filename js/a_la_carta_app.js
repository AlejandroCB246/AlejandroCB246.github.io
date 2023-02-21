// Elementos de los div en html

let imagen_plato_entrada=document.getElementById("imagen_plato_entrada");
let imagen_plato_fuertes=document.getElementById("imagen_plato_fuertes");
let imagen_plato_postre=document.getElementById("imagen_plato_postre");

// Elementos de los platos y bebidas de entrada

let plato1_entrada=document.getElementById("plato1_entrada");
let plato2_entrada=document.getElementById("plato2_entrada");
let plato3_entrada=document.getElementById("plato3_entrada");

// imagenes
let img_plato1_entrada=document.createElement("img");
img_plato1_entrada.src="imgs/miso.jpg";
img_plato1_entrada.classList.add("img-fluid", "rounded");

let img_plato2_entrada=document.createElement("img");
img_plato2_entrada.src="imgs/nigiri.jpg";
img_plato2_entrada.classList.add("img-fluid", "rounded");

let img_plato3_entrada=document.createElement("img");
img_plato3_entrada.src="imgs/gyoza.jpg";
img_plato3_entrada.classList.add("img-fluid", "rounded");



function mostrar_plato1_entrada() {
    imagen_plato_entrada.appendChild(img_plato1_entrada);
    imagen_plato_entrada.removeChild(img_plato2_entrada);
    imagen_plato_entrada.removeChild(img_plato3_entrada);
};

function mostrar_plato2_entrada() {
    imagen_plato_entrada.appendChild(img_plato2_entrada);imagen_plato_entrada.removeChild(img_plato1_entrada);
    imagen_plato_entrada.removeChild(img_plato3_entrada);
};

function mostrar_plato3_entrada() {
    imagen_plato_entrada.appendChild(img_plato3_entrada);imagen_plato_entrada.removeChild(img_plato2_entrada);imagen_plato_entrada.removeChild(img_plato1_entrada);
};

plato1_entrada.addEventListener("click", mostrar_plato1_entrada);
plato2_entrada.addEventListener("click", mostrar_plato2_entrada);
plato3_entrada.addEventListener("click", mostrar_plato3_entrada);

// Elementos de los platos y bebidas fuertes

let plato1_fuertes=document.getElementById("plato1_fuertes");
let plato2_fuertes=document.getElementById("plato2_fuertes");
let plato3_fuertes=document.getElementById("plato3_fuertes");

// imagenes
let img_plato1_fuertes=document.createElement("img");
img_plato1_fuertes.src="imgs/sashimi.jpg";
img_plato1_fuertes.classList.add("img-fluid", "rounded");

let img_plato2_fuertes=document.createElement("img");
img_plato2_fuertes.src="imgs/yakisoba.jpg";
img_plato2_fuertes.classList.add("img-fluid", "rounded");

let img_plato3_fuertes=document.createElement("img");
img_plato3_fuertes.src="imgs/katsudon.jpg";
img_plato3_fuertes.classList.add("img-fluid", "rounded");




function mostrar_plato1_fuertes() {
    imagen_plato_fuertes.appendChild(img_plato1_fuertes);
    imagen_plato_fuertes.removeChild(img_plato2_fuertes);
    imagen_plato_fuertes.removeChild(img_plato3_fuertes);
};

function mostrar_plato2_fuertes() {
    imagen_plato_fuertes.appendChild(img_plato2_fuertes);imagen_plato_fuertes.removeChild(img_plato1_fuertes);
    imagen_plato_fuertes.removeChild(img_plato3_fuertes);
};

function mostrar_plato3_fuertes() {
    imagen_plato_fuertes.appendChild(img_plato3_fuertes);imagen_plato_fuertes.removeChild(img_plato2_fuertes);imagen_plato_fuertes.removeChild(img_plato1_fuertes);
};

plato1_fuertes.addEventListener("click", mostrar_plato1_fuertes);
plato2_fuertes.addEventListener("click", mostrar_plato2_fuertes);
plato3_fuertes.addEventListener("click", mostrar_plato3_fuertes);

// Elementos de los platos y bebidas postre

let plato1_postre=document.getElementById("plato1_postre");
let plato2_postre=document.getElementById("plato2_postre");
let plato3_postre=document.getElementById("plato3_postre");

// imagenes
let img_plato1_postre=document.createElement("img");
img_plato1_postre.src="imgs/mochi.jpg";
img_plato1_postre.classList.add("img-fluid", "rounded");

let img_plato2_postre=document.createElement("img");
img_plato2_postre.src="imgs/tartar.jpg";
img_plato2_postre.classList.add("img-fluid", "rounded");

let img_plato3_postre=document.createElement("img");
img_plato3_postre.src="imgs/souffle_pancake.jpg";
img_plato3_postre.classList.add("img-fluid", "rounded");




function mostrar_plato1_postre() {
    imagen_plato_postre.appendChild(img_plato1_postre);
    imagen_plato_postre.removeChild(img_plato2_postre);
    imagen_plato_postre.removeChild(img_plato3_postre);
};

function mostrar_plato2_postre() {
    imagen_plato_postre.appendChild(img_plato2_postre);imagen_plato_postre.removeChild(img_plato1_postre);
    imagen_plato_postre.removeChild(img_plato3_postre);
};

function mostrar_plato3_postre() {
    imagen_plato_postre.appendChild(img_plato3_postre);imagen_plato_postre.removeChild(img_plato2_postre);imagen_plato_postre.removeChild(img_plato1_postre);

};

plato1_postre.addEventListener("click", mostrar_plato1_postre);
plato2_postre.addEventListener("click", mostrar_plato2_postre);
plato3_postre.addEventListener("click", mostrar_plato3_postre);


// Parte de continuar

// mostrar contenedor escondido
let btn_continuar=document.getElementById("boton_continuar");
let contenedor_escondido=document.getElementById("contenedor_escondido");

function mostrar_contenido_escondido() {
    contenedor_escondido.removeAttribute("hidden");
};

btn_continuar.addEventListener("click", mostrar_contenido_escondido);

// Mostrar info a pagar

let info_plato_entrada=document.getElementById("info_plato_entrada");
let info_plato_fuerte=document.getElementById("info_plato_fuerte");
let info_plato_postre=document.getElementById("info_plato_postre");

let info_bebida_entrada=document.getElementById("info_bebida_entrada");
let info_bebida_fuerte=document.getElementById("info_bebida_fuerte");
let info_bebida_postre=document.getElementById("info_bebida_postre");

let bebida1_entrada=document.getElementById("bebida1_entrada");
let bebida2_entrada=document.getElementById("bebida2_entrada");
let bebida3_entrada=document.getElementById("bebida3_entrada");

// Elementos de platos de entrada

document.getElementById("plato1_entrada").onclick=
function mostrar_info_plato1() {
    info_plato_entrada.innerText="Sopa miso";
};
document.getElementById("bebida1_entrada").onclick=
function mostrar_info_bebida1() {
    info_bebida_entrada.innerText=" y Agua";
};

document.getElementById("plato2_entrada").onclick=
function mostrar_info_plato2() {
    info_plato_entrada.innerText="Nigiri";
};
document.getElementById("bebida2_entrada").onclick=
function mostrar_info_bebida2() {
    info_bebida_entrada.innerText=" y té de limón";
};

document.getElementById("plato3_entrada").onclick=
function mostrar_info_plato3() {
    info_plato_entrada.innerText="Gyoza";
};
document.getElementById("bebida3_entrada").onclick=
function mostrar_info_bebida3() {
    info_bebida_entrada.innerText=" y café";
};


// Elementos de platos fuertes

document.getElementById("plato1_fuertes").onclick=
function mostrar_info_plato1() {
    info_plato_fuerte.innerText="Sashimi";
};
document.getElementById("bebida1_fuerte").onclick=
function mostrar_info_bebida1() {
    info_bebida_fuerte.innerText=" y limonada";
};

document.getElementById("plato2_fuertes").onclick=
function mostrar_info_plato2() {
    info_plato_fuerte.innerText="Yakisoba";
};
document.getElementById("bebida2_fuerte").onclick=
function mostrar_info_bebida2() {
    info_bebida_fuerte.innerText=" y Coca Cola";
};

document.getElementById("plato3_fuertes").onclick=
function mostrar_info_plato3() {
    info_plato_fuerte.innerText="Katsudon";
};
document.getElementById("bebida3_fuerte").onclick=
function mostrar_info_bebida3() {
    info_bebida_fuerte.innerText=" y Asahi";
};


// Elementos de platos de postre

document.getElementById("plato1_postre").onclick=
function mostrar_info_plato1() {
    info_plato_postre.innerText="Mochi";
};
document.getElementById("bebida1_postre").onclick=
function mostrar_info_bebida1() {
    info_bebida_postre.innerText=" y piña";
};

document.getElementById("plato2_postre").onclick=
function mostrar_info_plato2() {
    info_plato_postre.innerText="Tartar de zanahoria";
};
document.getElementById("bebida2_postre").onclick=
function mostrar_info_bebida2() {
    info_bebida_postre.innerText=" y sandía";
};

document.getElementById("plato3_postre").onclick=
function mostrar_info_plato3() {
    info_plato_postre.innerText="Souffle Pancake";
};
document.getElementById("bebida3_postre").onclick=
function mostrar_info_bebida3() {
    info_bebida_postre.innerText=" y fanta";
};

// Total a pagar
let total_pagar=document.getElementById("total_pagar");
let randm_num=(`${Math.floor(Math.random() * 200)} $`);

total_pagar.innerText=randm_num;