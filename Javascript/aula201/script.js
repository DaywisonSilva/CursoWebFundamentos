function verifica(){
    var x = "10";

    try{
        if(isNaN(x)) throw 'Você precisa informar um número'
        if(x < 10 || x > 20) throw 'Informe um número entre 10 e 20'
    } catch(erro){
        console.log('Erro: '+erro);
    }
}

verifica();
