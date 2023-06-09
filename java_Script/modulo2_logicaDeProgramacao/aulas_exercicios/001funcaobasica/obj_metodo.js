// quando a func esta dentro do obj = METODO
const pessoa1 = {
    nome: 'camila',
    sobrenome: "rodrigues",
    idade: 21, // tem ques ter essa virgula sn da erro na func

     fala() {
        //THIS = o obj (pessoa1)
        console.log(` ${this.nome} ${this.sobrenome } esta dando oi..., e a idade atual dela é ${this.idade}`);
    },

    incremento(){
        console.log(this.idade++);
    }
};
pessoa1.fala();
pessoa1.incremento();
pessoa1.fala();
pessoa1.incremento();