// parametro
/* 
     arguments -> valores  passados para o parementro, representando a coleção de valores
     apenas funciona quando tema palavra function
*/
function funcao () {
    let total = 0;
    for ( let argumento of arguments) {
        total += argumento;
    }
    console.log(`ex 1: ${total}`);
}

funcao(10,30,50,5,2,3);

// caso a função n receba todos os parementros, o parementro irá receber o valores declarados na função
// null -> para não declarar valor de b, mas o c ser declarado 

function funcao1 (a, b=2, c= 3){
    console.log(a + b + c)
}
funcao1(2, null, 20)

//********************************************************** */

// operaçoes math 
// ...veriavel -> ex ...resto ->  (rest operator) capturados como array  e precisar ser o ultimo paramentro -> funciona com arrow function  
function operacao (operador, acumulador, ...resto){ 
    for (let numero of resto){
        if (operador === '+') acumulador+= numero;
        if (operador === '-') acumulador-= numero;
        if (operador === '*') acumulador*= numero;
        if (operador === '/') acumulador/= numero;
    }
    console.log(`ex3: ${acumulador}`);

}
operacao( '*', 10, 20, 30, 40)
/*
a funtion vai pegar o o primeiro valor, nesse caso "+" e guardar em operador
o segundo valor, 10, vai ficar no acumulador e o restante em "...resto"
*/