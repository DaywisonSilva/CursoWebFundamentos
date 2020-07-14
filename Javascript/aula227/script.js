(function(){
    'use strict';
    mensagem = "Olá";
    console.log(mensagem);
})(); //Função auto-invocável - Não funciona



(function(){
    mensagem = "Olá";
    console.log(mensagem);
})(); //Função auto-invocável - Funciona


(function(){
    'use strict';
    function somar(arr){
        console.log(arguments);
    }
    somar(20, 20, 10, 30);
})();
