const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.querySelector('.resultado');
const form = document.querySelector('.form');

// form.addEventListener('submit', calcular);

// function calcular(event) {
//     // console.log({event})
//     event.preventDefault();
//     const result = parseInt(input1.value) + parseInt(input2.value);
//     resultado.innerText = 'El resultado es: ' + result;
//     console.log(typeof(result));
// }

btnCalcular.addEventListener('click', calcular);

function calcular(event) {
    // console.log({event})
    // event.preventDefault();
    const result = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = 'El resultado es: ' + result;
    console.log(typeof(result));
}