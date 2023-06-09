/*let a = 'a';
let b = 'b';
let c = 'c';
[a,b,c] = [c, b, a];
console.log(a,b,c);*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];


//ATRICUIÇÃO VIA DESESTRURAÇÃO

//const [primeiroNumero, segundoNumero] = numeros;
//console.log(primeiroNumero, segundoNumero);


// PARA PEGAR O RESTO -- a ar resto pega todos o resto do array
const [primeiroNumero, segundoNumero, ...restoo] = numeros;
console.log(primeiroNumero, segundoNumero, restoo);