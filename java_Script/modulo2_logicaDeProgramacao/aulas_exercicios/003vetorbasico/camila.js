
let nome = prompt('coloque seu nome')

window.document.body.innerHTML =` seu nome é ${nome} <br/>`
window.document.body.innerHTML += `seu nome tem ${nome.length} <br/>` 
window.document.body.innerHTML += `a segunda letra do nome é: ${nome[1]}`
window.document.body.innerHTML +=  `as tres ultimas letrad do seu nome são ${nome.slice(-3)} <br/>`
window.document.body.innerHTML += `qual o ultimo indice da letra A no nome ${nome.lastIndexOf('a')}` // para achar o incide de uma letra 