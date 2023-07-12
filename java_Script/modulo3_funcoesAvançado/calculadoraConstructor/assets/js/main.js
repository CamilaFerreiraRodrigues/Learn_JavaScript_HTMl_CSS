// Calculadora com constructor function

function Calculadora (){


    this.display = document.querySelector('.display');

    // metodo
    this.inicia = function(){
        this.cliqueBotoes();  
        this.pressionaEnter();
        this.pressionaBackspace();
    };

    //  outros metodos -> ações da calculadora 
    this.cliqueBotoes = function(){
        document.addEventListener('click', event => {
            const el = event.target;

            // se o que está sendo clicado tem clase "btn-num"
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            };

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
        }
            if(el.classList.contains('btn-del')){
                this.apagaUm();
        }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
        }
        })

    };

    this.btnParaDisplay = function(valor){
        this.display.value += valor;
        //  os botões digitados irão aparecer no display, que é o inpput
    }
    
    this.pressionaEnter = function(){
        this.display.addEventListener('keyup', e=>{ if (e.keyCode === 13){ this.realizaConta(); // se a pessoa apertar o enter realiza conta
        }
        
        })
    }

    this.realizaConta = function(){
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta);
        } catch(e){
            alert('conta invalida')
            return;
        }
    };

    this.clearDisplay = function(){
        this.display.value = '';
    };

    this.apagaUm= function(){
        this.display.value = this.display.value.slice(0,- 1);
    };
};

// chamando o metodo inicia

const teste1 = new Calculadora();
teste1.inicia();