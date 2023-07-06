//factory function -- função que retorna obj

function criaCalculadora(){ // factory function

    return{
        
        /*
        PROPRIEDADES -> variavesi associadas ao objeto
        METODOS -> funções associadas ao objetos
        */
        display: document.querySelector('.display'), //selecionanodo o inpput
        bntClear: document.querySelector('.bnt-clear'),
        

        clearDisplay(){
            this.display.value = '';
        },

        inicia(){ //será executado quando quando chamarmos 'calculadora.inicia'
            this.cliqueBotoes();
        },

        //metodo--- que está dentro do metodo inicia e será executadada quando ocorrer o evento de 'click'
        cliqueBotoes() {//evento   callback-- função que ser ralizada quando o evento ocorrer
           

            //aqui o this = calculadora
            // mas depois do document... o this não vair mais calculadorae e sim document -> usa a arrow function

            document.addEventListener('click', e => { // quando clicar essa função será executada
                
                const el = e.target; // Aqui, estamos atribuindo o alvo do evento de clique à constante el. Ou seja, o elemento HTML em que ocorreu o clique.

                if(el.classList.contains('btn-num')){//se a variavel 'el' contem a class 'btn-num'

                    // metodo dentro de outro metodo
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

            });

        },

        btnParaDisplay(valor){
            this.display.value += valor;

        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();