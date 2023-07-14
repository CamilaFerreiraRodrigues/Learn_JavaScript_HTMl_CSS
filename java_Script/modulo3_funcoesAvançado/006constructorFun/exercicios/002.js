/* Crie uma função construtora chamada Banco que não recebe nenhum parâmetro. A função deve criar um objeto Banco com um atributo privado saldo (inicializado como 0) e dois métodos públicos: depositar(valor) e sacar(valor).

O método depositar(valor) deve receber um número como argumento e adicionar o valor ao saldo do banco. O método sacar(valor) deve receber um número como argumento e subtrair o valor do saldo do banco, desde que haja saldo suficiente. Se o saldo for insuficiente, deve ser exibida uma mensagem de erro no console*/



function Banco(){

    let saldo = 0

    this.depositar = function(valor){
        saldo = saldo + valor
        console.log(`Seu saldo atual é ${saldo}`)
        
    }
    this.sacar = function(valor){
        if (saldo <= 0 || saldo < valor){
            console.log('saldo insuficiente')
        }
        else{
            saldo = saldo - valor
            console.log(`Seu saldo atual é ${saldo}`)

        }
    }

}

//cliente 1
const cliente1 = new Banco();
cliente1.depositar(150);
cliente1.depositar(200);
cliente1.sacar(300);
cliente1.sacar(60);


console.log('******************')
// cliente 2
const cliente2 = new Banco();
cliente2.depositar(1000);
cliente2.depositar(300);
cliente2.sacar(300);
cliente2.sacar(60);