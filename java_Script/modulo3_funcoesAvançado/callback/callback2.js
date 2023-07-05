// a function rand vai geral numeros aleatorios, simulando um time diferente para elas 
// o obj do callback é permitir a execução do codigo de forma assincrona

function rand(min = 1000, max = 3000) {
    const num = Math.random () * (max - min) + min;
    return Math.floor(num)
}

function f4(callback){
    setTimeout(function(){
        console.log('f4');
        if(callback) callback();
    }, rand());
    
}
function f5(callback){
    setTimeout(function(){
        console.log('f5');
        if(callback) callback();
    }, rand());
    
}
function f6(callback){
    setTimeout(function(){
        console.log('f6');
        if(callback) callback();
    }, rand());
    
}

f4(f4Callback);


function f4Callback(){
    f5(f5Callback);
}


function f5Callback(){
    f6(f6Callback);
}

function f6Callback(){
    console.log('Olá, world!');
}

