'use strict'
// Elementos globales
var sidebarList = document.getElementById("sidebarList");
var sidebarListOblig = document.getElementById("sidebarListOblig");
var sidebarListLife = document.getElementById("sidebarListLife");

var credsSeleccionados = 0;

/** WA */
let WA1057P1 = document.getElementById("WA1057P1")
let WA1057P2 = document.getElementById("WA1057P2")
let WA1057P3 = document.getElementById("WA1057P3")

WA1057P1.addEventListener("click",function(){
    WA1057P1.classList.toggle("active")
    WA1057P2.classList.toggle("active")
    WA1057P3.classList.toggle("active")
    // quitarWA1057()
    if(!WA1057P1.classList.contains("active")){
        setTimeout(() => {
            WA1057P1.classList.add("active");
            WA1057P2.classList.add("active");
            WA1057P3.classList.add("active");
            // agregarWA1057();
    }, 200);}
})

WA1057P2.addEventListener("click",function(){
    this.classList.toggle("active")
    WA1057P1.classList.toggle("active")
    WA1057P3.classList.toggle("active");
    // quitarWA1057()
    if(!WA1057P2.classList.contains("active")){
        setTimeout(() => {
            WA1057P1.classList.add("active");
            WA1057P2.classList.add("active");
            WA1057P3.classList.add("active");
            // agregarWA1057();
    }, 200);}
})

WA1057P3.addEventListener("click",function(){
    WA1057P3.classList.toggle("active");
    WA1057P2.classList.toggle("active");
    WA1057P1.classList.toggle("active");
    // quitarWA1057();
    if(!WA1057P3.classList.contains("active")){
        setTimeout(() => {
            WA1057P1.classList.add("active");
            WA1057P2.classList.add("active");
            WA1057P3.classList.add("active");
            // agregarWA1057();
    }, 200);}
})

function agregarWA1057(params) {
    let liWA1057 = document.createElement("li")
    liWA1057.id = "liWA1057"
    liWA1057.innerHTML = "<span class='tooltip' data-text='Esta unidad de formación y las Semanas Tec son obligatorias, no se pueden quitar de tu planeación'>0 UdC | WA1057: Mi plan de Vida en el Tec</span>"
    sidebarListOblig.appendChild(liWA1057);
}
function quitarWA1057(params) {
    let liWA1057 = document.getElementById("liWA1057")
    liWA1057.parentElement.removeChild(liWA1057)
}
agregarWA1057();

/** EG */
let EG1P1 = document.getElementById("EG1P1")
let EG1P2 = document.getElementById("EG1P2")
let EG1P3 = document.getElementById("EG1P3")

const html_EG = "<span class='tooltip' data-text='En esta UF podrás seleccionar una materia de varias opciones en 5 áreas distintas (EG10 a EG50). Tiene una duración de 15 semanas.'>3 UdC | Materia de Educación General</span>"

EG1P1.addEventListener("click",function(){
    if(EG1P1.classList.contains("active")){
        EG1P1.classList.remove("active");
        EG1P2.classList.remove("active");
        EG1P3.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("EG1")
    } else {
        EG1P1.classList.add("active");
        EG1P2.classList.add("active");
        EG1P3.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();
        addToList("EG1",html_EG)     
    };
});

EG1P2.addEventListener("click",function(){
    if(EG1P2.classList.contains("active")){
        EG1P1.classList.remove("active");
        EG1P2.classList.remove("active");
        EG1P3.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("EG1")
    } else {
        EG1P1.classList.add("active");
        EG1P2.classList.add("active");
        EG1P3.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();
        addToList("EG1",html_EG)     
    };
})

EG1P3.addEventListener("click",function(){
    if(EG1P3.classList.contains("active")){
        EG1P1.classList.remove("active");
        EG1P2.classList.remove("active");
        EG1P3.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("EG1")
    } else {
        EG1P1.classList.add("active");
        EG1P2.classList.add("active");
        EG1P3.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();
        addToList("EG1",html_EG)     
    };
})

/** ST */
let ST1 = document.getElementById("ST1")
ST1.addEventListener("click",function(){
    ST1.classList.toggle("active");
    // quitarST1();
    if(!ST1.classList.contains("active")){
        setTimeout(() => {
        ST1.classList.add("active");
        // agregarST1();
    }, 200);}
})

let ST2 = document.getElementById("ST2")
ST2.addEventListener("click",function(){
    ST2.classList.toggle("active");
    // quitarST2();
    if(!ST2.classList.contains("active")){
        setTimeout(() => {
        ST2.classList.add("active");
        // agregarST2();
    }, 200);}
})

