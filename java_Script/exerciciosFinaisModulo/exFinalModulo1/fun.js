function imc (peso, altura){

    const calcular = peso/(altura*altura);
    return calcular;

}

function idade (anoAtual, anoNascimento){
    let idadePessoa = anoAtual-anoNascimento;
    return idadePessoa;
}


let idadeCliente = idade(2023, 2002);
let imcTeste = imc(63, 1.70); 
console.log(`o imc  é ${imcTeste.toFixed(1)} e a idade é ${idadeCliente} `);
let idadeClientee = idade(2023, 2000);
console.log(` a idade é ${idadeClientee} `);