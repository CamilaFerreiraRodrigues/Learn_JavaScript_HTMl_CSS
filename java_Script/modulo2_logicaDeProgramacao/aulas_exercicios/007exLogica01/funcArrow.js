// escreva uma uma função que recebe 2 números e retorne o maior deles usando arrow function
const maiorNum = (num1, num2) =>
    num1 > num2 ? `${num1} é o maior deles` : `${num2} é o maior`


console.log(maiorNum(40, 50));

// quando a arrow function tem apenas uma linhs pode tirar a chave e fica subentendido que a aquela linha é um return
