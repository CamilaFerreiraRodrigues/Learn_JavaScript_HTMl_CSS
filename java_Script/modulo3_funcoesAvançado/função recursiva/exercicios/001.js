/*Cálculo de fatorial:
Escreva uma função recursiva chamada fatorial que recebe um número inteiro positivo n como argumento e retorna o fatorial desse número.*/

function fatorial(n){
    if (n == 0){
        return 1;
    }
    else
    return n * fatorial(n-1);
}


const resultado = fatorial(6);
console.log(resultado)