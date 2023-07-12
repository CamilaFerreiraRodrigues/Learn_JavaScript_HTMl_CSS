const nome = ['edu', 'mara', 'camila'];
nome[2]= 'davi'
console.log(nome)

// tem como deletar tambem --- sem alterar os indices

delete nome[1];
console.log(nome)


// separara uma string em Array

const nome2 = 'Camila Ferreira Rodrigues';
const nomeSplit = nome2.split(' ');  // tem um esppaço
console.log(nomeSplit);