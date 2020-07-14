(function(){
    'use strict'
    function calcularIMC(peso, altura, callback){
        let imc = peso / altura**2;
        if(callback && typeof(callback) === 'function'){
            return callback(imc);
        }
        console.log('Não passou callback');
        return imc;
    }

    function classificaIMC(imc){
        if(imc < 16.9){
            return 'Muito abaixo do peso';
        }else if(imc <= 18.4){
            return 'Abaixo do peso';
        }else if(imc <= 24.9){
            return 'Peso normal';
        }else if(imc <= 29.9){
            return 'Acima do peso';
        }else if(imc <= 34.9){
            return 'Obesidade grau 1'
        }else if(imc <= 40){
            return 'Obesidade grau 1'
        }else if(imc > 40){
            return 'Obesidade grau 3'
        }
    }

    let peso = 65;
    let altura = 1.75;
    let imc = calcularIMC(peso, altura, classificaIMC);
    console.log('Classificação IMC: '+ imc);
})()


