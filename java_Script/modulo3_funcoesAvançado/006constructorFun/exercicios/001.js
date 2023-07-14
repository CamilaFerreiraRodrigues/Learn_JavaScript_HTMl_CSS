/*Criar um construtor de objetos Carro:
Crie uma função construtora chamada Carro que recebe três parâmetros: marca, modelo e ano. A função deve criar um objeto Carro com os atributos marca, modelo, ano e status (inicialmente "desligado"). Além disso, a função deve ter os métodos ligar() e desligar(), que alteram o valor do atributo status para "ligado" e "desligado", respectivamente.*/


function Carro(marca, modelo, ano){//parametros
    // atributos 
    this.marca = marca;
    this.modelo = modelo;
    this.ano= ano;
    this.status = 'desligado';

    this.ligar=  function() {
        this.status = 'ligado'
        console.log('O carro está ligado')
    }
    this.desligado= function() {
        this.status = 'desligado'
        console.log('O carro está desligado')
    }
}

const carro1 = new Carro('fiat', 'uno', 2020);
console.log(`Marca: ${carro1.marca}.\nModelo: ${carro1.modelo}.\nAno ${carro1.ano} status: ${carro1.status}`);

console.log('************************')
carro1.ligar();

// AGORA O ACARRO ESTA LIGADO

console.log(`Marca: ${carro1.marca}.\nModelo: ${carro1.modelo}.\nAno ${carro1.ano} status: ${carro1.status}`);


// criando mais de um obj como a mesma função contrutora 

const carro2 = new Carro('toyota', 'corrola', 2022)
console.log(carro2)