// funcao 

function raiz0 (a){
    let calcular = a ** 0.5;
    return calcular;
}

console.log(raiz0(9));



// func anonima 

const raiz1 = function (n) { // variavel raiz é igual a uma func anonima
    return n ** 0.5
};

console.log(raiz1(9));


// tipo 2 

const raiz2 = (n) => {
    return n**0.5;
};
console.log(raiz2(9));

// tipo 3

const raiz3 = n => n ** 0.5
console.log(raiz3(9));