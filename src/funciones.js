

function saludar(nombre="Mundo"){
    alert("Hola " +nombre);
}

//saludar("Jorge");

function sumar(a=0, b=0){
    return Number(a) + Number (b);

}

const saludarButton = document.getElementById('saludar');
saludarButton.addEventListener('click', () => {
    const input = document.getElementById('nombre');
    const nombre = input.value;
    saludar(nombre);
})

const sumarButton = document.getElementById('sumar');
sumarButton.addEventListener('click', () => {
    const inputA = document.getElementById('numero-a');
    const inputB = document.getElementById('numero-b');
    const a = inputA.value;
    const b = inputB.value;
    const resultado = sumar(a, b);
    alert(resultado);
})
