//CALLBACK -> uma função que é chamada por outra função

//por ex há uma ordem no console

function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function f3(){
    console.log('f3');
}

f1();
f2();
f3();
console.log('Olá, Mundo!');

console.log('*****************************')

//Mas na web as vezes as funções tem tempos diferente de serem executadas e que acabam gastando mais tempo para serem executadas

//setTimeOut -> função que especifica o intervalo de tempo que algo irá ser executado

function f4(){
    setTimeout(function(){
        console.log('f4');
    }, 500);
    
}
function f5(){
    setTimeout(function(){
        console.log('f5');
    }, 1000);
    
}
function f6(){
    setTimeout(function(){
        console.log('f6');
    }, 800);
    
}

f4();
f5();
f6();
console.log('Olá, world!');
//nessw caso estamos definindo um time para que cada função seja executas apos determinado milesimo



