var output = document.querySelector('#output');

var mensagem = '';
for(var i=1; i<=1000; i++){
    mensagem += `Javascript é a melhor linguagem ♥ | `;
}

output.innerHTML = `${mensagem}`;

