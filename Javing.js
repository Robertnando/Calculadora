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


//Calculadora mas avanzada
const Screen = document.querySelector(".Screen");
const Button = document.querySelectorAll(".btn");

Button.forEach(Botton => {
    Botton.addEventListener("click", () => {
        const Smash = Botton.textContent;

        if (Botton.id === "clear") {
            Screen.textContent = "0";
        }
        Screen.textContent += Smash;

        console.log(Botton.textContent);
    })
})