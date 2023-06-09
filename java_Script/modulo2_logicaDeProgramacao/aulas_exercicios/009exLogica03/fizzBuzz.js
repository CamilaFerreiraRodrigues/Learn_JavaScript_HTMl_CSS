/*Escreva uma função que recebe um número e retorne o seguinte
Num divisivel por 3 = fizz
Num divisivel por 4 = BUzz
Num divisivel por 3 e 5 = FizzBuzz
Num NÃo é divisivel por 3 e 5 = retorne o proprio num
checcar se é um num
use a fun com num de 0 a 100 */

const FizzBuzz = numero => {
    if (typeof numero !== 'number'){return numero;} 
    else if (numero % 3 === 0 && numero % 5 === 0){return  `${numero} FizzBuzz`;}
    else if (numero % 5 === 0){ return `${numero} Buzz`;}
    else if (numero % 3 === 0) {return `${numero} Fizz`;}
    return numero;
}

for ( let i = 0; i<= 100; i++){
    console.log( FizzBuzz(i));
}