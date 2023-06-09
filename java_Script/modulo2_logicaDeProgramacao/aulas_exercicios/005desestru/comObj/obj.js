const pessoa = {
    nome: 'camila',
    sobrenome: 'ferrira',
    idade: 21,
    endereco: {
        rua: ' gabriel garcia',
        numero: 321
    }
}

// ai temos um objeto dentro de outro obj

console.log(pessoa.nome, pessoa.endereco.rua);

// atribuiçõa via destruturação
const {nome, sobrenome}= pessoa;
console.log(nome, sobrenome);