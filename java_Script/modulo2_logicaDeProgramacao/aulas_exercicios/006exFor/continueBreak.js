const numeros = [0,1,2,3,4,5,6,7,8,9,10];

let i =0;

do{
    let num = numeros[i];

    if (num === 2){
        console.log('pulei o num 2');
        i++;
        continue; // continue faz voltar ao inicio do loop
    }

    console.log(num);
    i++;
} while (i<numeros.length);

console.log('-------------------');

 i=0;
do{
    let num = numeros[i];

    if (num === 7){
        console.log('parei no 7');
        i++;
        break; // breck depois de acha ro valor para o loop;
    }

    console.log(num);
    i++;
} while (i<numeros.length);
