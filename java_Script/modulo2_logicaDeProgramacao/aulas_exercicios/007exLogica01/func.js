// escreva uma uma função que recebe 2 num e retorne o maior deles

// Minha resolução

function maiorNumero (numero1, numero2) {
    const maiorDeles = numero1 > numero2 ? `${numero1}` : `${numero2}`;
    return maiorDeles;
};

const resultadoDaFuncao = maiorNumero(150, 20);
console.log(resultadoDaFuncao);


function maiorNumero (numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
};