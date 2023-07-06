// IIFE ->  Immediately invokeed function expression (funções imediatas)

// função sem nome, então n tem como tocar no escopo global

(function(){
    console.log('ola, mundo')
    const nome = 'camila';
})(); // esse () no final está chamando a funçãp

// essa função função não tem contado com o escopo global, assim não tem confolito com variaeis que estao no escopo global

const nome = 'michael';
// pex. sabemos que uma variavel do tipo const não pode ser redeclarada, mas como o que está dento da função não tem contado com o escopo global, não tem conflito entre elas

console.log('**********************************');

(function(idade, peso, altura){ // aq ficam os paramentros, se tiver
     
    const sobrenome = ' ferreira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome (){
        console.log(criaNome('Camila'));
    }

    falaNome();
    console.log (idade, peso, altura);

})(20, 64, 1.70); // aqu ficam os argumentos, se tiver