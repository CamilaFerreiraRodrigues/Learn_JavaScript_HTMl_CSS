const elementos = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'footer', texto: 'frase3'},
    {tag: 'section', texto: 'frase4'}
];

const container = document.querySelector('.container ')

//const [nome1, nome2, nome3, nome4] = elementos

console.log(`${elementos[2].tag}`)

for (i=0; i < elementos.length; i++){
    
    container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto} <${elementos[i].tag}/> `
}


