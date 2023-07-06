//FOR IN --> lê os INDICES (arrays) ou chaves (obj) 

// COM ARRAYS

const frutas = ['pera', 'maça', 'uva']; // vetor ou array


// vai ler os indices --> como se o i ja fosse declarado zero e percoresse todo o array 
for (let i in frutas){
    console.log(i) // mostras os indices
}

for (let a in frutas){
    console.log(frutas[a]) // os valores que estão dentro de casa indice
}

// COM OBJETOS

const pessoa = { nome: 'camila', sobrenome: 'ferreira', idade: 21, altura: 1.7}; 

// ao invés de fazer console.log(pessoa.nome);

 for (b in pessoa){
    console.log(b) // para mostrar os atributos
 }

 for (c in pessoa){
    console.log(c, pessoa[c]);  // pessoa[c] acessa os dados dentro de cada atributo.  
 }