let ST3 = document.getElementById("ST3")
ST3.addEventListener("click",function(){
    ST3.classList.toggle("active");
    // quitarST3();
    if(!ST3.classList.contains("active")){
        setTimeout(() => {
        ST3.classList.add("active");
        // agregarST3();
    }, 200);}
})

function agregarST1(params) {
    let liST1 = document.createElement("li")
    liST1.id = "liST1"
    liST1.innerHTML = "<span class='tooltip' data-text='Las Semanas Tec son UF que te permitirán desarrollarte integralmente, consulta las opciones en las secciones al realizar tu horario'>0 UdC | Semana Tec (semana 6)</span>"
    sidebarListOblig.appendChild(liST1);
}
function quitarST1(params) {
    let liST1 = document.getElementById("liST1")
    liST1.parentElement.removeChild(liST1)
}
agregarST1();

function agregarST2(params) {
    let liST2 = document.createElement("li")
    liST2.id = "liST2"
    liST2.innerHTML = "0 UdC | Semana Tec (Semana 12)"
    sidebarListOblig.appendChild(liST2);
}
function quitarST2(params) {
    let liST2 = document.getElementById("liST2")
    liST2.parentElement.removeChild(liST2)
}
agregarST2();

function agregarST3(params) {
    let liST3 = document.createElement("li")
    liST3.id = "liST3"
    liST3.innerHTML = "0 UdC | Semana Tec 18 - 1 (Semana 18)"
    sidebarListOblig.appendChild(liST3);
}
function quitarST3(params) {
    let liST3 = document.getElementById("liST3")
    liST3.parentElement.removeChild(liST3)
}
agregarST3();

function addToList(ufToList, ufToListText) {
    let liElement = document.createElement("li")
    liElement.id = "li-"+ufToList;
    liElement.innerHTML = ufToListText
    sidebarList.appendChild(liElement);
}

function removeFromList(ufToList) {
    let liElement = document.getElementById("li-"+ufToList)
    liElement.parentElement.removeChild(liElement)
}

/** B */
const B1HTML =  "<span class='tooltip' data-text='Esta UF es un Bloque (de ahí que la clave termine en B). Es una UF que tiene múltiples módulos distintos y un reto para realizarse en 5 semanas.'>3 UdC | F1001B: Modelación de la ingeniería y ciencias</span>" 
let B1 = document.getElementById("B1")
B1.addEventListener("click",function(){
    if(B1.classList.contains("active")){
        B1.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("B1")
    } else {
        B1.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();   
        addToList("B1",B1HTML)     
    };
})

let B2 = document.getElementById("B2");
B2.addEventListener("click",function(){
    if(B2.classList.contains("active")){
        B2.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("B2")
    } else {
        B2.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();
        addToList("B2","3 UdC | F1002B: Modelación del movimiento en bioingeniería y procesos químicos")     
    };
});

let B3 = document.getElementById("B3")
B3.addEventListener("click",function(){
    if(B3.classList.contains("active")){
        B3.classList.remove("active");
        credsSeleccionados-=3;
        actualizarDom();
        removeFromList("B3")
    } else {
        B3.classList.add("active");
        credsSeleccionados+=3;
        actualizarDom();
        addToList("B3","3 UdC | F1003B: Aplicación de las leyes de conservación en ingeniería de procesos");     
    }
})

/** Materias */
// Materia 1 periodo 1 (y 2, se quita el id M1P2 de la lista de selección)
const html_M1P2_2periodos = "<span class='tooltip' data-text='Esta UF abarca 10 semanas. Procura seleccionarla primero al hacer tu horario'>2 UdC | TC1028: Pensamiento computacional para ingeniería</span>"
let M1P1 = document.getElementById("M1P1")
M1P1.addEventListener("click",function(){
    if(M1P1.classList.contains("active")){
        M1P2.classList.remove("active","tenWk");
        M1P1.classList.remove("active","tenWk");
        credsSeleccionados-=2;
        actualizarDom();
        removeFromList("M1P1")
    } else {
        M1P1.classList.add("active","tenWk");
        M1P2.classList.add("active","tenWk");
        credsSeleccionados+=2;
        actualizarDom();
        addToList("M1P1",html_M1P2_2periodos)     
    }
});

let M1P2 = document.getElementById("M1P2")
M1P2.addEventListener("click",function(){
    if(M1P2.classList.contains("active")){
        M1P2.classList.remove("active","tenWk");
        M1P1.classList.remove("active","tenWk");
        credsSeleccionados-=2;
        actualizarDom();
        removeFromList("M1P1")
    } else {
        M1P2.classList.add("active","tenWk");
        M1P1.classList.add("active","tenWk");
        credsSeleccionados+=2;
        actualizarDom();
        addToList("M1P1",html_M1P2_2periodos)     
    }
});

