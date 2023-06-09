// para não atualizar a pagina

/* quando criamos uma variavel ela fica no escopo global, ou seja , e possivel ver la no consolo do navegador --
assim, cria dentro de um a funcao para que so seja acessado quando chamado 
*/
function meuEscopo (){ 
    // uma forma de fazer com que o form n seja enviado com a atualiz da pag 
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const vetorPessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault ();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso= form.querySelector('.peso');
        const altura = form.querySelector('.altura');
    
    // value pois quero o valor que ta dentro do input
    


    // add o obj no vetor 
    vetorPessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

     console.log(vetorPessoas);
    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}`+ ` ${peso.value} ${altura.value}</p>`;
}

    form.addEventListener('submit', recebeEventoForm);
}
// so vai ser executada se eu chamar a funcao 
meuEscopo();

// armazenamos os usadno undo um obj dentro de um array