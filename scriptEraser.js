const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const parrafoid = document.getElementById('parrafoid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    parrafoid,
    input,
});

h1.innerHTML = 'Nikito <br> Raigoza';
h1.innerText = 'Nikito <br> Raigoza';
console.log(p.getAttribute('atributo'));
p.setAttribute('atributo', 'incondicional');
console.log(p);

h1.classList.add('titulo');
h1.classList.remove('azul');
//h1.classList.toggle('azul');
//h1.classList.contains('azul');

input.value = 'nikoelpillo';
input.placeholder = 'escrbe alguna mamada aqui';

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png');
parrafoid.append(img);
parrafoid.innerHTML = '';

console.log(img);
console.log(document.createElement('img'));
