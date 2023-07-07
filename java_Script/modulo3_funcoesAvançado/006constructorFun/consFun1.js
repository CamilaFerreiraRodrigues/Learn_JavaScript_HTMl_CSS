// Função construtora -> retorna objetos 

// assim como a Factory function, que constroi objetos ---- e cosntrutora constri  

// as duas são usadas em progração orientada a objeto -> para criar objetos 


// contrutura -> pascal case -> sempre declarar a variavel com letra maiuscula - por convenção

// "molde"

function Pessoa (nome, sobronome){

    //  atributos Privadas -> não estão disponiveis fora da constructor funtion
    const ID =12345;
    const metodoInterno = function() {

    }

    // atributos e metodos publicos -> "this"
    this.nome = nome;
    this.sobronome = sobronome;


    //metodos
    this.metodo =  function() {
        console.log( this.nome + ' Sou um metodo'); // o metodo precisa ser chamado
    }
}


// new -> novo objeto que usa o mesmo molde, nessa caso -> nova pessoa.
const pessoa1 = new Pessoa('Luiz', 'Otavio');
const pessoa2 = new Pessoa('Davi', 'Ferreira');

console.log(`${pessoa1.nome} e ${pessoa2.nome}`)
pessoa2.metodo();

