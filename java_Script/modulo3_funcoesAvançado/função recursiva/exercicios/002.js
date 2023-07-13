/*Soma dos elementos de uma lista:
Escreva uma função recursiva chamada soma_lista que recebe uma lista de números como argumento e retorna a soma de todos os elementos da lista.*/

function somaLista(...rest){

    if (rest.length === 0){
     // length começa contar do 1
        return 0;
    }
    else{
        const [primeiroNum ,...restante] = rest
        return primeiroNum + somaLista(...restante)   
    }

}




const resultado = somaLista(10, 20 , 30 , 60);
console.log(resultado)