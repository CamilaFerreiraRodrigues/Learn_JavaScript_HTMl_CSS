// Declaração de func



// First-class objects (objs de primeira class)
// pode ser tradade como dado 
// podem ser tratadas como dados porq podem ser atribuidas a variaves, passadas como argumentos para outras funções, retornadas como valores de outras funções e até mesmo serem armazenadas em estruturas de dados, como arrays e objetos.

const souUmDado = function(){
    console.log('olá, tudo bem')
}


function executaFuncao (funcao){
    funcao();
}

executaFuncao(souUmDado);