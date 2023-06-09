// objetos 


// array [], objetos {}

/*const pessoa1 = {
    nome: 'luiz', // tem que colocar ',' no final 
    sobrenome:'miranda',
    idade: 35
};

console.log(pessoa1.nome); // printandoo o nome 
*/

// Mas dessa forma ainda seria necessario criar muitos obj
// logo pode- se criar uma func 

function criaPessoa(nome, sobrenome, idade){
    return{ // o return vai rretornar um OBJ
        nome: nome, // como ta nome: nome, pode deixar apenas um "nome"
        sobrenome: sobrenome,
        idade : idade
    };

}
 const pessoa2 = criaPessoa('camila', 'ferreira', 21);
 const pessoa3= criaPessoa('davi', 'rodrigues', 14);
 const pessoa4 = criaPessoa('michael', 'santos', 20);
 console.log(pessoa2.nome);
 console.log(pessoa3.sobrenome);