let M1P3 = document.getElementById("M1P3")
M1P3.addEventListener("click",function(){
    if(M1P3.classList.contains("active")){
        M1P3.classList.remove("active");
        credsSeleccionados-=1;
        actualizarDom();
        removeFromList("M1P3")
    } else {
        M1P3.classList.add("active");
        credsSeleccionados+=1;
        actualizarDom();
        addToList("M1P3","1 UdC | Q1029: Análisis de la estructura y transformación de la materia")     

    }
});

let M2P1 = document.getElementById("M2P1")
M2P1.addEventListener("click",function(){
    if(M2P1.classList.contains("active")){
        M2P1.classList.remove("active");
        credsSeleccionados-=1;
        actualizarDom();
        removeFromList("M2P1")
    } else {
        M2P1.classList.add("active");
        credsSeleccionados+=1;
        actualizarDom();
        addToList("M2P1","1 UdC | Q1028: Fundamentación de la estructura y transformación de la materia")     
    }
});

// M2 del periodo 2 y 3 se cambia por una sola de 10 semanas
let M2P2 = document.getElementById("M2P2")
M2P2.addEventListener("click",function(){
    if(M2P2.classList.contains("active")){
        M2P2.classList.remove("active","tenWk");
        M2P3.classList.remove("active","tenWk");
        credsSeleccionados-=2;
        actualizarDom();
        removeFromList("M2P2")
    } else {
        M2P2.classList.add("active","tenWk");
        M2P3.classList.add("active","tenWk");
        credsSeleccionados+=2;
        actualizarDom();
        addToList("M2P2","2 UdC | MA1028: Modelación matemática fundamental")     
    }
});

let M2P3 = document.getElementById("M2P3")
M2P3.addEventListener("click",function(){
    if(M2P3.classList.contains("active")){
        M2P3.classList.remove("active","tenWk");
        M2P2.classList.remove("active","tenWk");
        credsSeleccionados-=2;
        actualizarDom();
        removeFromList("M2P2")
    } else {
        M2P3.classList.add("active","tenWk");
        M2P2.classList.add("active","tenWk");
        credsSeleccionados+=2;
        actualizarDom();
        addToList("M2P2","2 UdC | MA1028: Modelación matemática fundamental")     
    }
});

// Actualizar créditos
function actualizarDom(){
    let creditosTotales = document.getElementById("creditosTotales");
    creditosTotales.innerHTML = "Créditos totales: <strong>" + credsSeleccionados + "</strong>";
};
actualizarDom()

// Tomar UFs life y colocarlas en la lista
let inputLife1 = document.getElementById("inputLife1")
inputLife1.addEventListener("focusout",function(){
    let hasChild = sidebarListLife.querySelector("#inputLife1_lielem");
    if(hasChild != null){
        sidebarListLife.removeChild(hasChild)
    }   
    if(inputLife1.value !== ""){
        let liElement = document.createElement("li")
        liElement.innerText = "LiFE | "+ inputLife1.value
        liElement.id = "inputLife1_lielem";
        sidebarListLife.appendChild(liElement);
    } 
});

let inputLife2 = document.getElementById("inputLife2")
inputLife2.addEventListener("focusout",function(){
    let hasChild = sidebarListLife.querySelector("#inputLife2_lielem");
    if(hasChild != null){
        sidebarListLife.removeChild(hasChild)
    }   
    if(inputLife2.value !== ""){
        let liElement = document.createElement("li")
        liElement.innerText = "LiFE | "+ inputLife2.value
        liElement.id = "inputLife2_lielem";
        sidebarListLife.appendChild(liElement);
    } 
});

let inputLife3 = document.getElementById("inputLife3")
inputLife3.addEventListener("focusout",function(){
    let hasChild = sidebarListLife.querySelector("#inputLife3_lielem");
    if(hasChild != null){
        sidebarListLife.removeChild(hasChild)
    }   
    if(inputLife3.value !== ""){
        let liElement = document.createElement("li")
        liElement.innerText = "LiFE | "+ inputLife3.value
        liElement.id = "inputLife3_lielem";
        sidebarListLife.appendChild(liElement);
    } 
});

//alert("Selecciona de la lista de Unidades de Formación las materias y \nbloques de tu interés y escribe las Unidades de Formación \nLIFE que más te interesen. \n\nEste ejercicio NO ES TU INSCRIPCIÓN, es un complemento \nal ejercicio de Mi Planeación");