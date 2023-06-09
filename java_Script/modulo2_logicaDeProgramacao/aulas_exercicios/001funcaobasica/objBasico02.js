// quando a func esta dentro do obj = METODO
const pessoa1 = {
    nome: 'camila',
    sobrenome: "rodrigues",
    idade: 21, // tem ques ter essa virgula sn da erro na func

// aqui esta fun dentro do obj
    /* function */ fala() {
        console.log(`olá, meu nome é ${pessoa1.nome} ${pessoa1.sobrenome } e tenho ${pessoa1.idade}`);
    }
};
pessoa1.fala();