function Clean() {
    document.getElementById("ElFormulario").reset();
}

function sumar() {
    let x = parseInt(document.getElementById("Value1").value);
    let y = parseInt(document.getElementById("Value2").value);
    document.getElementById("ElResultado").innerHTML = x+y;
}

function restar() {
    let x = parseInt(document.getElementById("Value1").value);
    let y = parseInt(document.getElementById("Value2").value);
    document.getElementById("ElResultado").innerHTML = x-y;
}

function multiplicacion() {
    let x = parseInt(document.getElementById("Value1").value);
    let y = parseInt(document.getElementById("Value2").value);
    document.getElementById("ElResultado").innerHTML = x*y;
}

function division() {
    let x = parseInt(document.getElementById("Value1").value);
    let y = parseInt(document.getElementById("Value2").value);
    document.getElementById("ElResultado").innerHTML = x/y;
}

//MISC
const hola = document.querySelector("#MR_BEAST");
  console.log(hola);

hola.addEventListener("click", function(){
    console.log("Clicked on MR BEAST");
    document.getElementById("MR_BEAST").style.backgroundColor = "blue";
    document.getElementById("MR_BEAST").style.Color = "black";
    document.getElementById("MR_BEAST").style.boxShadow = "10px -10px 10px gray";
    debugger;
});

hola.addEventListener("mouseout", function(){
    console.log("May your L´s be many and your bitches few");
});

hola.addEventListener("mouseover", function(){
    console.log("Clck it or no balls");
});

window.addEventListener("keydown", (e) =>{
    console.log("STOOP");
    console.log(string.fromCharCode(e.keyCode));
});

window.addEventListener("keypress", () =>{
    console.log("OBAMA");
});

window.addEventListener("keyup", (e) =>{
    console.log("you stopped yipee");
});


window.addEventListener("load", () =>{
    console.log("ELEPHANTMARIO")
});

//TAREA

let hello = document.querySelector("#TURURURU");
hello.addEventListener("click", function(){
    let text= document.querySelector("#PAIN");
    document.getElementById("TURURURU").innerHTML = text;
    debugger;
});
/*
querySelector= selects class of a html object
getElementById= selects an ID of an html object
*/ 

//Calculadora mas avanzada
const Screen = document.querySelector(".Screen");
const Button = document.querySelectorAll(".btn");

Button.forEach(Botton => {
    Botton.addEventListener("click", () => {
        const Smash = Botton.textContent;

        if (Botton.id === "clear") {
            Screen.textContent = "0";
        }
        Screen.textContent = Smash;

        console.log(Botton.textContent);
    })
})