// pular elementos dentro do array
/*os espacos vazios pulam um elemento do array*/
const nomes = ['camila', 'davi', 'michael', 'luci', 'alceni'];

const [nome1, , nome3, , nome4] = nomes;

console.log(nome1, nome3, nome4);