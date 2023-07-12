// função que chama ela mesma -> tipo um loop
// tem um limite -> em algum momento ele para de executar


function recursiva(max){
    
    console.log(max);
    if (max >= 10 ) return;
    max++;
    
    // chama ela novamente
    recursiva(max);
}

recursiva(0);