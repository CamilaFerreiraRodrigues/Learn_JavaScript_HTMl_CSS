
const num=[1, 2,3,4,5];

let i = 0;
do{

    let numero = num[i];
    
   // let divisao = numero/2;
   
    if (numero%2 == 0){
        console.log(numero + ' :esse numero é par')
        i++;
        continue; // o continue faz voltar no incio do loop
        
    }
    console.log(numero+ ' :esse numero é impar')
    i++;
}while (i< num.length);